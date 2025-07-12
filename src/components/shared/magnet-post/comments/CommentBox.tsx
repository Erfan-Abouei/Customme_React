import { HiOutlineHeart } from "react-icons/hi2"
import ImageWithPlaceholder from "../../ImageWithPlaceholder"
import type { CommentBoxProp } from "@/types/components-props.types"

const CommentBox = ({ customClass }: CommentBoxProp) => {
    return (
        <div className={`flex flex-col gap-y-1.5 ${customClass}`}>
            {/* Comment Author Information */}
            <div className="flex items-center justify-between text-gray-700">
                <div className="flex items-end gap-x-2">
                    {/* Author Image */}
                    <div className="size-5 rounded-full overflow-hidden">
                        <ImageWithPlaceholder resultImageURL="" />
                    </div>
                    <div className="flex items-center gap-x-1.5">
                        {/* Author Name */}
                        <span className="text-custom font-iran-bold">عرفان ابویی مهریزی</span>
                        {/* Circle */}
                        <span className="block size-1.5 bg-gray-300 rounded-full"></span>
                        {/* Create At */}
                        <span className="text-custom font-iran-medium">۱۳ روز پیش</span>
                    </div>
                </div>
                {/* Like Count */}
                <div className="flex items-center gap-x-0.5">
                    <span className="text-custom font-iran-bold">۴۵</span>
                    <HiOutlineHeart className="size-4" />
                </div>
            </div>
            {/* Comment */}
            <p className="font-iran-light text-justify text-custom pr-6.5 text-gray-800">مطمنی داداش ؟ اخه من فک نکنم که این ویدیو واقعی باشه . من ایفونمو خریدم ۵۵ میلیون تومان شمارو نمیدونم بارد</p>
        </div>
    )
}

export default CommentBox