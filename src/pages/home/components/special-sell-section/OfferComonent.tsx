import type { OfferComponentProp } from "@/types/components-props.types"

const OfferComponent = ({ discountNumber }: OfferComponentProp) => {
    return (
        <div className="max-w-14.25 max-lg:max-w-10 w-full max-md:max-w-6 absolute top-0 left-4 max-md:left-2 flex flex-col items-center gap-y-1 offer__card--discount-number h-25 max-lg:h-15 max-md:h-11 text-white font-dana py-2">
            <span className="text-base max-md:text-custom">{discountNumber}%</span>
            <span className="max-lg:hidden">تخفیف</span>
        </div>
    )

}

export default OfferComponent