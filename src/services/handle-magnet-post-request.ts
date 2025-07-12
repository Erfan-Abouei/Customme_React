import api from "./api"

import { type AxiosResponse } from "axios"
import type { MagnetPostsResponse } from "./dto/magnet-post/magnet-post.dto"

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE"
import { showToast } from "@/utils/showToast"
import type { CommentsResponse } from "./dto/magnet-post/magnet-post-comments.dto"

export const getMagnetPosts = async (retryCount: number = 3): Promise<MagnetPostsResponse | null> => {
    for (let i = 0; i < retryCount; i++) {
        try {
            const response: AxiosResponse<MagnetPostsResponse> = await api.get('/magnet/home-page/');
            return response.data;
        } catch (error) {
            if (i === retryCount - 1) {
                showToast(ERROR_MESSAGES.SERVER_ERROR, 'error');
                return null;
            }
        }
    }
    return null
};

export const getPostComments = async (postId: number, page: number = 1): Promise<CommentsResponse | null> => {
    try {
        const response: AxiosResponse<any> = await api.get(`magnet/posts/${postId}/comments/?postId=${postId}&page=${page}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error');
        return null;
    }
}