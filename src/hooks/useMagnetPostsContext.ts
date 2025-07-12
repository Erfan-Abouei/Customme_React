import { magnetPostsContext } from "@/contexts/magnetPostsContext"
import { useContext } from "react"

export const useMagnetPostsContext = () => {
    const context = useContext(magnetPostsContext)
    return context
}