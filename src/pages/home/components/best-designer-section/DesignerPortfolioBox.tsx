import ImageWithPlaceholder from "@/components/shared/ImageWithPlaceholder"

const DesignerPortfolioBox = () => {
    return (
        <div className="size-20 max-xl:size-16 flex items-center justify-cneter rounded-lg border border-gray-500 overflow-hidden">
            <ImageWithPlaceholder resultImageURL="test" resultImageClass="size-full object-cover" placeHolderClass="size-full object-cover" />
        </div>
    )
}

export default DesignerPortfolioBox