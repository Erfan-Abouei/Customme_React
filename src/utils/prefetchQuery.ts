import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const prefetchQuery = <T>(
    key: string[],
    fn: () => Promise<T>,
    staleTime: number,
    retry = 3
) => {
    queryClient.prefetchQuery<T>({
        queryKey: key,
        queryFn: fn,
        staleTime,
        retry,
    })
}