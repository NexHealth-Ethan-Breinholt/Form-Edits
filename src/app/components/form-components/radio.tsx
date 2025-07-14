import LabelContainer from "./label-container";

interface RadioProps {
    label: string,
    required: boolean,
}

export default function Radio({ label, required }: RadioProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Radio" required={required} className={"bg-green-100 text-green-800"} />
    );
}