import { HiOutlineHeart } from "react-icons/hi2"
import ImageWithPlaceholder from "../../ImageWithPlaceholder"
import type { CommentBoxProp } from "@/types/components-props.types"
import clsx from "clsx"

const CommentBox = ({ commentData, customClass = '' }: CommentBoxProp) => {
    return (
        <div className={clsx("flex flex-col gap-y-1.5", customClass)}>
            {/* Comment Author Information */}
            <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-end gap-x-2">
                    {/* Author Image */}
                    <div className="size-5 rounded-full overflow-hidden">
                        <ImageWithPlaceholder resultImageURL={commentData.author.photo} />
                    </div>
                    <div className="flex items-center gap-x-1.5">
                        {/* Author Name */}
                        <span className="text-custom font-dana-semi-bold">{commentData.author.username}</span>
                        {/* Circle */}
                        <span className="block size-1.5 bg-gray-300 rounded-full"></span>
                        {/* Create At */}
                        <span className="text-custom font-dana-medium">{commentData.created_at}</span>
                    </div>
                </div>
                {/* Like Count */}
                <div className="flex items-center gap-x-0.5">
                    <span className="text-custom font-dana-semi-bold">{commentData.likes_count ? commentData.likes_count : ''}</span>
                    <HiOutlineHeart className="size-4" />
                </div>
            </div>
            {/* Comment */}
            <p className="font-dana text-justify text-custom pr-6.5 text-gray-800">{commentData.comment}</p>
        </div>
    )
}

export default CommentBox