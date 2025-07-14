import LabelContainer from "./label-container";

interface ContentProps {
    label: string,
}

export default function Content({ label }: ContentProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Content" className={"bg-yellow-100 text-yellow-800"} />
    );
}