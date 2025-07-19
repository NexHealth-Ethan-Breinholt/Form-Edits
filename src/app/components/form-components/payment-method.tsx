import LabelContainer from "./label-container";

interface PaymentMethodProps {
    path: string,
    label: string,
    type: string,
    required: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export default function PaymentMethod({ path, label, type, required, disabled, hidden }: PaymentMethodProps) {
    return (
        <LabelContainer
            componentType="paymentmethod"
            label={label}
            showLabel={true}
            sublabel={type}
            path={path}
            required={required}
            className={"bg-amber-100 text-amber-800 border border-amber-300"}
            disabled={disabled}
            hidden={hidden} />
    );
}