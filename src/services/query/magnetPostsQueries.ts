import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getMagnetPosts, getPostComments } from "../api/magnetPostApi"
import type { MagnetPostsResponse } from "../dto/magnet-post/magnet-post.dto"
import type { CommentsResponse } from "../dto/magnet-post/magnet-post-comments.dto"

export const useMagnetPostsQuery = () => {
    return useQuery<MagnetPostsResponse>({
        queryKey: ['magnet_posts'],
        queryFn: getMagnetPosts,
        staleTime: 10 * 60 * 10000,
        retry: 3
    })
}


export const usePostCommentsQuery = (postId: number) => {
    return useInfiniteQuery<CommentsResponse>({
        queryKey: ['magnet_post_comments', postId],
        queryFn: ({ pageParam = 1 }) => getPostComments(postId, pageParam as number),
        getNextPageParam: (lastPage) => {
            if (
                lastPage?.status !== 200 ||
                !lastPage.data ||
                !lastPage.data.pager
            ) {
                return undefined;
            }

            const current = lastPage.data.pager.current_page;
            const total = lastPage.data.pager.total_pages;

            return current < total ? current + 1 : undefined;
        },
        initialPageParam: 1
    });
};