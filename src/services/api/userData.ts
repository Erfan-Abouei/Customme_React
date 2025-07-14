import api from "./api"

export const getUserData = async () => {
    try {
        const response = await api.get('/user/init/', {
            withCredentials: true
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}