import api from "./api"

import { type AxiosResponse } from "axios"
import type { CommentsResponse } from "../dto/magnet-post/magnet-post-comments.dto"
import type { MagnetPostsResponse } from "../dto/magnet-post/magnet-post.dto"

import { handleError } from "./handleErrorApi"

export const getMagnetPosts = async (): Promise<MagnetPostsResponse> => {
    try {
        const response: AxiosResponse<MagnetPostsResponse> = await api.get('/api/v1/magnet/home-page/');
        return response.data;
    } catch (error) {
        handleError(error)
        throw error
    }
}

export const getPostComments = async (postId: number, page: number = 1): Promise<CommentsResponse> => {
    try {
        const response: AxiosResponse<CommentsResponse> = await api.get(`/api/v1/magnet/posts/${postId}/comments/?postId=${postId}&page=${page}`)
        return response.data
    } catch (error) {
        handleError(error)
        throw error
    }
}