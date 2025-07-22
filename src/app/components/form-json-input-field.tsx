"use client";

import { useFormContext } from "./form-context";

export default function FormJsonInputField() {
    const { formData, setFormData } = useFormContext();

    return (
        <textarea value={JSON.stringify(formData, null, 2)} placeholder="Enter form page JSON here..." className="w-full shadow-inner rounded-md mt-8 p-2 px-3 h-32 outline-none border border-zinc-400 resize-none text-black placeholder:italic placeholder:text-zinc-400 focus-within:border-zinc-800 focus-within:ring-4 ring-sync-200" />
    );
}