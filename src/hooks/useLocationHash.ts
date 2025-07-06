import { useEffect } from "react"

export const useLocationHash = (eventHandlerFunction: () => void) => {
    useEffect(() => {
        eventHandlerFunction()
        window.addEventListener("hashchange", eventHandlerFunction);
        return () => {
            window.removeEventListener("hashchange", eventHandlerFunction);
        };
    }, []);
}