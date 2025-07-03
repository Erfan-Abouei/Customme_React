import { useEffect } from "react"

const baseTitle: string = "کاستومی ⭕"

export const usePageTitle = (pageTitle: string) => {
    useEffect(() => {
        document.title = `${baseTitle} | ${pageTitle}`
    }, [])
}