import { FaBan, FaEyeSlash } from "react-icons/fa6";

export default function Legend() {
    return (
        <div className="absolute bottom-4 right-4 p-4 border border-zinc-300 rounded-md">
            <p className="font-bold text-center mb-2">Legend</p>
            <div className="flex gap-8">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="bg-white border border-zinc-300 w-4 h-4 rounded-sm" />
                        Static
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-sync-100 border border-sync-500 w-4 h-4 rounded-sm" />
                        Interactable
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-zinc-100 border border-zinc-300 w-4 h-4 rounded-sm" />
                        Unimplemented
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-zinc-200 w-4 h-4 rounded-sm" />
                        Background
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <FaEyeSlash className="text-zinc-600" />
                        Hidden
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBan className="text-zinc-600" />
                        Disabled
                    </div>
                </div>
            </div>
        </div>
    );
}