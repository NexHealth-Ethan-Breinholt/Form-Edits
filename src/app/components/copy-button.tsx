"use client";

import { useState } from "react";
import { buttonType } from "../lib/components/button-styling";
import SmallButton from "./small-button";
import { useFormContext } from "./form-context";

export default function CopyButton() {
    const [displayCopied, setDisplayCopied] = useState(false);

    const { formData } = useFormContext();

    const copyFormData = () => {
        navigator.clipboard.writeText(JSON.stringify(formData, null, 2));

        setDisplayCopied(true);

        setTimeout(() => setDisplayCopied(false), 2000);
    }

    return (
        <>
            <SmallButton type={buttonType.secondary} label={displayCopied ? "Copied!" : "Copy"} onClickAction={copyFormData} disabled={displayCopied} />
        </>
    );
}