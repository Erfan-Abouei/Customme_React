import type SearchDTO from '@/services/dto/search.dto'
import { getHomePageStructure } from '@/services/api/homePageApi'
import { getTrendSearch } from '@/services/api/searchApi'
import { prefetchQuery } from '@/utils/prefetchQuery'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

prefetchQuery<SearchDTO>(['trends_search'], getTrendSearch, 60 * 10 * 1000)
prefetchQuery<any>(['home_page'], getHomePageStructure, 60 * 60 * 1000)

export default queryClient