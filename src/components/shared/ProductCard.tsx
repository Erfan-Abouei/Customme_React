import type { ChildrenProp, ProductCardImageProps, ProductCardTitleProps } from "@/types/components-props.types"
import { HiOutlineHeart } from "react-icons/hi2";
import { showToast } from "@/utils/showToast";
import { HiOutlinePhoto } from "react-icons/hi2";
import PrimaryButton from "../ui/PrimaryButton";
import ImageWithPlaceholder from "./ImageWithPlaceholder"



const ProductCard = ({ children }: ChildrenProp) => {
    return (
        <div className="rounded-2xl border border-gray-500 p-4 max-md:p-3 flex flex-col items-center gap-y-4 max-md:gap-y-3">
            {children}
        </div>
    )
}

const ProductCardImage = ({ imageUrl, colors }: ProductCardImageProps) => {
    return (
        <div className="w-full h-64 max-md:size-24 relative rounded-lg overflow-hidden">
            <ImageWithPlaceholder resultImageURL={imageUrl} resultImageClass="size-full rounded-none object-cover" placeHolderClass="size-full rounded-none object-cover" />
            {colors.length > 0 && <div className="absolute bottom-0 left-0 flex items-center">
                {colors.map(color => (<div title={color.title} className="size-4 max-md:size-3 rounded-full -mr-1" style={{ backgroundColor: color.hex_code, border: `${color.hex_code === '#FFFFFF' ? '1px solid black' : ''}` }}></div>))}
            </div>}
        </div>
    )
}


const ProductCardInformation = ({ children }: ChildrenProp) => {
    return (
        <div className="w-full">{children}</div>
    )
}

const ProductCardTitle = ({ title, productId }: ProductCardTitleProps) => {
    const handleAddToFavorite = () => {
        console.log(`Added to favorite ${productId}`)
        showToast('سیستم لاگین نداریم برادر :)', "error")
    }
    return (
        <div className="mb-2.5 max-md:mb-3 flex items-center justify-between gap-x-2">
            <h3 className="font-dana-semi-bold text-lg max-md:text-sm text-black line-clamp-1 h-6 max-md:h-4">{title}</h3>
            <span onClick={handleAddToFavorite} className="cursor-pointer size-6 shrink-0">
                <HiOutlineHeart className="size-full" />
            </span>
        </div>
    )
}

const ProductCardCaption = ({ children }: ChildrenProp) => {
    return (
        <p className="mt-2.5 max-md:mt-3 h-10 max-md:h-8 line-clamp-2 text-black font-dana text-sm max-md:text-xs">{children}</p>
    )
}

const ProductCardPrice = ({ price }: { price: number }) => {
    const formattedPriceToToman = price / 10
    return (
        <div className="md:mt-3 flex items-center justify-end gap-x-2 text-black font-dana-semi-bold text-lg max-md:text-sm">
            <span>{formattedPriceToToman.toLocaleString()}</span>
            <span>تومان</span>
        </div>
    )
}

const AddToGalleryButton = ({ productId }: { productId: string }) => {
    const handleAddtoGallery = () => {
        console.log(`Added to gallery ${productId}`)
        showToast('سیستم لاگین نداریم برادر :)', "error")
    }
    return (
        <PrimaryButton onClick={handleAddtoGallery} customClass="w-full h-10 max-md:h-8.5 gap-x-1 text-primary max-md:text-custom text-sm font-dana-medium max-md:font-dana border border-primary rounded-lg hover:bg-primary/10 cursor-pointer max-md:mt-2">
            <HiOutlinePhoto className="size-6 max-md:size-4" />
            <span>افزودن به گالری</span>
        </PrimaryButton>
    )
}


ProductCard.image = ProductCardImage
ProductCard.information = ProductCardInformation
ProductCard.title = ProductCardTitle
ProductCard.caption = ProductCardCaption
ProductCard.price = ProductCardPrice
ProductCard.addToGalleryButton = AddToGalleryButton

export default ProductCard