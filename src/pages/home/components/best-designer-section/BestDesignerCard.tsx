import ImageWithPlaceholder from "@/components/shared/ImageWithPlaceholder"
import DesignerPortfolioBox from "./DesignerPortfolioBox"
import PrimaryButton from "@/components/ui/PrimaryButton"
import { HiOutlineUserPlus } from "react-icons/hi2";


const BestDesignerCard = () => {
    return (
        <div className="relative rounded-2xl border border-gray-500 flex flex-col gap-y-4 max-md:gap-y-3 overflow-hidden pt-8 max-md:pt-3 px-3 pb-4">
            {/* Desktop Pattern */}
            <div className="max-md:hidden absolute top-0 left-0 right-0 h-18 bg-primary-tint-200"></div>
            {/* Mobile Pattern */}
            <div className="md:hidden h-12 absolute top-0 left-0 right-0">
                <img src="/images/Best-Designer-Mobile-Pattern.png" alt="Test" className="size-full object-cover" />
            </div>

            {/* Designer Information */}
            {/* ------ */}
            {/* Designer Profile */}
            <div className="size-20 max-md:size-14 overflow-hidden mx-auto">
                <ImageWithPlaceholder resultImageURL="/images/Designer-Profile.png" />
            </div>
            {/* Designer Name */}
            <span className="h-10 max-md:h-4 flex items-center justify-center text-base max-md:text-custom font-dana-semi-bold">نیلوفر کریمی</span>
            {/* Designer Page Info */}
            <div className="flex items-center max-xl:flex-col justify-between text-custom font-dana text-gray-700">
                <span>دنبال کنندگان : ۴۰۰</span>
                <span className="max-xl:hidden block h-full w-px bg-gray-700"></span>
                <span> تعداد طرح ها : ۵۶</span>
                <span className="max-xl:hidden block h-full w-px bg-gray-700"></span>
                <span> آمار فروش : ۳۷۰</span>
            </div>
            {/* Designer Portfolio */}
            <div className="max-md:hidden flex items-center justify-between">
                <DesignerPortfolioBox />
                <DesignerPortfolioBox />
                <DesignerPortfolioBox />
            </div>
            {/* Follow Button */}
            <PrimaryButton customClass="w-full h-10 max-md:h-8 gap-x-1 text-primary max-md:text-custom text-sm font-dana-medium max-md:font-dana border border-primary rounded-lg hover:bg-primary/10 cursor-pointer">
                <HiOutlineUserPlus className="size-6 max-md:size-4" />
                <span>دنبال کردن</span>
            </PrimaryButton>
        </div>
    )
}

export default BestDesignerCard