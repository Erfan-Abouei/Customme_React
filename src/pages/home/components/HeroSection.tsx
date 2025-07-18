import PrimaryButton from "@/components/ui/PrimaryButton"
import HeroSectionShape from "./HeroSectionShape"
import { HiOutlinePaintBrush } from "react-icons/hi2";

const HeroSection = () => {
    return (
        <section className="hero-section my-10 max-md:my-6">
            <div className="container">
                <div className="relative overflow-hidden rounded-2xl bg-primary-tint-300">
                    <div className="relative z-10 w-full lg:h-111 md:h-60 max-md:py-2 md:px-6 lg:px-18 flex items-center gap-x-4 max-md:flex-col max-md:gap-y-2">
                        {/* Hero Section Content */}
                        <div className="max-lg:shrink-1 max-md:px-4 shrink-0 flex flex-col gap-y-14.25 max-lg:gap-y-10 max-md:gap-y-2">
                            {/* Content Top */}
                            <div className="flex flex-col max-md:items-center md:gap-y-4 gap-y-1 text-gray-900">
                                <h1 className="max-xl:text-3xl text-h3 font-iran-black max-md:font-iran-bold max-md:text-lg max-md:text-center">
                                    آنلاین شاپ کاستومی
                                </h1>
                                <p className="md:text-justify text-lg max-md:text-xs font-iran-regular lg:max-w-96">
                                    آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ و طرح و نوشته‌ی روی محصولات رو انتخاب کنید
                                </p>
                            </div>
                            {/* Content Bottom */}
                            <div className="flex items-center max-md:justify-center gap-x-6 max-md:gap-x-2">
                                <PrimaryButton customClass="text-white gap-x-1 max-md:text-custom text-sm font-iran-medium max-md:font-iran-regular max-md:w-33 max-w-46 w-full max-md:h-8 h-12 bg-primary hover:bg-primary/80 transition-colors duration-200 cursor-pointer rounded-lg shadow-md hover:shadow-lg">
                                    <HiOutlinePaintBrush className="size-5 max-md:size-4" />
                                    <span>شروع طراحی</span>
                                </PrimaryButton>
                                <PrimaryButton customClass="border border-primary text-primary gap-x-1 max-md:text-custom text-sm font-iran-medium max-md:font-iran-regular max-md:w-33 max-w-46 w-full max-md:h-8 h-12 hover:bg-primary/10 transition-colors duration-200 cursor-pointer rounded-lg">
                                    <span>دیدن محصولات</span>
                                </PrimaryButton>
                            </div>
                        </div>
                        {/* Hero Section Image */}
                        <div className="max-lg:hidden max-md:block max-md:-order-1 md:w-191 md:h-88.75 w-80 h-40.5 max-md:w-80 max-md:h-40.5">
                            <img
                                src="/images/hero-section/Hero-Section-Banner-Desktop.png"
                                alt="بنر اصلی آنلاین شاپ کاستومی"
                                className="size-full max-md:hidden object-cover"
                            />
                            <img
                                src="/images/hero-section/Hero-Section-Banner-Mobile.png"
                                alt="بنر موبایل آنلاین شاپ کاستومی"
                                className="size-full md:hidden object-cover"
                            />
                        </div>
                    </div>

                    {/* -------- */}
                    {/* Hero Section Shape */}
                    <div className="absolute -top-22.5 -right-52 rotate-[12deg] max-lg:hidden">
                        <HeroSectionShape />
                    </div>
                    <div className="absolute -bottom-34.5 -left-32 rotate-[-8deg] max-lg:hidden">
                        <HeroSectionShape />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection