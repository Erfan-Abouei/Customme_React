import { useState, createContext } from "react";

interface MagnetPostsProviderType {
    isOpenCommentsSection: boolean
    setIsOpenCommentsSection: React.Dispatch<React.SetStateAction<boolean>>
}

const movieModalContext = createContext<MagnetPostsProviderType | null>(null)

const MovieModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpenCommentsSection, setIsOpenCommentsSection] = useState(false)

    return (
        <movieModalContext.Provider value={{
            isOpenCommentsSection,
            setIsOpenCommentsSection
        }}>
            {children}
        </movieModalContext.Provider>
    )
}

export { movieModalContext }
export default MovieModalProvider