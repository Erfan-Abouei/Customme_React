import { usePageTitle } from "@/hooks/usePageTitle"
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";

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