import SectionTitle from "@/components/ui/SectionTitle"
import { HiOutlineCalendar } from "react-icons/hi2";
import CategoriesContainer from "./CategoriesContainer";
import { filterHomePageStruc } from "@/utils/filterHomePageStruc";
import { useHomePageQuery } from "@/services/query/homePageQuery";
import type { CategoryData } from "@/services/dto/home-page.dto";

// I knew that sections should come from the API and be categorized accordingly on the main page,
// but our design structure was different from Digikala's API,
// so I had to create the sections manually.
const CategoriesSection = () => {
    const { data, isLoading } = useHomePageQuery()

    const widgets = data?.data?.widgets
    const productCategories: CategoryData[] = Array.isArray(widgets) ? filterHomePageStruc(widgets, 'main_categories_grid')[0].data.categories : []

    return (
        (isLoading || productCategories.length > 0) && (
            <section className="categories-section my-10 max-md:my-6">
                <div className="container">
                    {/* Categories Section Header */}
                    <SectionTitle icon={<HiOutlineCalendar className="size-full" />} title={'دسته بندی محصولات'} />
                    {/* Categories Container */}
                    <CategoriesContainer isLoading={isLoading} productCategoriesData={productCategories} />
                </div>
            </section>
        ))
}

export default CategoriesSection