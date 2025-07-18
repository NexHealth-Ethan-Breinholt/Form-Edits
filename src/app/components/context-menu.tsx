"use client";

import { useEffect, useRef } from "react";
import getContextMenuOptions from "../lib/context-menu-options";
import { useFormContext } from "./form-context"

export default function ContextMenu() {
    const { formData, selectedComponent, setSelectedComponent, showContextMenu, setShowContextMenu } = useFormContext();
    
    const menuOptions = getContextMenuOptions(selectedComponent.type, formData, selectedComponent.path);
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
                setShowContextMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideOfMenu);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideOfMenu);
        }
    });

    if (!showContextMenu || !menuOptions) {
        return null;
    }

    return (
        <div className="relative">
            <div ref={menuRef} style={{
                left: selectedComponent.gearPosition.left,
                top: selectedComponent.gearPosition.top,
            }} className="bg-white border border-zinc-300 w-fit py-2 rounded-md absolute shadow z-50">
                <ul>
                    {
                        Object.entries(menuOptions).map(([key, value], index) => {
                            console.log(typeof(value));

                            if (typeof value === 'object') {
                                // TODO: Check if there are sub-options.
                            }

                            return <li key={index} className="relative group text-sm text-zinc-700 px-2 py-[2px] hover:bg-zinc-100 cursor-pointer">
                                {key}
                                <ul className="hidden group-hover:block absolute bg-white border border-zinc-300 min-w-8 rounded-md left-[100%] -top-2 py-2 shadow">
                                    <li className="px-2 hover:bg-zinc-100 cursor-pointer">1</li>
                                    <li className="px-2 hover:bg-zinc-100 cursor-pointer">2</li>
                                    <li className="px-2 hover:bg-zinc-100 cursor-pointer">3</li>
                                    <li className="px-2 hover:bg-zinc-100 cursor-pointer">4</li>
                                    <li className="px-2 hover:bg-zinc-100 cursor-pointer">6</li>
                                </ul>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}