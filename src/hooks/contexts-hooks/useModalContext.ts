import { ModalContext } from "@/contexts/modalContext"
import { useContext } from "react"

export const useModalContext = () => {
    const context = useContext(ModalContext)
    if (!context) throw new Error("Error")
    return context
}
