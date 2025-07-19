import LabelContainer from "./label-container";

interface Columns {
    path: string,
    columnSizes: number[],
    columnsContent: React.ReactNode[],
    disabled?: boolean,
    hidden?: boolean,
}

export default function Columns({ path, columnSizes, columnsContent, disabled, hidden }: Columns) {
    return (
        <LabelContainer
            componentType="columns"
            label=""
            showLabel={false}
            sublabel="Columns"
            path={path}
            required={false}
            className={"bg-zinc-200"}
            columnSizes={columnSizes}
            columnContent={columnsContent}
            disabled={disabled}
            hidden={hidden} />
    );
}