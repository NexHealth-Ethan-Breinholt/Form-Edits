"use client";

import React, { useEffect, useState } from "react"
import { useFormContext } from "./form-context";
import ComponentElement from "./component-element";
import { getGeneralType } from "../lib/components/component-data";

interface FormDisplayerProps {
    filePath: string,
}

export default function FormDisplayer({ filePath }: FormDisplayerProps) {
    const { formData, setFormData } = useFormContext();

    const [fetchedForm, setFetchedForm] = useState(false);
    const [displayHTML, setDisplayHTML] = useState<React.ReactNode>();

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

        return <ComponentElement
            key={index}
            data={data}
            path={currentPath} />
    }

    useEffect(() => {
        const getFormData = async () => {
            if (!fetchedForm) {
                try {
                    const response = await fetch(filePath)
                    if (!response.ok) {
                        throw new Error(`Failed to fetch file! ${response.status}`);
                    }
                    const data = await response.json();
                    setFormData(data);
                    setFetchedForm(true);
                }
                catch (error) {
                    console.error("Failed to fetch form data:", error);
                }
            }
        }

        getFormData();
    }, [filePath]);

    useEffect(() => {
        if (formData) {
            setDisplayHTML(displayFormData(formData));
        }
    }, [formData]);

    return displayHTML;
}