import SectionTitle from "@/components/ui/SectionTitle"
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import MoreDetailsButton from "../MoreDetailsButton";
import BestDesignerContainer from "./BestDesignerContainer";


const BestDesignerSection = () => {
    return (
        <section className="best-designer-sectio mt-10 max-md:mt-6">
            <div className="container">
                {/* Best Designer Section Title  */}
                <SectionTitle title="طراحان برتر" icon={<HiOutlineHandThumbUp className="size-full" />} leftItem={<MoreDetailsButton path="/" />} />
                {/* Best Designer Section Body */}
                <BestDesignerContainer />
            </div>
        </section>
    )
}

export default BestDesignerSection