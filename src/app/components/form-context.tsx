"use client";

import { createContext, useState } from "react";

interface FormContextType {
    formData: any,
    setFormData: (newData: any) => void,
}

interface FormContextProps {
    children: React.ReactNode,
}

const FormDataContext = createContext<FormContextType | null>(null);

export default function FormContext({ children }:FormContextProps) {
    const [formData, setFormData] = useState({});

    return (
        <FormDataContext value={{ formData, setFormData }}>
            {children}
        </FormDataContext>
    )
}