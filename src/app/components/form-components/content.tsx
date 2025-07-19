import LabelContainer from "./label-container";

interface ContentProps {
    path: string,
    label: string,
    type: string,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Content({ path, label, type, disabled, hidden }: ContentProps) {
    return (
        <LabelContainer
            componentType="columns"
            label={label}
            showLabel={true}
            sublabel={type}
            path={path}
            className={"bg-yellow-100 text-yellow-800 border border-yellow-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}