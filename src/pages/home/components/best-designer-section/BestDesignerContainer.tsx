import BestDesignerCard from "./BestDesignerCard"

const BestDesignerContainer = () => {
    const isMobile = window.innerWidth < 768;
    const item = Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => <BestDesignerCard key={i} />)

    return (
        <div className="mt-6 max-md:mt-3 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6 max-md:gap-4">
            {item}
        </div>
    )
}

export default BestDesignerContainer