import LabelContainer from "./label-container";

interface UnimplementedProps {
    label: string,
    path: string,
    type: string,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Unimplemented({ label, path, type, disabled, hidden }: UnimplementedProps) {
    return (
        <LabelContainer
            componentType="unimplemented"
            label={label}
            showLabel={true}
            sublabel={`unimplemented - ${type}`}
            path={path}
            required={false}
            className={"bg-zinc-100 text-zinc-800 border border-zinc-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}