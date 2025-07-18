import LabelContainer from "./label-container";

interface PaymentMethodProps {
    path: string,
    label: string,
    required: boolean,
}

export default function PaymentMethod({ path, label, required }: PaymentMethodProps) {
    return (
        <LabelContainer componentType="paymentmethod" label={label} showLabel={true} sublabel="Payment Method" path={path} required={required} className={"bg-amber-100 text-amber-800 border border-amber-300"} />
    );
}