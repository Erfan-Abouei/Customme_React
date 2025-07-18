import type { CategoriesContainerProps } from "@/types/components-props.types";
import CategoryItem from "./CategoryItem"
import CategoryItemLoader from "./CategoryItemLoader"

const CategoriesContainer = ({ isLoading, productCategoriesData }: CategoriesContainerProps) => {

    const categoryItemLoader = Array.from({ length: 10 }).map((_, i: number) => <CategoryItemLoader key={i} />)
    const categoryItem = productCategoriesData.map((item) => <CategoryItem key={item.title} {...item} />)

    return (
        <div className="mt-6 max-md:mt-3 flex items-center gap-x-6 max-md:gap-x-3 overflow-auto page__scroll--hidden">
            {/* Category Items & Loader */}
            {isLoading && categoryItemLoader}
            {productCategoriesData.length > 0 && !isLoading && categoryItem}
        </div>
    )
};

export default CategoriesContainer