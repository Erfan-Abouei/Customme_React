import { HiMiniXMark } from "react-icons/hi2"
import CommentNotFound from "./CommentNotFound"
import { useMagnetPostsContext } from "@/hooks/useMagnetPostsContext"
import clsx from "clsx"

const MovieCommentsModal = () => {
    const { isOpenCommentsSection, setIsOpenCommentsSection } = useMagnetPostsContext()
    return (
        <div className={clsx(`z-20 absolute bottom-0 left-0 right-0 w-full h-1/2 bg-white rounded-t-2xl transition-all`, {
            'translate-y-full': !isOpenCommentsSection,
            'translate-y-0': isOpenCommentsSection
        })}>
            {/* Comments Header */}
            <div className="flex items-center justify-between py-3.5 px-6 border-b border-b-gray-200 text-gray-900">
                <span className="text-sm font-iran-bold">دیدگاه ها</span>
                <span className="size-5 cursor-pointer" onClick={() => setIsOpenCommentsSection(false)}>
                    <HiMiniXMark className="size-full" />
                </span>
            </div>
            {/* Comment Content */}
            <div className="border-8 border-transparent page__scroll--custom overflow-auto flex flex-col gap-y-4 px-2 h-[calc(100%-48.8px)]">
                <CommentNotFound />
            </div>
        </div>
    )
}

export default MovieCommentsModal