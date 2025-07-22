import SectionTitle from "@/components/ui/SectionTitle"
import { HiOutlinePercentBadge } from "react-icons/hi2";
import SpecialSellContainer from "./SpecialSellContainer";


const SpeciaSellSection = () => {
    return (
        <section className="specia-sell-section mt-10 max-md:mt-6">
            <div className="container">
                {/* Special Section Header */}
                <SectionTitle title="فروش ویژه" icon={<HiOutlinePercentBadge className="size-full" />} />
                {/* Special Section Body */}
                <SpecialSellContainer />
            </div>
        </section>
    )
}

export default SpeciaSellSection