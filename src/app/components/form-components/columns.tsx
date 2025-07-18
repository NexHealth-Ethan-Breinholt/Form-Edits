import LabelContainer from "./label-container";

interface Columns {
    columnSizes: number[],
    columnsContent: React.ReactNode[],
}

export default function Columns({ columnSizes, columnsContent }: Columns) {
    return (
        <LabelContainer label="" showLabel={false} sublabel="Columns" required={false} className={"bg-zinc-200"} columnSizes={columnSizes} columnContent={columnsContent} />
    );
}