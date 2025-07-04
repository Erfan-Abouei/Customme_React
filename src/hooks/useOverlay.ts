import { OverlayContext } from "@/contexts/OverlayContext"
import { useContext } from "react"

export const useOverlay = () => {
    const context = useContext(OverlayContext)
    if (!context) throw new Error('useOverlay must be used within an OverlayProvider')

    return context
}