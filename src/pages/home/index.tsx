import { usePageTitle } from "@/hooks/usePageTitle"
import HeroSection from "./components/hero-section/HeroSection";
import CategoriesSection from "./components/categories-section/CategoriesSection";

const HomePage = () => {
    usePageTitle('صفحه اصلی')
    return (
        <>
            <HeroSection />
            <CategoriesSection />
        </>
    )
};
export default HomePage