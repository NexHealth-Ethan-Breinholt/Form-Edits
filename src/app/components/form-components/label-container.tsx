interface LabelContainerProps {
    label: string,
    sublabel: string,
    required: boolean,
    className?: string,
}

export default function LabelContainer({ label, sublabel, required, className }: LabelContainerProps) {
    return (
        <div className={`p-4 rounded-md shadow-xs ${className}`}>
            <h2 className={required ? "required" : ""}>{label}</h2>
            <p className="text-xs opacity-50 italic">{sublabel}</p>
        </div>
    );
}