import { usePageTitle } from "@/hooks/usePageTitle"
import HeroSection from "./components/HeroSection";

const HomePage = () => {
    usePageTitle('صفحه اصلی')
    return (
        <>
            <HeroSection />
        </>
    )
};
export default HomePage