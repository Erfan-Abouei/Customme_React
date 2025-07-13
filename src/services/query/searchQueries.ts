import { useQuery } from "@tanstack/react-query"
import { getTrendSearch, searchItem } from "../api/searchApi"

export const useTrendsSearchQuery = () => {
    return useQuery({
        queryKey: ['trends_search'],
        queryFn: getTrendSearch,
        staleTime: 60 * 60 * 10000
    })
}

export const useSearchItemQuery = (q: string, signal?: AbortSignal) => {
    return useQuery({
        queryKey: ['search_item', q],
        queryFn: () => searchItem(q, signal),
        enabled: !!q
    })
}