import api from "./api"

import { type AxiosResponse } from "axios"
import type { MagnetPosts } from "./dto/magnet-post.dto"

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE"
import { showToast } from "@/utils/showToast"

export const getMagnetPosts = async (): Promise<MagnetPosts | null> => {
    try {
        const response: AxiosResponse<MagnetPosts> = await api.get('/magnet/home-page/')
        return response.data
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error')
        return null;
    }
} 