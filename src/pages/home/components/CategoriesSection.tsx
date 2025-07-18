import SectionTitle from "@/components/ui/SectionTitle"
import { HiOutlineCalendar } from "react-icons/hi2";
import CategoriesContainer from "./CategoriesContainer";

// I knew that sections should come from the API and be categorized accordingly on the main page,
// but our design structure was different from Digikala's API,
// so I had to create the sections manually.
const CategoriesSection = () => {
    return (
        <section className="categories-section my-10 max-md:my-6">
            <div className="container">
                {/* Categories Section Header */}
                <SectionTitle icon={<HiOutlineCalendar className="size-full" />} title={'دسته بندی محصولات'} />
                {/* Categories Container */}
                <CategoriesContainer />
            </div>
        </section>
    )
}

export default CategoriesSection