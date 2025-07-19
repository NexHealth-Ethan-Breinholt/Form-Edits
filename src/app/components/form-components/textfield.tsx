import LabelContainer from "./label-container";

interface TextfieldProps {
    path: string,
    label: string,
    type: string,
    required: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Textfield({ path, label, type, required, disabled, hidden }: TextfieldProps) {
    return (
        <LabelContainer
            componentType="textfield"
            label={label}
            showLabel={true}
            sublabel={type}
            path={path}
            required={required}
            className={"bg-green-100 text-green-800 border border-green-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}