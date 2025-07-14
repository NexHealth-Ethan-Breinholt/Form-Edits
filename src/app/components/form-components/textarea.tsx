import LabelContainer from "./label-container";

interface TextareaProps {
    label: string,
    required: boolean,
}

export default function Textarea({ label, required }: TextareaProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Textarea" required={required} className={"bg-lime-100 text-lime-800 h-24"} />
    );
}