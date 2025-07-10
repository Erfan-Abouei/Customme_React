import type { PrimaryButtonProps } from "@/types/components-props.types"

const PrimaryButton = ({ onClick, customClass, children }: PrimaryButtonProps) => {
    return (
        <button onClick={onClick} className={`flex items-center justify-center transition-all ${customClass}`}>
            {children}
        </button>
    )
}

export default PrimaryButton