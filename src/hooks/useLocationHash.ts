import { useEffect } from "react"

export const useLocationHash = (eventHandlerFunction: () => void) => {
    useEffect(() => {
        eventHandlerFunction()
    }, [window.location.hash])
}