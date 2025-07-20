import { FaImage } from "react-icons/fa6";

const componentMetaData = {
    columns: {
        className: "bg-zinc-200",
        showLabel: false,
    },
    content: {
        className: "bg-yellow-100 text-yellow-800 border border-yellow-300",
        showLabel: true,
    },
    date: {
        className: "bg-indigo-100 text-indigo-800 border border-indigo-400",
        showLabel: true,
    },
    locationlogo: {
        className: "bg-blue-100 text-blue-800 h-48 border border-blue-300",
        showLabel: false,
        icon: <FaImage className="opacity-50" size={96} />
    },
    panel: {
        className: "bg-white border-zinc-300 border shadow text-zinc-700",
        showLabel: true,
        showSettingsButton: false,
    },
    paymentmethod: {
        className: "bg-amber-100 text-amber-800 border border-amber-300",
        showLabel: true,
    },
    radio: {
        className: "bg-green-100 text-green-800 border border-green-300",
        showLabel: true,
    },
    signature: {
        className: "bg-orange-100 text-orange-800 h-48 border border-orange-300",
        showLabel: true,
    },
    textarea: {
        className: "bg-lime-100 text-lime-800 h-24 border border-lime-300",
        showLabel: true,
    },
    textfield: {
        className: "bg-green-100 text-green-800 border border-green-300",
        showLabel: true,
    },
    unimplemented: {
        className: "bg-zinc-100 text-zinc-800 border border-zinc-300",
        showLabel: true,
        unimplemented: true,
    },
}

const getGeneralType = (value: string) => {
    if (["text", "email", "address"].includes(value)) {
        return "textfield";
    }
    if (["datetime"].includes(value)) {
        return "date";
    }
    return value;
}

export { componentMetaData, getGeneralType };