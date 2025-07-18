import LabelContainer from "./label-container";

interface DateProps {
    label: string,
    required: boolean,
}

export default function Date({ label, required }: DateProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Date" required={required} className={"bg-indigo-100 text-indigo-800 border border-indigo-400"} />
    );
}