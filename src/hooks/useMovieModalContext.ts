import { movieModalContext } from "@/contexts/movieModalContext"
import { useContext } from "react"

export const useMovieModalContext = () => {
    const context = useContext(movieModalContext)
    if (!context) throw new Error("Error")
    return context
}