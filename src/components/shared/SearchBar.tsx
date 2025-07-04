import clsx from 'clsx';

import type { SearchBarProp } from '@/types/components-props.types';

import { HiOutlineTrash } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import { getRecentlySearchFromLocalStorage, removeSearchRecentky } from '@/utils/recentlySerach';
import type SearchDTO from '@/services/dto/search.dto';
import { getTrendSearch } from '@/services/handle-search-request';
import SearchItemLoader from './SearchItemLoader';

const SearchBar = ({ searchValue }: SearchBarProp) => {

    const [recentlySearch, setRecentlySearch] = useState<string[]>(() => getRecentlySearchFromLocalStorage())

    const [isLoadingTrendsSearch, setIsLoadingTrendsSearch] = useState<boolean>(false)
    const [trendsSearch, setTrendsSearch] = useState<SearchDTO | null>()

    const handleDeleteRecentlySearch = () => {
        setRecentlySearch([])
        removeSearchRecentky()
    }

    // Load Trends Search
    useEffect(() => {
        const fetchTrendsSearch = async (): Promise<void> => {
            setIsLoadingTrendsSearch(true)
            try {
                const trendsSearchData = await getTrendSearch()
                setTrendsSearch(trendsSearchData)
                setIsLoadingTrendsSearch(false)
            } catch (error) {
                setIsLoadingTrendsSearch(false)
            }
        }
        fetchTrendsSearch()
    }, [])

    return (
        <div
            className="absolute top-0 left-0 right-0 w-full bg-white rounded-2xl transition-all duration-300 search-bar--show">
            <div className="pt-18 px-6 pb-6">
                {/* Search Result */}
                {/* Recently Search Section */}
                {recentlySearch.length > 0 && (
                    <div className="flex flex-col gap-y-3.5 mb-8">
                        <div className="flex items-center justify-between">
                            <span className='text-xs font-iran-regular text-gray-950'>جستجوهای اخیر شما</span>
                            <span className="size-5 text-primary cursor-pointer" onClick={handleDeleteRecentlySearch}>
                                <HiOutlineTrash className='size-full' />
                            </span>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            {recentlySearch.map((search: string) => <SearchItem key={search} keyword={search} />)}
                        </div>
                    </div>
                )}
                {/* Trend Search Section */}
                {!searchValue && (
                    <div className="flex flex-col gap-y-3.5">
                        <span className='text-xs font-iran-regular text-gray-950'>جستجوهای پرطرفدار</span>
                        <div className="flex items-center gap-4 flex-wrap">
                            {
                                isLoadingTrendsSearch ? Array.from({ length: 6 }).map((_, i) => <SearchItemLoader key={i} />) : (
                                    trendsSearch?.data.trends.map((trend) => <SearchItem key={trend.keyword} keyword={trend.keyword} />)
                                )
                            }
                        </div>
                    </div>
                )}
            </div>

        </div >
    );
};

export default SearchBar