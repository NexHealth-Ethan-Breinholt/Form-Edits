import React from "react";

import { FaGear, FaBan, FaEyeSlash } from "react-icons/fa6";
import { useFormContext } from "../form-context";
import { LabelContainerProps } from "@/app/lib/component-utils/component-props";

const contextMenuHorizontalOffset = 4;
const contextMenuVerticalOffset = -10;

export default function LabelContainer({ componentType, label, showLabel, sublabel, path, required, className, icon, columnSizes, columnContent, disabled, hidden, showSettingsButton = true }: LabelContainerProps) {
    const remainingColumnSize = columnSizes != null ? 12 - columnSizes.reduce((acc, num) => acc + num, 0) : 0;

    const { selectedComponent, setSelectedComponent, setShowContextMenu } = useFormContext();

    return (
        <div className={`relative p-4 rounded-md ${className} relative overflow-hidden ${disabled || hidden ? "saturate-0" : ""}`}>
            {showSettingsButton && <button onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSelectedComponent({
                    type: componentType,
                    path: path,
                    gearPosition: {
                        "left": rect.right + window.scrollX + contextMenuHorizontalOffset,
                        "top": rect.top + window.scrollY + contextMenuVerticalOffset,
                    }
                });
                setShowContextMenu(true);
            }} className={`absolute top-2 right-2 p-1 text-tealgreen rounded-md grid place-items-center z-10 ${selectedComponent.path === path ? "" : ""}`}>
                <FaGear size={10} />
            </button>}

            {icon && <div className="grid place-items-center inset-0 absolute">{icon}</div>}
            {showLabel && <h2 className={`${required ? "required" : ""}`}>{label}</h2>}
            <p className={`text-xs opacity-50 italic flex items-center gap-1`}>{sublabel}{disabled && <FaBan />}{hidden && <FaEyeSlash />}</p>
            {columnSizes && <div className="grid grid-cols-12 gap-4 mt-4">
                {columnSizes.map((size, index) => {
                    return (
                        <div key={index} style={{
                            gridColumn: `span ${size}`
                        }}>
                            <div className="flex flex-col gap-4">
                                {columnContent != null && columnContent[index] != null && columnContent[index]}
                                {columnContent != null && columnContent[index] == null && <div className={"bg-zinc-500 text-zinc-700 text-xs italic rounded-md p-4"}>No Content Provided</div>}
                            </div>
                        </div>
                    )
                })}
                {remainingColumnSize > 0 && <div style={{gridColumn: `span ${remainingColumnSize}`}}><div className={"bg-zinc-500 text-zinc-700 text-xs italic rounded-md p-4"}>Empty</div></div>}
            </div>}
        </div>
    );
}