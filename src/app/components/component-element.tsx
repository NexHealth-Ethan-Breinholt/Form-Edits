import React from "react";

import { FaGear, FaBan, FaEyeSlash } from "react-icons/fa6";
import { useFormContext } from "./form-context";
import { ComponentElementProps } from "@/app/lib/components/component-props";
import { componentMetaData, getGeneralType } from "@/app/lib/components/component-data";

const contextMenuHorizontalOffset = 4;
const contextMenuVerticalOffset = -10;

export default function ComponentElement({ data, path, columnSizes, columnsContent, children }: ComponentElementProps) {
    if (!data) {
        console.warn("Data was not included in LabelContainer props!");
        return <></>;
    }
    
    const remainingColumnSize = columnSizes != null ? 12 - columnSizes.reduce((acc, num) => acc + num, 0) : 0;

    const { selectedComponent, setSelectedComponent, setShowContextMenu } = useFormContext();

    const label = "label" in data ? data.label : "";
    const type = "type" in data ? data.type : "unknown";
    const generalType = getGeneralType(type);
    const required = "required" in data.validate ? data.validate.required : false;
    const disabled = "disabled" in data ? data.disabled : false;
    const hidden = "hidden" in data ? data.hidden : false;

    const metaData = generalType in componentMetaData ? componentMetaData[generalType as keyof typeof componentMetaData] : componentMetaData.unimplemented;
    const unimplemented = "unimplemented" in metaData ? metaData.unimplemented as boolean : false;

    const icon = "icon" in metaData ? metaData.icon as React.ReactNode : null;
    const showSettingsButton = "showSettingsButton" in metaData ? metaData.showSettingsButton as boolean : true;
        
    return (
        <div className={`relative p-4 rounded-md ${metaData.className} relative overflow-hidden ${disabled || hidden ? "saturate-0" : ""}`}>
            {showSettingsButton && <button onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSelectedComponent({
                    type: type,
                    path: path,
                    gearPosition: {
                        "left": rect.right + window.scrollX + contextMenuHorizontalOffset,
                        "top": rect.top + window.scrollY + contextMenuVerticalOffset,
                    }
                });
                setShowContextMenu(true);
            }} className={`absolute top-2 right-2 p-1 rounded-md grid place-items-center z-10 ${selectedComponent.path === path ? "" : ""}`}>
                <FaGear size={10} />
            </button>}

            {icon && <div className="grid place-items-center inset-0 absolute">{icon}</div>}
            {metaData.showLabel && <h2 className={`${required ? "required" : ""}`}>{label}</h2>}
            <p className={`text-xs opacity-50 italic flex items-center gap-1`}>{`${type}${unimplemented ? " - unimplemented" : ""}`}{disabled && <FaBan />}{hidden && <FaEyeSlash />}</p>
            {columnSizes && <div className="grid grid-cols-12 gap-4 mt-4">
                {columnSizes.map((size, index) => {
                    return (
                        <div key={index} style={{
                            gridColumn: `span ${size}`
                        }}>
                            <div className="flex flex-col gap-4">
                                {columnsContent != null && columnsContent[index] != null && columnsContent[index]}
                                {columnsContent != null && columnsContent[index] == null && <div className={"bg-zinc-500 text-zinc-700 text-xs italic rounded-md p-4"}>No Content Provided</div>}
                            </div>
                        </div>
                    )
                })}
                {remainingColumnSize > 0 && <div style={{gridColumn: `span ${remainingColumnSize}`}}><div className={"bg-zinc-500 text-zinc-700 text-xs italic rounded-md p-4"}>Empty</div></div>}
            </div>}
            {children && <div className="flex flex-col gap-4 mt-4">{children}</div>}
        </div>
    );
}