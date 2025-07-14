"use client";

import { createContext, useContext, useState } from "react";

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

export const useFormContext = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("useFormContext does not exist! Was it used outside of the FormContext?");
    }
    return context;
}