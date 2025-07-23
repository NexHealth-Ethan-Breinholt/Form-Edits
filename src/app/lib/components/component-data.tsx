import { FaImage } from "react-icons/fa6";

enum componentType {
    static,
    background,
    input,
    page,
    unimplemented,
}

const componentMetaData = {
    columns: {
        showLabel: false,
        metaType: componentType.background,
    },
    content: {
        showLabel: true,
        metaType: componentType.static,
        labelKey: "html",
    },
    date: {
        showLabel: true,
        metaType: componentType.input,
    },
    htmlelement: {
        showLabel: true,
        metaType: componentType.static,
        labelKey: "content",
    },
    locationlogo: {
        className: "h-48",
        showLabel: false,
        icon: <FaImage className="opacity-50" size={96} />,
        metaType: componentType.static,
    },
    panel: {
        showLabel: true,
        showSettingsButton: false,
        metaType: componentType.page,
    },
    paymentmethod: {
        showLabel: true,
        metaType: componentType.input,
    },
    radio: {
        showLabel: true,
        metaType: componentType.input,
    },
    signature: {
        className: "h-48",
        showLabel: true,
        metaType: componentType.input,
    },
    textarea: {
        className: "h-24",
        showLabel: true,
        metaType: componentType.input,
    },
    textfield: {
        showLabel: true,
        metaType: componentType.input,
    },
    unimplemented: {
        showLabel: true,
        metaType: componentType.unimplemented,
    },
}

const getGeneralType = (value: string) => {
    if (["text", "email", "address", "phoneNumber"].includes(value)) {
        return "textfield";
    }
    if (["datetime", "day"].includes(value)) {
        return "date";
    }
    return value;
}

const getComponentTypeStyle = (type: componentType) => {
    switch (type) {
        case componentType.background:
            return "bg-zinc-200";
        case componentType.input:
            return "bg-sync-100 border border-sync-500";
        case componentType.page:
            return "bg-white border border-zinc-300 shadow";
        case componentType.static:
            return "bg-white border border-zinc-300";
        case componentType.unimplemented:
            return "bg-zinc-100 border border-zinc-300";
        default:
            return "";
    }
}

export { componentType, getComponentTypeStyle, componentMetaData, getGeneralType };