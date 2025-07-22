import type { CategoryData } from "@/services/dto/home-page.dto"
import ImageWithPlaceholder from "@/components/shared/ImageWithPlaceholder"

const CategoryItem = (categoryData: CategoryData) => {
    return (
        <div className="p-2 max-md:p-1 flex flex-col gap-y-2 max-md:gap-y-1 shrink-0 max-w-46 max-md:w-17 w-full border border-gray-400 max-md:rounded-lg rounded-2xl">
            <div className="h-20 max-md:h-8 rounded-md overflow-hidden">
                <ImageWithPlaceholder resultImageURL={categoryData.image} resultImageClass="object-contain size-full" placeHolderClass="object-contain size-full grayscale" />
            </div>
            <span className="text-center max-md:h-3 h-5 line-clamp-1 text-gray-950 text-sm max-md:text-custom font-dana-semi-bold max-md:font-dana">{categoryData.title}</span>
        </div>
    )
}

export default CategoryItem