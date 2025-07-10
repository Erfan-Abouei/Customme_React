import type { Post } from "@/services/dto/magnet-post.dto"
import ImageWithPlaceholder from "../ImageWithPlaceholder"

const MagnetPostCard = (post: Post) => {
    return (
        <div className="shrink-0 w-22 flex flex-col items-center gap-y-2">
            {/* Image */}
            <div className="size-21 flex items-center justify-center rounded-full magnet-highlight__image-box">
                <div className="size-[calc(100%-4px)] flex items-center justify-center bg-white rounded-full">
                    <div className="size-[calc(100%-6px)]">
                        <ImageWithPlaceholder resultImageURL={post.circle_cover!} />
                    </div>
                </div>
            </div>
            {/* Magnet Title */}
            <p className="leading-4 h-8 line-clamp-2 text-xs max-md:text-custom text-gray-950 text-center font-iran-medium max-md:font-iran-regular">{post.title}</p>
        </div>
    )
}

export default MagnetPostCard