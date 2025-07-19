import { useQuery } from "@tanstack/react-query"
import { getBestSellingProduct } from "../api/bestSellingApi"

export const useBestSellingQuery = () => {
    return useQuery({
        queryKey: ['best_selling'],
        queryFn: getBestSellingProduct,
        staleTime: 60 * 10 * 1000,
        retry: 3
    })
}