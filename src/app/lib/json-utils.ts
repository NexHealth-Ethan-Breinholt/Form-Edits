function parseJsonPath(data: any, path: string) {
    const splitPath = path.split(".");
    const lastKey = splitPath.pop();

    const parent = splitPath.reduce((o, k) => {
        return o && o[k];
    }, data);

    if (lastKey !== undefined) {
        return {
            parent,
            lastKey
        };
    }
    else {
        console.error("Failed to parse JSON path!");
        return null;
    }
}

export { parseJsonPath }