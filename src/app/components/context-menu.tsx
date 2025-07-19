"use client";

import { useEffect, useRef } from "react";
import getContextMenuOptions from "../lib/context-menu-options";
import { useFormContext } from "./form-context"
import { IoChevronForward } from "react-icons/io5";

export default function ContextMenu() {
    const { formData, setFormData, selectedComponent, setSelectedComponent, showContextMenu, setShowContextMenu } = useFormContext();

    const hideContextMenu = () => {
        setShowContextMenu(false);
    }

    const menuOptions = getContextMenuOptions(selectedComponent.type, formData, selectedComponent.path, setFormData, hideContextMenu);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideOfMenu = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setSelectedComponent({
                    type: "",
                    path: "",
                    gearPosition: {
                        left: 0,
                        top: 0,
                    }
                })
                hideContextMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutsideOfMenu);
        window.addEventListener("resize", hideContextMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideOfMenu);
            window.removeEventListener("resize", hideContextMenu);
        }
    });

    if (!showContextMenu || !menuOptions) {
        return null;
    }

    return (
        <div className="relative text-zinc-700">
            <div ref={menuRef} style={{
                left: selectedComponent.gearPosition.left,
                top: selectedComponent.gearPosition.top,
            }} className="bg-white border border-zinc-300 w-fit py-2 rounded-md absolute shadow z-50">
                <ul>
                    {
                        Object.entries(menuOptions).map(([key, value], index) => {
                            const onClickAction = typeof value === "object" && "action" in value ? value["action"] : typeof value === "function" ? value : null;

                            const additionalStyling = typeof value === "object" && "style" in value ? value["style"] : "";

                            const containsSubOptions = typeof value === "object" && "sub-options" in value;

                            return <li key={index} className={`relative group flex items-center gap-2 text-sm px-3 py-[2px] hover:bg-zinc-100 cursor-pointer ${additionalStyling}`} onClick={onClickAction === null ? () => {} : onClickAction}>
                                {typeof value === "object" && "icon" in value && value["icon"]}
                                {key}
                                {containsSubOptions && <IoChevronForward />}
                                {containsSubOptions && <ul className="hidden group-hover:block absolute bg-white border border-zinc-300 min-w-8 rounded-md left-[100%] -top-[9px] py-2 shadow">
                                    {
                                        Object.entries(value['sub-options']).map(([key, value], index) => {
                                            if (typeof value === "function") {
                                                return <li key={index} className="px-2 hover:bg-zinc-100 cursor-pointer py-[2px] whitespace-nowrap" onClick={() => value()}>{key}</li>;
                                            }
                                            return null;
                                        })
                                    }
                                </ul>}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}