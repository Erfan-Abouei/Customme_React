import type { SearchBarProp } from '@/types/components-props.types';

import { HiOutlineTrash } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import { getRecentlySearchFromLocalStorage, removeSearchRecentky } from '@/utils/recentlySerach';
import type SearchDTO from '@/services/dto/search.dto';
import { getTrendSearch, searchItem } from '@/services/handle-search-request';
import SearchItemLoader from './SearchItemLoader';
import SearchResultItem from './SearchResultItem';
import SearchResultItemLoader from './SearchResultItemLoader';
import type { CategoryItem } from '@/services/dto/search.dto';

const SearchBar = ({ searchValue }: SearchBarProp) => {

    const [recentlySearch, setRecentlySearch] = useState<string[]>(() => getRecentlySearchFromLocalStorage())

    const [isLoadingTrendsSearch, setIsLoadingTrendsSearch] = useState<boolean>(false)
    const [trendsSearch, setTrendsSearch] = useState<SearchDTO | null>()

    const [isLoadingAutoComplete, setIsLoadingAutoComplete] = useState<boolean>(false)
    const [autoComplete, setAutoComplete] = useState<SearchDTO | null>()

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

    // Get Auto Complete
    useEffect(() => {
        if (!searchValue) {
            setAutoComplete(null);
            return
        };

        const controller = new AbortController();

        const fetchAutoComplete = async () => {
            try {
                setIsLoadingAutoComplete(true);
                const autoCompleteData = await searchItem(searchValue, controller.signal);
                setAutoComplete(autoCompleteData);
                setIsLoadingAutoComplete(false)
            } catch (error) {
                setIsLoadingAutoComplete(false);
            }
        };

        const timeout = setTimeout(fetchAutoComplete, 500);

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [searchValue]);

    // JSX LOGIC
    const autoCompleteLoader = Array.from({ length: 3 }).map((_, i) => <SearchResultItemLoader key={i} />)
    const autoCompleteItem = autoComplete?.data?.categories.map((category: CategoryItem) => <SearchResultItem key={category.category.id} {...category} />)
    const autoCompleteCategoryTitle = autoComplete?.data?.advance_links[0]?.category?.title_fa

    const trendsSearchLoader = Array.from({ length: 6 }).map((_, i) => <SearchItemLoader key={i} />)
    const trendsSearchItem = trendsSearch?.data?.trends.map((trend) => <SearchItem key={trend.keyword} keyword={trend.keyword} />)

    const recentlySearchItems = recentlySearch.map((search: string) => <SearchItem key={search} keyword={search} />)

    const isShowSearchResultSection = autoComplete && searchValue && autoCompleteCategoryTitle
    const isShowRecentrySearchSection = recentlySearch.length > 0 && !searchValue
    return (
        <div
            className="absolute top-0 left-0 right-0 w-full bg-white rounded-2xl transition-all duration-300 search-bar--show">
            <div className="pt-18 px-6 pb-6">
                {/* Search Result */}
                {isShowSearchResultSection && <div className="pb-8 mb-6 border-b border-gray-400 flex flex-col gap-y-6">
                    {!isLoadingAutoComplete && <span className="text-custom font-iran-regular text-black">همه کالا های {autoCompleteCategoryTitle}</span>}
                    <div className='flex flex-col gap-y-6'>
                        {
                            isLoadingAutoComplete ? autoCompleteLoader : autoCompleteItem
                        }
                    </div>
                </div>}
                {/* Recently Search Section */}
                {isShowRecentrySearchSection && (
                    <div className="flex flex-col gap-y-3.5 mb-8">
                        <div className="flex items-center justify-between">
                            <span className='text-xs font-iran-regular text-gray-950'>جستجوهای اخیر شما</span>
                            <span className="size-5 text-primary cursor-pointer" onClick={handleDeleteRecentlySearch}>
                                <HiOutlineTrash className='size-full' />
                            </span>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            {recentlySearchItems}
                        </div>
                    </div>
                )}
                {/* Trend Search Section */}
                <div className="flex flex-col gap-y-3.5">
                    <span className='text-xs font-iran-regular text-gray-950'>جستجوهای پرطرفدار</span>
                    <div className="flex items-center gap-4 flex-wrap">
                        {
                            isLoadingTrendsSearch ? trendsSearchLoader : trendsSearchItem
                        }
                    </div>
                </div>
            </div>

        </div >
    );
};

export default SearchBar