import { useLocationHash } from "@/hooks/useLocationHash";
import AccountButton from "../shared/AccountButton"
import SearchBarContainer from "../shared/search-bar/SearchBarContainer"
import LogoComponent from "../ui/LogoComponent"
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";


const Header = () => {
    const [isHeaderBehindModal, setIsHeaderBehindModal] = useState(false);

    // Adjust the header's z-index based on the current URL hash to show it behind a modal when needed
    const DynamicZIndexHeader = () => setIsHeaderBehindModal(location.hash !== '#search');
    useLocationHash(DynamicZIndexHeader)
    return (
        <header>
            <div className={`relative bg-white z-${isHeaderBehindModal ? '10' : '30'} h-26 flex items-center max-md:h-13 md:border-b md:border-gray-400`}>
                <div className="container">
                    <div className="flex items-center justify-between gap-x-18.75 max-xl:gap-x-13 max-lg:gap-x-6 max-md:gap-x-3">
                        {/* Mobile Menu Bars Icon */}
                        <span className="size-6 text-gray-950 md:hidden">
                            <HiBars3 className="size-full" />
                        </span>
                        {/* Logo */}
                        <LogoComponent customClass="max-md:order-1" customLogoClass="size-12.5 max-md:size-10" customLogoTypeClass="w-33.75 h-12.5 max-md:hidden" />
                        {/* Search Bar */}
                        <SearchBarContainer />
                        {/* Action Button */}
                        <div className="max-md:hidden flex items-center">
                            {/* Login Button */}
                            {true && <AccountButton><HiArrowRightEndOnRectangle className="size-6" /><span>ورود | ثبت نام</span></AccountButton>}
                            {true && <AccountButton>
                                <span className="relative">
                                    <HiOutlineShoppingCart className="size-6" />
                                    {/* Cart Items Count */}
                                    <span className="absolute -top-1.5 -right-1.5 block flex items-center justify-center size-4 rounded-full bg-primary-tint-500 text-gray-950 text-xs font-iran-bold">۰</span>
                                </span>
                                <span>سبد خرید</span>
                            </AccountButton>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header