import LabelContainer from "./label-container";

interface Columns {
    path: string,
    columnSizes: number[],
    columnsContent: React.ReactNode[],
}

export default function Columns({ path, columnSizes, columnsContent }: Columns) {
    return (
        <LabelContainer componentType="columns" label="" showLabel={false} sublabel="Columns" path={path} required={false} className={"bg-zinc-200"} columnSizes={columnSizes} columnContent={columnsContent} />
    );
}