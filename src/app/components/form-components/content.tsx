import LabelContainer from "./label-container";

interface ContentProps {
    path: string,
    label: string,
}

export default function Content({ path, label }: ContentProps) {
    return (
        <LabelContainer componentType="columns" label={label} showLabel={true} sublabel="Content" path={path} className={"bg-yellow-100 text-yellow-800 border border-yellow-300"} />
    );
}