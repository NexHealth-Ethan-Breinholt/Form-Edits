import LabelContainer from "./label-container";

interface DateProps {
    path: string,
    label: string,
    required: boolean,
}

export default function Date({ path, label, required }: DateProps) {
    return (
        <LabelContainer componentType="date" label={label} showLabel={true} sublabel="Date" path={path} required={required} className={"bg-indigo-100 text-indigo-800 border border-indigo-400"} />
    );
}