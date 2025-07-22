import { usePageTitle } from "@/hooks/usePageTitle"
import HeroSection from "./components/hero-section/HeroSection";
import CategoriesSection from "./components/categories-section/CategoriesSection";
import BestSellingSection from "./components/best-seller-section/BestSellingSection";
import SpeciaSellSection from "./components/special-sell-section/SpeciaSellSection";

const HomePage = () => {
    usePageTitle('صفحه اصلی')
    return (
        <>
            <HeroSection />
            <CategoriesSection />
            <BestSellingSection />
            <SpeciaSellSection />
        </>
    )
};
export default HomePage