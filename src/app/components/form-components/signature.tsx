import LabelContainer from "./label-container";

interface SignatureProps {
    label: string,
    required: boolean,
}

export default function Signature({ label, required }: SignatureProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Signature" required={required} className={"bg-orange-100 text-orange-800 h-48 border border-orange-300"} />
    );
}