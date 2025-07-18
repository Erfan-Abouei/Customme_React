import { getTrendSearch } from '@/services/api/searchApi'
import type SearchDTO from '@/services/dto/search.dto'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

queryClient.prefetchQuery<SearchDTO>({
    queryKey: ['trends_search'],
    queryFn: getTrendSearch,
    staleTime: 60 * 60 * 10000,
    retry: 3
})

export default queryClient