import OfferComponent from "./OfferComonent"

const SpecialSellContainer = () => {
    return (
        <div className="mt-6 max-md:mt-3 grid grid-cols-12 max-md:grid-cols-4 gap-x-6 max-md:gap-x-4 items-center">
            <div className="relative col-span-6 max-md:col-span-2 h-144 max-lg:h-100 max-md:h-33.5 max-md:rounded-lg rounded-2xl special-sell__item overflow-hidden">
                <OfferComponent />
                {/* Item Title */}
                <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:left-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">لوازم خانه </span>  
                {/* Item Image */}
                <img src="/images/Special-Item-Image.png" alt="Test" className="size-full object-cover absolute inset-0 -z-1" />
            </div>
            <div className="col-span-6 max-md:col-span-2 h-full max-md:rounded-lg flex items-center justify-center flex-col gap-y-4 max-md:gap-y-1.5">
                <div className="size-full flex items-center gap-x-6 max-md:gap-x-4">
                    <div className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden">
                        <OfferComponent />
                        {/* Item Title */}
                        <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:left-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">لوازم مدرسه</span>
                        {/* Item Image */}
                        <img src="/images/Special-Item-Image.png" alt="Test" className="size-full object-cover absolute inset-0 -z-1" />
                    </div>
                    <div className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden">
                        <OfferComponent />
                        {/* Item Title */}
                        <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:left-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">پوشاک</span>
                        {/* Item Image */}
                        <img src="/images/Special-Item-Image.png" alt="Test" className="size-full object-cover absolute inset-0 -z-1" />
                    </div>
                </div>
                <div className="size-full flex items-center gap-x-6 max-md:gap-x-4">
                    <div className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden">
                        <OfferComponent />
                        {/* Item Title */}
                        <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:left-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">دیجیتال</span>
                        {/* Item Image */}
                        <img src="/images/Special-Item-Image.png" alt="Test" className="size-full object-cover absolute inset-0 -z-1" />
                    </div>
                    <div className="size-full rounded-2xl max-md:rounded-lg relative special-sell__item overflow-hidden">
                        <OfferComponent />
                        {/* Item Title */}
                        <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:left-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">استیکر</span>
                        {/* Item Image */}
                        <img src="/images/Special-Item-Image.png" alt="Test" className="size-full object-cover absolute inset-0 -z-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialSellContainer