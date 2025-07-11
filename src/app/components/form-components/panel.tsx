interface PanelProps {
    name: string,
    children: React.ReactNode,
}

export default function Panel({name, children}: PanelProps) {
    return (
        <div className="text-zinc-100 p-4 rounded-md bg-zinc-800">
            <h2 className="font-bold">{name}</h2>
            <div className="pt-4 gap-2 flex flex-col">
                {children}
            </div>
        </div>
    );
}