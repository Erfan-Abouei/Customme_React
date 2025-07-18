import type { SpinnerProps } from "@/types/components-props.types"
import clsx from "clsx"

const Spinner = ({ customClass }: SpinnerProps) => {
    return (
        <div className={clsx("flex", customClass)}>
            <div className="rounded-full animate-bounce"></div>
            <div
                className="rounded-full animate-bounce [animation-delay:-.3s]"
            ></div>
            <div
                className="rounded-full animate-bounce [animation-delay:-.5s]"
            ></div>
        </div>
    )
}

export default Spinner