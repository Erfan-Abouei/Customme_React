import { useQuery } from "@tanstack/react-query"
import { getUserData } from "../api/userData"

export const useUserData = () => {
    return useQuery({
        queryKey: ['user_data'],
        queryFn: getUserData
    })
}