import type SearchDTO from "@/services/dto/search.dto"
import { getTrendSearch } from "@/services/handle-search-request"
import { useEffect, useState } from "react"
import SearchItemLoader from "./SearchItemLoader"
import SearchItem from "./SearchItem"

const TrendsSearchSection = () => {

    const [isLoadingTrendsSearch, setIsLoadingTrendsSearch] = useState<boolean>(false)
    const [trendsSearch, setTrendsSearch] = useState<SearchDTO | null>()

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

    // JSX LOGIC
    const trendsSearchLoader = Array.from({ length: 6 }).map((_, i) => <SearchItemLoader key={i} />)
    const trendsSearchItem = trendsSearch?.data?.trends.map((trend) => <SearchItem key={trend.keyword} keyword={trend.keyword} />)

    return (
        <div className="flex flex-col gap-y-3.5">
            <span className='text-xs font-iran-regular text-gray-950'>جستجوهای پرطرفدار</span>
            <div className="flex items-center gap-4 flex-wrap">
                {
                    isLoadingTrendsSearch ? trendsSearchLoader : trendsSearchItem
                }
            </div>
        </div>
    )
}

export default TrendsSearchSection