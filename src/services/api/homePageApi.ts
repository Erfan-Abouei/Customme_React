import type { AxiosResponse } from "axios"
import api from "./api"
import { handleError } from "./handleErrorApi"

export const getHomePageStructure = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await api.get('v2')
        return response.data
    } catch (error) {
        handleError(error)
        throw error
    }
}