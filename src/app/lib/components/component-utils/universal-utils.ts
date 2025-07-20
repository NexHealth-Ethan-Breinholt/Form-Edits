import { parseJsonPath } from "../../json-utils";

function deleteComponent(data: any, path: string) {
    const clonedData = structuredClone(data);

    const pathData = parseJsonPath(clonedData, path);
    if (pathData === null) {
        console.error("pathData returned null! Unable to continue.");
        return null;
    }

    delete pathData.parent[pathData.lastKey];

    return clonedData;
}

export { deleteComponent };