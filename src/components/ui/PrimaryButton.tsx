import type { PrimaryButtonProps } from "@/types/components-props.types"
import clsx from "clsx"

const PrimaryButton = ({ onClick, customClass, children }: PrimaryButtonProps) => {
    return (
        <button onClick={onClick} className={clsx("flex items-center justify-center transition-all", customClass)}>
            {children}
        </button>
    )
}

export default PrimaryButton