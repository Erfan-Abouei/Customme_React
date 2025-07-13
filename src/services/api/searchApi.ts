import type { AxiosResponse } from "axios";
import type SearchDTO from "./dto/search.dto";

import api from "./api";

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE";
import { showToast } from "@/utils/showToast";

export const getTrendSearch = async (): Promise<SearchDTO | null> => {
    try {
        const response: AxiosResponse<SearchDTO> = await api.get("/autocomplete/");
        return response.data;
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error')
        if (error instanceof Error) {
            return new Error(error.message)
        }
    }
};

export const searchItem = async (q: string, signal?: AbortSignal): Promise<SearchDTO | null> => {
    try {
        const response: AxiosResponse<SearchDTO> = await api.get("/autocomplete/", {
            params: { q },
            signal
        });
        if (response.data.data.categories.length === 0) {
            showToast(ERROR_MESSAGES.SEARCH_NOT_FOUND, 'error')
        }
        return response.data;
    } catch (error) {
        showToast(ERROR_MESSAGES.SERVER_ERROR, 'error')
        return null;
    }
};
