import ImageWithPlaceholder from "../ImageWithPlaceholder"
import { HiMiniXMark } from "react-icons/hi2"
import { useMagnetSectionContext } from "@/hooks/contexts-hooks/useMagnetSectionContext"
import { useModalContext } from "@/hooks/contexts-hooks/useModalContext"

const PostAuthorInfoSection = () => {
    const { closeModal } = useModalContext()
    const { selectedMagnet } = useMagnetSectionContext()

    return (
        <div className="flex items-start gap-x-1" >
            <span onClick={closeModal} className="relative z-40 md:hidden shrink-0 cursor-pointer size-6 text-gray-500">
                <HiMiniXMark className="size-full" />
            </span>
            {/* Author*/}
            <div className="flex items-center gap-x-2">
                {/* Author Profile */}
                <div className="size-10 rounded-full">
                    <ImageWithPlaceholder resultImageURL={selectedMagnet?.author.photo as string} />
                </div>
                <span className="line-clamp-1 text-white text-sm font-dana-semi-bold">{selectedMagnet?.author.name}</span>
            </div>
        </div >
    )
}

export default PostAuthorInfoSection