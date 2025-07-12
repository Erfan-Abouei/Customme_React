import { magnetPostsContext } from "@/contexts/magnetPostsContext"
import { useContext } from "react"

export const useMagnetPostsContext = () => {
    const context = useContext(magnetPostsContext)
    if (!context) throw new Error("Error")
    return context
}