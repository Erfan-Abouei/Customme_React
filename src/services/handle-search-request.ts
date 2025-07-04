import type { AxiosResponse } from "axios";
import api from "./api";
import type SearchDTO from "./dto/search.dto"

export const getTrendSearch = async (): Promise<SearchDTO | null> => {
    try {
        const response: AxiosResponse<SearchDTO> = await api.get("/autocomplete/");
        return response.data;
    } catch (error) {
        return null;
    }
};

export const searchItem = async (query: string): Promise<any> => {
    try {
        const response = await api.get(`/search/?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        return null;
    }
};
