import type { RecentlySearchSectionProps } from "@/types/components-props.types"
import { useState } from "react"
import SearchItem from "./SearchItem"
import { getRecentlySearchFromLocalStorage, removeRecentlySearch } from "@/utils/recentlySerach"
import { HiOutlineTrash } from "react-icons/hi2"

const RecentlySearchSection = ({ searchValue }: RecentlySearchSectionProps) => {
    const [recentlySearch, setRecentlySearch] = useState<string[]>(() => getRecentlySearchFromLocalStorage())

    const recentlySearchItems = recentlySearch.map((search: string) => <SearchItem key={search} keyword={search} />)
    const isShowRecentlySearchSection = recentlySearch.length > 0 && !searchValue

    const handleDeleteRecentlySearch = () => {
        setRecentlySearch([])
        removeRecentlySearch()
    }

    if (!isShowRecentlySearchSection) return null

    return (
        <div className="flex flex-col gap-y-3.5">
            <div className="flex items-center justify-between">
                <span className="text-xs font-dana text-gray-950">جستجوهای اخیر شما</span>
                <span className="size-5 text-primary cursor-pointer" onClick={handleDeleteRecentlySearch}>
                    <HiOutlineTrash className="size-full" />
                </span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
                {recentlySearchItems}
            </div>
        </div>
    )
}

export default RecentlySearchSection
