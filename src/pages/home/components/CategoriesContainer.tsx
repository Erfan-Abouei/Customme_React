import CategoryItemLoader from "./CategoryItemLoader"



const CategoriesContainer = () => {
    const categoryItemLoader = Array.from({ length: 10 }).map((_, i: number) => <CategoryItemLoader key={i} />)
    return (
        <div className="mt-6 max-md:mt-3 flex items-center gap-x-6 max-md:gap-x-3 whitespace-nowrap overflow-auto page__scroll--hidden">
            {/* Category Item Loader */}
            {categoryItemLoader}
        </div>
    )
}

export default CategoriesContainer