import type { AxiosResponse } from "axios";
import type SearchDTO from "../dto/search.dto";

import api from "./api";

import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE";
import { showToast } from "@/utils/showToast";
import { handleError } from "./handleErrorApi";

export const getTrendSearch = async (): Promise<SearchDTO> => {
    try {
        const response: AxiosResponse<SearchDTO> = await api.get("/api/v1/autocomplete/");
        return response.data;
    } catch (error) {
        handleError(error)
        throw error
    }
};

export const searchItem = async (q: string, signal?: AbortSignal): Promise<SearchDTO> => {
    try {
        const response: AxiosResponse<SearchDTO> = await api.get("/api/v1/autocomplete/", {
            params: { q },
            signal
        });
        if (response.data.data.categories.length === 0) {
            showToast(ERROR_MESSAGES.SEARCH_NOT_FOUND, 'error')
        }
        return response.data;
    } catch (error) {
        handleError(error)
        throw error
    }
};
