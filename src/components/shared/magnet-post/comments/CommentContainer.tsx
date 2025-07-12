import type { Comment } from "@/services/dto/magnet-post/magnet-post-comments.dto"
import CommentBox from "./CommentBox"

const CommentContainer = ({ commentData }: { commentData: Comment }) => {
    const commentReply = commentData.top_replies
    return (
        <div className="flex flex-col gap-y-4">
            <CommentBox commentData={commentData} />
            {commentReply.length > 0 && (<div className="flex flex-col gap-y-1">
                {commentReply.map(comment => <CommentBox commentData={comment} key={comment.id} customClass="mr-6.5 pr-4 border-r-2 border-r-gray-300" />)}
            </div>)}
        </div>
    )
}

export default CommentContainer