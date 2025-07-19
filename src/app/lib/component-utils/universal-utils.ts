import { parseJsonPath } from "../json-utils";

function deleteComponent(data: any, path: string) {
    const clonedData = structuredClone(data);

    const pathData = parseJsonPath(clonedData, path);
    if (pathData === null) {
        console.error("pathData returned null! Unable to continue.");
        return null;
    }

    console.log("-----");
    console.log(path);
    console.log(pathData);
    console.log(pathData.parent[pathData.lastKey]);

    delete pathData.parent[pathData.lastKey];
    console.log(clonedData);

    return clonedData;
}

export { deleteComponent };