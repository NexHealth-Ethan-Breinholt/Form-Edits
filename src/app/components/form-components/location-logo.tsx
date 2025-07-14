import LabelContainer from "./label-container";
import { FaImage } from "react-icons/fa6";

export default function LocationLogo() {
    return (
        <LabelContainer label="" showLabel={false} sublabel="Location Logo" className={"bg-blue-100 text-blue-800 h-48"} icon={<FaImage className="opacity-50" size={96} />} />
    );
}