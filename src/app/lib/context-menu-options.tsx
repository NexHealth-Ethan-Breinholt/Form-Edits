import { capitalizationPattern, capitalizeContainedLabels, deleteHidden, evenlyDisperseWithinColumns } from "./component-utils/column-utils"

import { FaTableColumns, FaTrash, FaEyeSlash } from "react-icons/fa6";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { deleteComponent } from "./component-utils/universal-utils";

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
                    "icon": <RxLetterCaseCapitalize className="text-zinc-600" />,
                    "sub-options": {
                        "All Lowercase": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.allLowercase)),
                        "All Uppercase": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.allUppercase)),
                        "First Word": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.firstWord)),
                        "Every Word": () => runFormChangingAction(capitalizeContainedLabels(data, path, capitalizationPattern.eachWord)),
                    }
                },
                "Delete Hidden": {
                    "icon": <FaEyeSlash />,
                    "action": () => runFormChangingAction(deleteHidden(data, path)),
                },
            }
            break;
    }
    
    return {...specificOptions, ...universalOptions};
}