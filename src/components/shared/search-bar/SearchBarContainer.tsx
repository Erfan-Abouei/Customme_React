import { useEffect, useState } from "react";
import { useLocationHash } from "@/hooks/useLocationHash";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Type from '/Type.svg'
import DesktopSearchBar from "./DesktopSearchBar";

const SearchBarContainer = () => {
    const [search, setSearch] = useState<string>("")
    const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);

    // Show or hide the search bar based on the current URL hash
    const handleSearchBarVisibility = () => setIsOpenSearchBar(location.hash === '#search');
    useLocationHash(handleSearchBarVisibility)

    // Clear the input when the search bar is closed
    useEffect(() => {
        if (!isOpenSearchBar) setSearch('')
    }, [isOpenSearchBar])

    return (
        <div className="relative grow text-primary flex items-center justify-between cursor-pointer h-12 max-md:h-8 px-6 max-md:px-3 rounded-2xl border border-gray-400 transition-all hover:border-gray-600">
            {/* Label ( Desktop ) */}
            <span className="max-md:hidden text-sm font-iran-regular">جستجو</span>
            {/* Label ( Mobile ) */}
            <div className="md:hidden flex items-center gap-x-1">
                <span className="text-custom font-iran-regular">جستجو در</span>
                <img className="w-14.75 h-3.75" src={Type} alt="Type" />
            </div>
            {/* Search Icon */}
            <HiMagnifyingGlass className="size-6 max-md:size-4" />
            <DesktopSearchBar />
        </div>
    );
};

export default SearchBarContainer;
