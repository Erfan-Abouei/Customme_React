import { useQuery } from "@tanstack/react-query"
import { getHomePageStructure } from "../api/homePageApi"

export const useHomePageQuery = () => {
    return useQuery({
        queryKey: ['home_page'],
        queryFn: getHomePageStructure,
        staleTime: 10 * 60 * 10000,
        retry: 3
    })
}