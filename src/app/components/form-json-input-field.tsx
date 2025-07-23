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
        <div className="mt-8">
            <label htmlFor="formDataInput" className="text-zinc-500 text-xs">Form Page JSON Input</label>
            <textarea id="formDataInput" value={getValue()} onChange={e => parseAndSendInput(e.target.value)} placeholder="Enter form page JSON here..." className="w-full shadow-inner rounded-md p-2 px-3 h-32 outline-none border border-zinc-400 resize-none text-black placeholder:italic placeholder:text-zinc-400 focus-within:border-zinc-800 focus-within:ring-4 ring-sync-500" />
        </div>
    );
}