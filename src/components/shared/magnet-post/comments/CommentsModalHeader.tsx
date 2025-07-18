import { useMagnetSectionContext } from "@/hooks/contexts-hooks/useMagnetSectionContext";
import { HiMiniXMark } from "react-icons/hi2";

const CommentsModalHeader = () => {
    const { setIsOpenCommentsSection } = useMagnetSectionContext();

    return (
        <div className="flex items-center justify-between py-3.5 px-6 border-b border-b-gray-200 text-gray-900">
            <span className="text-sm font-dana-semi-bold">دیدگاه ها</span>
            <span
                className="size-5 cursor-pointer"
                onClick={() => setIsOpenCommentsSection(false)}
            >
                <HiMiniXMark className="size-full" />
            </span>
        </div>
    )
}

export default CommentsModalHeader