import SectionTitle from "@/components/ui/SectionTitle"
import { HiOutlineCalendar } from "react-icons/hi2";


const CategoriesSection = () => {
    return (
        <section className="categories-section my-10 max-md:my-6">
            <div className="container">
                {/* Categories Section Header */}
                <SectionTitle icon={<HiOutlineCalendar className="size-full" />} title={'دسته بندی محصولات'} />
            </div>
        </section>
    )
}

export default CategoriesSection