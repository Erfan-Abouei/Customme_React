import type { RootState } from "@/store"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"

const PostInformationSection = () => {
    const [isShowMore, setIsShowMore] = useState(false)
    const captionElement = useRef<HTMLParagraphElement>(null)
    const { selectedMagnet } = useSelector((state: RootState) => state.magnetPosts)

    const handleShowMoreCaption = () => {
        if (captionElement.current) {
            if (!isShowMore) {
                captionElement.current.style.height = String(captionElement.current.scrollHeight) + 'px'
                setIsShowMore(true)
            }
            else {
                captionElement.current.style.height = '16' + 'px'
                setIsShowMore(false)
            }
        }
    }
    return (
        <div className="flex flex-col items-start gap-y-1">
            <span className="text-white text-xs line-clamp-1 font-iran-bold">{selectedMagnet?.title}</span>
            <div className="flex items-center gap-x-0.5">
                {selectedMagnet?.caption &&
                    <>
                        <p ref={captionElement} className="transition-all text-justify text-gray-600 font-iran-light text-custom h-4 overflow-hidden">{selectedMagnet.caption}</p>
                        {!isShowMore && <span onClick={handleShowMoreCaption} className="font-iran-bold h-4 text-custom text-primary cursor-pointer"><span className="text-gray-600 pl-0.5">...</span>بیشتر</span>}
                    </>
                }
            </div>
        </div>
    )
}

export default PostInformationSection