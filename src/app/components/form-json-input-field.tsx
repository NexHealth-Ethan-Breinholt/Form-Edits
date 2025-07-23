"use client";

import { useState } from "react";
import { useFormContext } from "./form-context";

export default function FormJsonInputField() {
    const [input, setInput] = useState("");

    const { formData, setFormData } = useFormContext();

    const parseAndSendInput = (input: string) => {
        setInput(input);

        try {
            const parsedInput = JSON.parse(input);
            setFormData(parsedInput);
        }
        catch {
            setFormData(null);
        }
    }

    const getValue = () => {
        if (formData) {
            return JSON.stringify(formData, null, 2);
        }

        return input;
    }

    return (
        <textarea value={getValue()} onChange={e => parseAndSendInput(e.target.value)} placeholder="Enter form page JSON here..." className="w-full shadow-inner rounded-md mt-8 p-2 px-3 h-32 outline-none border border-zinc-400 resize-none text-black placeholder:italic placeholder:text-zinc-400 focus-within:border-zinc-800 focus-within:ring-4 ring-sync-500" />
    );
}