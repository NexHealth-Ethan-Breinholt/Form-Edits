import LabelContainer from "./label-container";

interface TextareaProps {
    path: string,
    label: string,
    type: string,
    required: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Textarea({ path, label, type, required, disabled, hidden }: TextareaProps) {
    return (
        <LabelContainer
            componentType="textarea"
            label={label}
            showLabel={true}
            sublabel={type}
            path={path}
            required={required}
            className={"bg-lime-100 text-lime-800 h-24 border border-lime-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}