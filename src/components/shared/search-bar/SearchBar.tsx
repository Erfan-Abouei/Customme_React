import { useRef, useState } from 'react';
import { addRecentlySearch } from '@/utils/recentlySerach';
import { HiMiniXMark } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { useOneTime } from '@/hooks/useOneTime';
import SearchResultSection from './SearchResultSection';
import RecentlySearchSection from './RecentlySearchSection';
import TrendsSearchSection from './TrendsSearchSection';

const SearchBar = () => {
    const [search, setSearch] = useState<string>("")
    const inputRef = useRef(null)

    const focusOnStart = () => {
        if (inputRef.current) {
            // @ts-ignore
            inputRef.current.focus()
        }
    }
    useOneTime(focusOnStart)

    // Handle search input (when Enter key is pressed)
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && search.trim() !== '') {
            // Navigate the user to the /search page and save the search value to localStorage
            addRecentlySearch(search)
            location.hash = ""
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="md:rounded-2xl absolute max-md:fixed max-md:inset-0 left-0 right-0 top-0 bg-white"
        >
            {/* Search Input */}
            <div className="mb-6 shrink-0 border-b border-b-gray-400 px-6 h-12 flex items-center justify-center text-primary">
                <input ref={inputRef} value={search} onKeyUp={handleSearch} onChange={(e) => setSearch(e.target.value)} placeholder="جستجو" type="text" className="placeholder:text-gray-400 border-none outline-none size-full text-sm font-dana" />
                <span className="size-6" onClick={() => location.hash = ""}>
                    <HiMiniXMark className="size-full" />
                </span>
            </div>
            <div className="flex flex-col gap-y-6 pt-0 p-6">
                <SearchResultSection searchValue={search} />
                <RecentlySearchSection searchValue={search} />
                <TrendsSearchSection />
            </div>
        </motion.div >
    );
};

export default SearchBar