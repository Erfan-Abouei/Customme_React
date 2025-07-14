import type { InputErrorProp } from "@/types/components-props.types"

const InputError = ({ errorMessage }: InputErrorProp) => {
    return (
        <div className="text-custom text-error font-iran-regular">{errorMessage}</div>
    )
}

export default InputError