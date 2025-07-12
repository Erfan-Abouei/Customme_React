import { HiOutlineHeart } from "react-icons/hi2"
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";

import PostActionsButton from "./PostActionsButton"
import { useMagnetPostsContext } from "@/hooks/useMagnetPostsContext";


const PostActionsSection = () => {
    const { setIsOpenCommentsSection } = useMagnetPostsContext()
    return (
        <div className="shrink-0 flex flex-col gap-y-3">
            {/* Like */}
            <PostActionsButton>
                <HiOutlineHeart className="size-6" />
                <span className=" font-iran-medium text-custom">5 هزار</span>
            </PostActionsButton>
            {/* Comments */}
            <PostActionsButton onClick={() => setIsOpenCommentsSection(true)}>
                <HiOutlineChatBubbleLeftEllipsis className="size-6" />
                <span className=" font-iran-medium text-custom">53</span>
            </PostActionsButton>
            {/* View Count */}
            <PostActionsButton>
                <HiOutlineEye className="size-6" />
                <span className=" font-iran-medium text-custom">540</span>
            </PostActionsButton>
        </div>
    )
}

export default PostActionsSection