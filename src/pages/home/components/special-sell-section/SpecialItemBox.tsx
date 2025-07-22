import type { SpecialItemBoxProps } from "@/types/components-props.types"
import clsx from "clsx"
import OfferComponent from "./OfferComonent"
import ImageWithPlaceholder from "@/components/shared/ImageWithPlaceholder"

const SpecialItemBox = ({ className, discountNumber, boxTitle, boxImage }: SpecialItemBoxProps) => {
    return (
        <div className={clsx(className)}>
            <OfferComponent discountNumber={discountNumber} />
            {/* Item Title */}
            <span className="absolute bottom-8 right-8 max-md:bottom-0 max-md:right-4 text-2xl line-clamp-1 max-md:text-sm text-primary-tint-300 font-dana-semi-bold max-md:font-dana">{boxTitle}</span>
            {/* Item Image */}
            <ImageWithPlaceholder placeHolderClass="size-full rounded-none object-cover" resultImageClass="size-full object-cover absolute inset-0 -z-1" resultImageURL={boxImage} />
        </div>
    )
}

export default SpecialItemBox