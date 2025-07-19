import LabelContainer from "./label-container";

interface DateProps {
    path: string,
    label: string,
    type: string,
    required: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Date({ path, label, type, required, disabled, hidden }: DateProps) {
    return (
        <LabelContainer
            componentType="date"
            label={label}
            showLabel={true}
            sublabel={type}
            path={path}
            required={required}
            className={"bg-indigo-100 text-indigo-800 border border-indigo-400"}
            disabled={disabled}
            hidden={hidden} />
    );
}