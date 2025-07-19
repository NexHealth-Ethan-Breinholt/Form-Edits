import LabelContainer from "./label-container";
import { FaImage } from "react-icons/fa6";

interface LocationLogoProps {
    path: string,
    type: string,
    disabled?: boolean,
    hidden?: boolean,
}

export default function LocationLogo({ path, type, disabled, hidden }: LocationLogoProps) {
    return (
        <LabelContainer
            componentType="locationlogo"
            label=""
            showLabel={false}
            sublabel={type}
            path={path}
            className={"bg-blue-100 text-blue-800 h-48 border border-blue-300"}
            icon={<FaImage className="opacity-50" size={96} />}
            disabled={disabled}
            hidden={hidden} />
    );
}