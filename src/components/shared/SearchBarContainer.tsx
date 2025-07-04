import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import clsx from "clsx";
import LogoComponent from "../ui/LogoComponent";
import SearchBar from "./SearchBar";

const SearchBarContainer = () => {
    const [search, setSearch] = useState<string>("");
    const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);

    return (
        <div className="relative grow">
            {/* Input Container */}
            <div
                className={clsx(
                    "relative z-10 flex items-center justify-between px-6 max-md:px-3 h-12 max-md:h-8 transition-all",
                    {
                        "border-b border-t-transparent border-r-transparent border-l-transparent border-b-gray-400 hover:border-b-gray-600 rounded-none": isOpenSearchBar,
                        "border border-gray-400 hover:border-gray-600 rounded-2xl": !isOpenSearchBar,
                    }
                )}
            >
                {/* Input */}
                <input
                    onFocus={() => setIsOpenSearchBar(true)}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-primary text-sm font-iran-regular border-none outline-none size-full"
                />

                {/* Labels - Desktop */}
                <span
                    className={clsx(
                        "transition-colors max-md:hidden text-sm font-iran-regular absolute",
                        {
                            "hidden": search,
                            "text-gray-400": isOpenSearchBar,
                            "text-primary": !isOpenSearchBar,
                        }
                    )}
                >
                    جستجو
                </span>

                {/* Labels - Mobile */}
                <div
                    className={clsx(
                        "md:hidden text-primary text-custom font-iran-regular flex items-center absolute",
                        {
                            "hidden": search,
                        }
                    )}
                >
                    <span>جستجو در</span>
                    <LogoComponent showLogo={false} customClass="w-15 h-4" />
                </div>

                {/* Icon */}
                <span className="size-6 max-md:size-4 text-primary absolute left-6 max-md:left-3">
                    <HiMagnifyingGlass className="size-full" />
                </span>
            </div>

            {/* Search Overlay */}
            <SearchBar isOpen={isOpenSearchBar} />
        </div>
    );
};

export default SearchBarContainer;
