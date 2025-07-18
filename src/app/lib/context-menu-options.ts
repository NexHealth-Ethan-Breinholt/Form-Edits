import { evenlyDisperseWithinColumns } from "./column-utils"

export default function getContextMenuOptions(componentType: string, data: any, path: string) {
    let options = null;

    switch (componentType) {
        case "columns":
            options = {
                "Split Into Columns": {
                    "sub-options": {
                        "1": () => evenlyDisperseWithinColumns(data, path, 1),
                        "2": () => evenlyDisperseWithinColumns(data, path, 2),
                        "3": () => evenlyDisperseWithinColumns(data, path, 3),
                        "4": () => evenlyDisperseWithinColumns(data, path, 4),
                        "6": () => evenlyDisperseWithinColumns(data, path, 6),
                    }
                },
                "Test 1": "",
                "Test 2": ""
            }
            break;
        case "radio":
            options = {
                "Test 0": {
                    "sub-options": {
                        "1": () => evenlyDisperseWithinColumns(data, path, 1),
                        "2": () => evenlyDisperseWithinColumns(data, path, 2),
                        "3": () => evenlyDisperseWithinColumns(data, path, 3),
                        "4": () => evenlyDisperseWithinColumns(data, path, 4),
                        "6": () => evenlyDisperseWithinColumns(data, path, 6),
                    }
                },
                "Test 1": "",
                "Test 2": ""
            }
            break;
    }
    
    return options;
}