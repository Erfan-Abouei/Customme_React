import { useEffect } from "react"

export const useOneTime = (handlerFunction: () => void) => {
    useEffect(() => {
        handlerFunction()
    }, [])
}
