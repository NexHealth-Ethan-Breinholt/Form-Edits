import LabelContainer from "./label-container";

interface PanelProps {
    path: string,
    label: string,
    children: React.ReactNode,
}

export default function Panel({ path, label, children }: PanelProps) {
    return (
        <LabelContainer componentType="panel" label={label} showLabel={true} sublabel="Panel" path={path} showSettingsButton={false} required={false} className={"bg-white border-zinc-300 border shadow text-zinc-700"} columnSizes={[12]} columnContent={[children]} />
    );
}