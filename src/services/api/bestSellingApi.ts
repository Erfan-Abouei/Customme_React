import type { BestSellingDTO } from "../dto/best-selling.dto"
import type { AxiosResponse } from "axios"
import { handleError } from "./handleErrorApi"
import api from "./api"

// In the future, a category filter might be added to this method.
export const getBestSellingProduct = async (): Promise<BestSellingDTO> => {
    try {
        const response: AxiosResponse<BestSellingDTO> = await api.get('api/v1/best-selling/')
        return response.data
    } catch (error) {
        handleError(error)
        throw error
    }
}