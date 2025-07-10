import api from "./api"

import { type AxiosResponse } from "axios"
import type { MagnetPosts } from "./dto/magnet-post.dto"

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE"
import { showToast } from "@/utils/showToast"

export const getMagnetPosts = async (retryCount: number = 3): Promise<MagnetPosts | null> => {
    for (let i = 0; i < retryCount; i++) {
        try {
            const response: AxiosResponse<MagnetPosts> = await api.get('/magnet/home-page/');
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