"use client";

import React, { useEffect, useState } from "react"
import Textfield from "./form-components/textfield";
import Columns from "./form-components/columns";
import LocationLogo from "./form-components/location-logo";
import PaymentMethod from "./form-components/payment-method";
import Content from "./form-components/content";
import Panel from "./form-components/panel";
import Signature from "./form-components/signature";
import Date from "./form-components/date";
import Radio from "./form-components/radio";
import { useFormContext } from "./form-context";
import Unimplemented from "./form-components/unimplemented";

interface FormDisplayerProps {
    filePath: string,
}

export default function FormDisplayer({ filePath }:FormDisplayerProps) {
    const { formData, setFormData } = useFormContext();

    const [fetchedForm, setFetchedForm] = useState(false);
    const [displayHTML, setDisplayHTML] = useState<React.ReactNode>();

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
            setDisplayHTML(displayFormData(formData));
        }

        const displayFormData = (data: any) => {
            if (!("components" in data)) {
                return <div>No data to display...</div>
            }

            const children = data['components'].map((component: string, index: number) => {
                return exploreComponent(component, index, "components." + index);
            });

            return <Panel type={data['type']} path="" label={data['label']}>{children}</Panel>
        }

        const exploreComponent = (data: any, index: number, currentPath: string) => {
            const type = getType(data['type']);

            const disabled = data["disabled"];
            const hidden = data["hidden"];

            switch (type) {
                case "columns":
                    const columnSizes = [];
                    const columnContents = [];
                    
                    for (const columnId in data['columns']) {
                        columnSizes.push(data['columns'][columnId]['width']);

                        const columnElements: React.ReactNode[] = [];

                        data['columns'][columnId]['components'].map((component: any, index: number) => {
                            columnElements.push(exploreComponent(component, index, currentPath + ".columns." + columnId + ".components." + index));
                        });

                        columnContents.push(<>{columnElements}</>);
                    }

                    return <Columns
                        key={index}
                        type={type}
                        columnSizes={columnSizes}
                        columnsContent={columnContents}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />;
                case "content":
                    return <Content
                        key={index}
                        label={data['html']}
                        type={type}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "date":
                    return <Date
                        key={index}
                        label={data['label']}
                        type={type}
                        required={data['validate']['required']}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "locationlogo":
                    return <LocationLogo
                        key={index}
                        type={type}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "radio":
                    return <Radio
                        key={index}
                        label={data['label']}
                        type={type}
                        required={data['validate']['required']}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "signature":
                    return <Signature
                        key={index}
                        label={data['label']}
                        type={type}
                        required={data['validate']['required']}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "textfield":
                    return <Textfield
                        key={index}
                        label={data['label']}
                        type={type}
                        required={data['validate']['required']}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                case "paymentmethod":
                    return <PaymentMethod
                        key={index}
                        label={data['label']}
                        type={type}
                        required={data['validate']['required']}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
                default:
                    return <Unimplemented 
                        key={index}    
                        label={data['label']}
                        type={type}
                        path={currentPath}
                        disabled={disabled}
                        hidden={hidden} />
            }
        }

        const getType = (value: string) => {
            if (["text", "email", "address"].includes(value)) {
                return "textfield";
            }
            if (["datetime"].includes(value)) {
                return "date";
            }
            return value;
        }

        getFormData();
    }, [filePath, formData]);

    return displayHTML;
}