import { useQuery } from "@tanstack/react-query"
import { getTrendSearch, searchItem } from "../api/searchApi"
import { type SearchDTO } from "../dto/search.dto"

export const useTrendsSearchQuery = () => {
    return useQuery<SearchDTO>({
        queryKey: ['trends_search'],
        queryFn: getTrendSearch,
        staleTime: 60 * 60 * 10000,
        retry: 3
    })
}

export const useSearchItemQuery = (q: string) => {
    return useQuery<SearchDTO>({
        queryKey: ['search_item', q],
        queryFn: ({ signal }) => searchItem(q, signal),
        retry: 3,
        enabled: !!q
    })
}