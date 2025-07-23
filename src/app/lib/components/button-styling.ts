enum buttonType {
    primary,
    secondary,
}

const primaryButtonStyle = "bg-sync-500 border border-sync-500 hover:bg-sync-200 hover:border-sync-200";
const secondaryButtonStyle = "bg-white border border-zinc-300 hover:border-sync-500";

const getButtonTypeStyle = (type: buttonType) => {
    switch (type) {
        case buttonType.primary:
            return primaryButtonStyle;
        default:
            return secondaryButtonStyle;
        
    }
}

export { buttonType, getButtonTypeStyle }