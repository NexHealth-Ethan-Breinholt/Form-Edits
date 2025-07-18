import LabelContainer from "./label-container";

interface UnimplementedProps {
    type: string,
}

export default function Unimplemented({ type }: UnimplementedProps) {
    return (
        <LabelContainer label="Unimplemented Component" showLabel={true} sublabel={type} required={false} className={"bg-zinc-100 text-zinc-800"} showSettingsButton={false} />
    );
}