import { parseJsonPath } from "./json-utils";

const BASE_COLUMN_DATA = {
    "pull": 0,
    "push": 0,
    "width": 0,
    "offset": 0,
    "components": [],
}

function evenlyDisperseWithinColumns(data: any, path: string, numberOfColumns: number) {
    const clonedData = structuredClone(data);

    if (12 % numberOfColumns !== 0) {
        console.error(`Invalid value provided for number of columns! ${numberOfColumns} was provided, but 12 must be evenly divisble by it.`);
        return null;
    }
    const columnWidth = 12 / numberOfColumns;

    const pathData = parseJsonPath(clonedData, path);
    if (pathData === null) {
        console.error("pathData returned null! Unable to continue.");
        return null;
    }

    const containedComponents = [];

    for (const columnID in pathData.parent[pathData.lastKey]["columns"]) {
        for (const componentID in pathData.parent[pathData.lastKey]["columns"][columnID]['components']) {
            containedComponents.push(pathData.parent[pathData.lastKey]["columns"][columnID]['components'][componentID]);
        }
    }

    const componentsPerColumn = Math.ceil(containedComponents.length / numberOfColumns);

    const columnData = [];

    for (let i = 0; i < numberOfColumns; i++) {
        const rangeStart = i * componentsPerColumn;
        const rangeEnd = Math.min(rangeStart + componentsPerColumn, containedComponents.length);

        const columnComponents = containedComponents.slice(rangeStart, rangeEnd);

        columnData.push({
            ...BASE_COLUMN_DATA,
            width: columnWidth,
            components: columnComponents,
         });
    }

    pathData.parent[pathData.lastKey]["columns"] = columnData;

    return clonedData;
}

export { evenlyDisperseWithinColumns }