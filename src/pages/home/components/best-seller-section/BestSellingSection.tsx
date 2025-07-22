import { HiOutlineBolt } from "react-icons/hi2";
import { useBestSellingQuery } from "@/services/query/bestSellingQuery";
import SectionTitle from "@/components/ui/SectionTitle"
import MoreDetailsButton from "../MoreDetailsButton";
import BestProductSellContainer from "./BestProductSellContainer";

const BestSellingSection = () => {
    const { data, isLoading } = useBestSellingQuery()
    const products = data?.data?.products
    const bestSellingProduct = Array.isArray(products) ? products.slice(0, 8) : []
    return (
        (bestSellingProduct.length > 0 || isLoading) && (<section className="best-selling-section mt-10 max-md:mt-6">
            <div className="container">
                {/* Best Selling Section Header */}
                <SectionTitle title="پرفروش ترین ها" icon={<HiOutlineBolt className="size-full" />} leftItem={<MoreDetailsButton path="/" />} />
                {/* Best Selling Section Body */}
                <BestProductSellContainer productsData={bestSellingProduct} isLoading={isLoading} />
            </div>
        </section>)
    )
}

export default BestSellingSection