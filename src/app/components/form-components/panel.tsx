import LabelContainer from "./label-container";

interface PanelProps {
    label: string,
    children: React.ReactNode,
}

export default function Panel({ label, children }: PanelProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Panel" required={false} className={"bg-zinc-800 text-zinc-100"} columnSizes={[12]} columnContent={[children]} />
    );
}