import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import clsx from "clsx";
import LogoComponent from "../../ui/LogoComponent";
import SearchBar from "./SearchBar";
import { useLocationHash } from "@/hooks/useLocationHash";
import { addRecentlySearch } from "@/utils/recentlySerach";

const SearchBarContainer = () => {
    const [search, setSearch] = useState<string>("");
    const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    // Show or hide the search bar based on the current URL hash
    const handleSearchBarVisibility = () => setIsOpenSearchBar(location.hash === '#search');
    useLocationHash(handleSearchBarVisibility)

    // Handle search input (when Enter key is pressed)
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && search.trim() !== '') {
            // Navigate the user to the /search page and save the search value to localStorage
            addRecentlySearch(search)
            if (inputRef.current) {
                inputRef.current.blur()
            }
            location.hash = ""
        }
    }

    // Clear the input when the search bar is closed
    useEffect(() => {
        if (!isOpenSearchBar) setSearch('')
    }, [isOpenSearchBar])

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
                    onFocus={() => location.hash = "search"}
                    onKeyUp={handleSearch}
                    ref={inputRef}
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
                    {!search ? <HiMagnifyingGlass className="size-full" /> : <HiMiniXMark className="size-full" />}
                </span>
            </div>

            {/* Search Bar */}
            {isOpenSearchBar && <SearchBar searchValue={search} />}
        </div>
    );
};

export default SearchBarContainer;
