import { magnetSectionContext } from "@/contexts/magnetSectionContext"
import { useContext } from "react"

export const useMagnetSectionContext = () => {
    const context = useContext(magnetSectionContext)
    if (!context) throw new Error("Error")
    return context
}