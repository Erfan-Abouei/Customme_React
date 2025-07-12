import { useState, createContext } from "react";

interface MagnetPostsProviderType {
    isOpenCommentsSection: boolean
    setIsOpenCommentsSection: React.Dispatch<React.SetStateAction<boolean>>
}

const magnetPostsContext = createContext<MagnetPostsProviderType | null>(null)

const MagnetPostsProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpenCommentsSection, setIsOpenCommentsSection] = useState(false)

    return (
        <magnetPostsContext.Provider value={{
            isOpenCommentsSection,
            setIsOpenCommentsSection
        }}>
            {children}
        </magnetPostsContext.Provider>
    )
}

export { magnetPostsContext }
export default MagnetPostsProvider