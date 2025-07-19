import LabelContainer from "./label-container";

interface SignatureProps {
    path: string,
    label: string,
    required: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export default function Signature({ path, label, required, disabled, hidden }: SignatureProps) {
    return (
        <LabelContainer
            componentType="signature"
            label={label}
            showLabel={true}
            sublabel="Signature"
            path={path}
            required={required}
            className={"bg-orange-100 text-orange-800 h-48 border border-orange-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}