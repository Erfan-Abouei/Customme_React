import api from "./api"

import { type AxiosResponse } from "axios"
import type { MagnetPostsResponse } from "../dto/magnet-post/magnet-post.dto"

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE"
import { showToast } from "@/utils/showToast"
import type { CommentsResponse } from "../dto/magnet-post/magnet-post-comments.dto"

export const getMagnetPosts = async (): Promise<MagnetPostsResponse> => {
    try {
        const response: AxiosResponse<MagnetPostsResponse> = await api.get('/magnet/home-page/');
        return response.data;
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error');
        throw error
    }
}

export const getPostComments = async (postId: number, page: number = 1): Promise<CommentsResponse> => {
    try {
        const response: AxiosResponse<CommentsResponse> = await api.get(`magnet/posts/${postId}/comments/?postId=${postId}&page=${page}`)
        return response.data
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error');
        throw error
    }
}