import LabelContainer from "./label-container";

interface TextfieldProps {
    label: string,
    required: boolean,
}

export default function Textfield({ label, required }: TextfieldProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Textfield" required={required} className={"bg-green-100 text-green-800 border border-green-300"} />
    );
}