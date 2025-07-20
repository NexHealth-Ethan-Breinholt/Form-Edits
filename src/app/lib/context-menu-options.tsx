import { capitalizationPattern, capitalizeContainedLabels, deleteHidden, evenlyDisperseWithinColumns } from "./components/component-utils/column-utils"

import { FaTableColumns, FaTrash, FaEyeSlash, FaA, FaArrowDownAZ } from "react-icons/fa6";
import { deleteComponent } from "./components/component-utils/universal-utils";

export default function getContextMenuOptions(componentType: string, data: any, path: string, setFormData: (data: any) => void, hideContextMenu: () => void) {
    let specificOptions = null;

    const runFormChangingAction = (action: () => any) => {

        setFormData(action);
        hideContextMenu();
    }

    const universalOptions = {
        "Delete": {
            "icon": <FaTrash />,
            "action": () => runFormChangingAction(deleteComponent(data, path)),
            "style": "text-red-500",
        },
    }

    switch (componentType) {
        case "columns":
            specificOptions = {
                "Split Into Columns": {
                    "icon": <FaTableColumns className="text-zinc-600" />,
                    "sub-options": {
                        "1": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 1)),
                        "2": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 2)),
                        "3": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 3)),
                        "4": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 4)),
                        "6": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 6)),
                        "12": () => runFormChangingAction(evenlyDisperseWithinColumns(data, path, 12)),
                    }
                },
                "Capitalization": {
                    "icon": <FaA className="text-zinc-600" />,
                    "sub-options": {
                        "All Lowercase": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.allLowercase)),
                        "All Uppercase": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.allUppercase)),
                        "First Word": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.firstWord)),
                        "Every Word": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.eachWord)),
                    }
                },
                "Alphabetize": {
                    "icon": <FaArrowDownAZ className="text-zinc-600" />,
                    "sub-options": {
                        "A to Z": () => {},
                        "Z to A": () => {},
                    }
                },
                "Delete Hidden": {
                    "icon": <FaEyeSlash />,
                    "action": () => runFormChangingAction(deleteHidden(data, path)),
                },
            }
            break;
    }
    
    return {specificOptions, universalOptions};
}