import { useState } from "react";
import { useLocationHash } from "@/hooks/useLocationHash";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Type from '/Type.svg'
import SearchBar from "./SearchBar";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

const SearchBarContainer = () => {
    const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);

    // Show or hide the search bar based on the current URL hash
    const handleSearchBarVisibility = () => setIsOpenSearchBar(location.hash === '#search');
    useLocationHash(handleSearchBarVisibility)

    return (
        <div onClick={() => location.hash = "search"} className={clsx(`relative grow text-primary flex items-center justify-between cursor-pointer h-12 max-md:h-8 px-6 max-md:px-3 rounded-2xl transition-all border`, {
            'border-gray-400 hover:border-gray-600 rounded-2xl': !isOpenSearchBar,
            'border-transparent rounded-none': isOpenSearchBar
        })}>
            {/* Label ( Desktop ) */}
            <span className="max-md:hidden text-sm font-dana">جستجو</span>
            {/* Label ( Mobile ) */}
            <div className="md:hidden flex items-center gap-x-1">
                <span className="text-custom font-dana">جستجو در</span>
                <img className="w-14.75 h-3.75" src={Type} alt="Type" />
            </div>
            {/* Search Icon */}
            <HiMagnifyingGlass className="size-6 max-md:size-4" />
            <AnimatePresence>
                {isOpenSearchBar && <SearchBar />}
            </AnimatePresence>
        </div>
    );
};

export default SearchBarContainer;
