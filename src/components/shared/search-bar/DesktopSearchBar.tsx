import { useEffect, useRef, useState } from 'react';
import { addRecentlySearch } from '@/utils/recentlySerach';
import { HiMiniXMark } from "react-icons/hi2";
import SearchResultSection from './SearchResultSection';
import RecentlySearchSection from './RecentlySearchSection';
import TrendsSearchSection from './TrendsSearchSection';

const DesktopSearchBar = () => {
    const [search, setSearch] = useState<string>("")
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            // @ts-ignore
            inputRef.current?.focus()
        }
    })

    // Handle search input (when Enter key is pressed)
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && search.trim() !== '') {
            // Navigate the user to the /search page and save the search value to localStorage
            addRecentlySearch(search)
            if (inputRef.current) {
                console.log(inputRef.current)
            }
            location.hash = ""
        }
    }

    return (
        // Search Bar
        <div className="absolute md:rounded-2xl max-md:fixed size-full inset-0 bg-white transition-all">
            {/* Search Input */}
            <div className="mb-6 shrink-0 relative border-b border-b-gray-400 h-12 flex items-center text-primary">
                <input value={search} onKeyUp={handleSearch} onChange={(e) => setSearch(e.target.value)} placeholder="جستجو" type="text" className="placeholder:text-gray-400 border-none outline-none size-full text-sm font-iran-regular pr-6" />
                <span className="size-6 ml-6">
                    <HiMiniXMark className="size-full" />
                </span>
            </div>
            <div className="flex flex-col gap-y-6 pt-0 p-6">
                <RecentlySearchSection searchValue={search} />
                <SearchResultSection searchValue={search} />
                <TrendsSearchSection />
            </div>
        </div>
    );
};

export default DesktopSearchBar