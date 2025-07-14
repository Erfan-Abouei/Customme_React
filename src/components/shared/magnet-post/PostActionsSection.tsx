import { HiOutlineHeart } from "react-icons/hi2"
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";

import PostActionsButton from "./PostActionsButton"
import { useMagnetSectionContext } from "@/hooks/contexts-hooks/useMagnetSectionContext";
import { formatNumber } from "@/utils/formatNumber";


const PostActionsSection = () => {
    const { selectedMagnet } = useMagnetSectionContext()
    const { setIsOpenCommentsSection } = useMagnetSectionContext()

    return (
        <div className="shrink-0 flex flex-col gap-y-3">
            {/* Like */}
            <PostActionsButton>
                <HiOutlineHeart className="size-6" />
                <span className=" font-iran-medium text-custom">{formatNumber(selectedMagnet?.likes_count as number)}</span>
            </PostActionsButton>
            {/* Comments */}
            <PostActionsButton onClick={() => setIsOpenCommentsSection(true)}>
                <HiOutlineChatBubbleLeftEllipsis className="size-6" />
                <span className=" font-iran-medium text-custom">{formatNumber(selectedMagnet?.comments_count as number)}</span>
            </PostActionsButton>
            {/* View Count */}
            <PostActionsButton>
                <HiOutlineEye className="size-6" />
                <span className=" font-iran-medium text-custom">{formatNumber(selectedMagnet?.views_count as number)}</span>
            </PostActionsButton>
        </div>
    )
}

export default PostActionsSection