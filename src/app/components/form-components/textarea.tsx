import LabelContainer from "./label-container";

interface TextareaProps {
    path: string,
    label: string,
    required: boolean,
}

export default function Textarea({ path, label, required }: TextareaProps) {
    return (
        <LabelContainer componentType="textarea" label={label} showLabel={true} sublabel="Textarea" path={path} required={required} className={"bg-lime-100 text-lime-800 h-24 border border-lime-300"} />
    );
}