export const getRecentlySearchFromLocalStorage = (): string[] => {
    const recentlySearchData = localStorage.getItem('recentlySearch')
    return recentlySearchData ? JSON.parse(recentlySearchData) : []
}

export const addRecentlySearch = (data: string) => {
    const recentlySearch = getRecentlySearchFromLocalStorage()

    const isExist = recentlySearch.some((search) => search === data)

    if (isExist) return

    const newRecentlySearch = [...recentlySearch, data]
    localStorage.setItem('recentlySearch', JSON.stringify(newRecentlySearch))
}

export const removeRecentlySearch = () => {
    localStorage.setItem('recentlySearch', JSON.stringify([]))
}