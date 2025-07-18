import LabelContainer from "./label-container";

interface PaymentMethodProps {
    label: string,
    required: boolean,
}

export default function PaymentMethod({ label, required }: PaymentMethodProps) {
    return (
        <LabelContainer label={label} showLabel={true} sublabel="Payment Method" required={required} className={"bg-amber-100 text-amber-800 border border-amber-300"} />
    );
}