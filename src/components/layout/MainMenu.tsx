import PrimaryButton from "../ui/PrimaryButton"
import { HiOutlinePaintBrush } from "react-icons/hi2";

const MainMenu = () => {
    return (
        <div className="container">
            <div className="relative mt-8 max-md:hidden flex items-center gap-x-8">
                <PrimaryButton customClass="cursor-pointer text-white font-iran-medium text-sm bg-primary hover:bg-primary/80 rounded-lg max-w-46 w-full h-12">
                    <HiOutlinePaintBrush className="size-6" />
                    <span> خودت طراحیش کن !</span>
                </PrimaryButton>
                <div className="whitespace-nowrap overflow-auto page__scroll--hidden flex items-center gap-x-10">
                    {/* Span tag ( replace Link Component ) */}
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    <span className="font-iran-regular text-base text-gray-900 hover:text-gray-950 cursor-pointer transition-all">دسته بندی محصولات</span>
                    {/* Fade Component */}
                    <div className="w-20 h-full absolute left-0 bg-gradient-to-r from-white to-transprent"></div>
                </div>
            </div >
        </div>
    )
}

export default MainMenu