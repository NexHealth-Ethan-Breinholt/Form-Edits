"use client";

import React, { useEffect, useState } from "react"
import { useFormContext } from "./form-context";
import ComponentElement from "./component-element";
import { getGeneralType } from "../lib/components/component-data";

const noDataToDisplayHTML = <div>No data to display</div>

export default function FormDisplayer() {
    const { formData, setFormData } = useFormContext();

    const [displayHTML, setDisplayHTML] = useState<React.ReactNode>(noDataToDisplayHTML);

    const displayFormData = (data: any) => {
        if (!("components" in data)) {
            return <div>No data to display...</div>
        }

        const children = data['components'].map((component: string, index: number) => {
            return exploreComponent(component, index, "components." + index);
        });

        return <ComponentElement data={data} path="">{children}</ComponentElement>
    }

    const exploreComponent = (data: any, index: number, currentPath: string) => {
        if (!data) {
            console.warn("Attempted to explore component but no data was provided!");
            return <></>;
        }

        const type = "type" in data ? getGeneralType(data.type) : "unknown";

        if (type === "columns") {
            const columnSizes = [];
            const columnsContent = [];

            for (const columnId in data['columns']) {
                columnSizes.push(data['columns'][columnId]['width']);

                const columnElements: React.ReactNode[] = [];

                data['columns'][columnId]['components'].map((component: any, index: number) => {
                    columnElements.push(exploreComponent(component, index, currentPath + ".columns." + columnId + ".components." + index));
                });

                columnsContent.push(<>{columnElements}</>);
            }

            return <ComponentElement
                key={currentPath}
                data={data}
                path={currentPath}
                columnSizes={columnSizes}
                columnsContent={columnsContent} />;
        }
        else if (type === "panel") {
            return <ComponentElement
                key={index}
                data={data}
                path={currentPath}>
                    {
                        data.components.map((component: any, index: number) => {
                            return exploreComponent(component, index, currentPath + ".components." + index);
                        })
                    }
            </ComponentElement>;
        }

        return <ComponentElement
            key={index}
            data={data}
            path={currentPath} />
    }

    useEffect(() => {
        if (formData) {
            setDisplayHTML(displayFormData(formData));
        }
        else {
            setDisplayHTML(noDataToDisplayHTML);
        }
    }, [formData]);

    return displayHTML;
}