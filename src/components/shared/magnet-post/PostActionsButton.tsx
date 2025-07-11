import type { PostActionsButtonProps } from "@/types/components-props.types"

const PostActionsButton = ({ children, onClick }: PostActionsButtonProps) => {
    return (
        <div onClick={onClick} className="flex flex-col items-center gap-y-1 text-white transition-colors hover:text-primary">
            {children}
        </div>
    )

}

export default PostActionsButton