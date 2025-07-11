import { HiMiniXMark } from "react-icons/hi2"
import ImageWithPlaceholder from "../ImageWithPlaceholder"

const PostAuthorInfoSection = () => {
    return (
        <div className="flex items-start gap-x-1" >
            <span onClick={() => location.hash = ""} className="md:hidden shrink-0 cursor-pointer size-6 text-gray-500">
                <HiMiniXMark className="size-full" />
            </span>
            {/* Author*/}
            <div className="flex items-center gap-x-2">
                {/* Author Profile */}
                <div className="size-10 rounded-full">
                    <ImageWithPlaceholder resultImageURL="" />
                </div>
                <div className="flex items-start flex-col gap-y-1">
                    <span className="line-clamp-1 text-white text-sm font-iran-bold">عرفان ابویی مهریزی</span>
                    <span className="text-custom text-gray-700 font-iran-medium">28 هزار دنبال کننده</span>
                </div>
            </div>
        </div >
    )
}

export default PostAuthorInfoSection