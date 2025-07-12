import { HiMiniXMark } from "react-icons/hi2"
import CommentLoader from "./CommentLoader"
import CommentContainer from "./CommentContainer"

const MovieCommentsModal = () => {
    return (
        <div className="z-20 absolute bottom-0 left-0 right-0 w-full h-1/2 bg-white rounded-t-2xl translate-y-0 transition-all">
            {/* Comments Header */}
            <div className="flex items-center justify-between py-3.5 px-6 border-b border-b-gray-200 text-gray-900">
                <span className="text-sm font-iran-bold">دیدگاه ها</span>
                <HiMiniXMark className="size-5" />
            </div>
            {/* Comment Content */}
            <div className="border-8 border-transparent page__scroll--custom overflow-auto flex flex-col gap-y-4 px-2 h-[calc(100%-48.8px)]">
                <CommentContainer />
                <CommentContainer />
                <CommentContainer />
                <CommentLoader />
                <CommentLoader />
            </div>
        </div>
    )
}

export default MovieCommentsModal