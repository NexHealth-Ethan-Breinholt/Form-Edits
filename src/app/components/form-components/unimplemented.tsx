import LabelContainer from "./label-container";

interface UnimplementedProps {
    path: string,
    type: string,
}

export default function Unimplemented({ path, type }: UnimplementedProps) {
    return (
        <LabelContainer componentType="unimplemented" label="Unimplemented Component" showLabel={true} sublabel={type} path={path} required={false} className={"bg-zinc-100 text-zinc-800 border border-zinc-300"} showSettingsButton={false} />
    );
}