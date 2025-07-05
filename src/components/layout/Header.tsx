import SearchBarContainer from "../shared/search-bar/SearchBarContainer"
import LogoComponent from "../ui/LogoComponent"

const Header = () => {
    return (
        <header>
            <div className="relative bg-white z-20 h-26 flex items-center max-md:h-10 md:border-b md:border-gray-400">
                <div className="container">
                    <div className="flex items-center justify-between gap-x-18.75 max-md:gap-x-3">
                        <LogoComponent customClass="max-md:hidden w-48 h-12.5" LogoClass="max-md:size-10" LogoTypeClass="max-md:hidden" />
                        <SearchBarContainer />
                        <div className="h-10 w-72"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header