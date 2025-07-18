import { memo } from "react"
import SearchItemLoader from "./SearchItemLoader"
import SearchItem from "./SearchItem"
import NotFoundText from "./NotFoundText"
import { useTrendsSearchQuery } from "@/services/query/searchQueries"

const TrendsSearchSection = () => {

    const { data: trendsSearch, isLoading: isLoadingTrendsSearch, isError } = useTrendsSearchQuery()

    const trendsSearchLoader = Array.from({ length: 3 }).map((_, i) => <SearchItemLoader key={i} />)

    const trendsSearchItems = Array.isArray(trendsSearch?.data?.trends)
        ? trendsSearch.data.trends.map((trend) => (
            <SearchItem key={trend.keyword} keyword={trend.keyword} />
        ))
        : []
    return (
        <div className="flex flex-col gap-y-3.5">
            <span className='text-xs font-dana text-gray-950'>جستجوهای پرطرفدار</span>
            <div className="flex items-center gap-4 flex-wrap">
                {isLoadingTrendsSearch && trendsSearchLoader}
                {!isLoadingTrendsSearch && trendsSearchItems.length > 0 && trendsSearchItems}
                {((!isLoadingTrendsSearch && trendsSearchItems.length === 0) || isError) && (<NotFoundText message="چیزی پیدا نشد" />)}
            </div>
        </div>
    )
}

export default memo(TrendsSearchSection)
