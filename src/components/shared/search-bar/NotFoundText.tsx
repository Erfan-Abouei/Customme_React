import type { NotFoundTextProp } from "@/types/components-props.types"

const NotFoundText = ({ message }: NotFoundTextProp) => {
    return (
        <p className="text-custom font-dana-semi-bold h-5 flex items-center px-2 text-primary bg-primary/10 rounded-md">{message}</p>
    )
}

export default NotFoundText