import { loginPageContext } from "@/contexts/loginPageContext"
import { useContext } from "react"

export const useLoginPageContext = () => {
    const context = useContext(loginPageContext)
    if (!context) throw new Error("Error")
    return context
}