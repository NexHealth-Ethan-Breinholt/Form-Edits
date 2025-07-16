import React from "react";

import { FaGear } from "react-icons/fa6";

interface LabelContainerProps {
    label: string,
    showLabel: boolean,
    sublabel: string,
    required?: boolean,
    className?: string,
    icon?: React.ReactNode,
    columnSizes?: number[],
    columnContent?: React.ReactNode[],
}

export default function LabelContainer({ label, showLabel, sublabel, required, className, icon, columnSizes, columnContent }: LabelContainerProps) {
    const remainingColumnSize = columnSizes != null ? 12 - columnSizes.reduce((acc, num) => acc + num, 0) : 0;

    return (
        <div className={`relative p-4 rounded-md ${className} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 pl-[1px] pb-[1px] w-4 h-4 outline-2 outline-zinc-700 hover:brightness-125 transition text-zinc-700 cursor-pointer rounded-bl-md grid place-items-center">
                <FaGear size={10} />
            </div>

            {icon && <div className="grid place-items-center inset-0 absolute">{icon}</div>}
            {showLabel && <h2 className={required ? "required" : ""}>{label}</h2>}
            <p className="text-xs opacity-50 italic">{sublabel}</p>
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