import LogoComponent from "../ui/LogoComponent"

const Header = () => {
    return (
        <header>
            <div className="h-26 flex items-center max-md:h-10 md:border-b md:border-gray-400">
                <div className="container">
                    <div className="flex items-center justify-between gap-x-10">
                        <LogoComponent customClass="w-48 h-12.5" />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header