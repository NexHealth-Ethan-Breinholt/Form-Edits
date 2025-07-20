interface LabelContainerProps {
    componentType: string,
    label: string,
    showLabel: boolean,
    sublabel: string,
    path: string,
    required?: boolean,
    className?: string,
    icon?: React.ReactNode,
    columnSizes?: number[],
    columnContent?: React.ReactNode[],
    showSettingsButton?: boolean,
    disabled?: boolean,
    hidden?: boolean,
}

export type { LabelContainerProps }