import { useEffect, useState } from "react"

export const useDebounce: any = (value: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(timer)
    })

    return [debounceValue]
}