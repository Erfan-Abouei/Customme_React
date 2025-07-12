import CommentBox from "./CommentBox"

const CommentContainer = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <CommentBox />
            <div className="flex flex-col gap-y-1">
                <CommentBox customClass="mr-6.5 pr-4 border-r-2 border-r-gray-300" />
            </div>
        </div>
    )
}

export default CommentContainer