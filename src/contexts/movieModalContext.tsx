import type { Post } from "@/services/dto/magnet-post/magnet-post.dto";
import { useState, createContext } from "react";

interface MagnetPostsProviderType {
    isOpenCommentsSection: boolean
    setIsOpenCommentsSection: React.Dispatch<React.SetStateAction<boolean>>
    selectedMagnet: Post | undefined,
    setSelectedMagnet: React.Dispatch<React.SetStateAction<Post | undefined>>
}

const movieModalContext = createContext<MagnetPostsProviderType | null>(null)

const MovieModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpenCommentsSection, setIsOpenCommentsSection] = useState(false)
    const [selectedMagnet, setSelectedMagnet] = useState<Post | undefined>()
    return (
        <movieModalContext.Provider value={{
            isOpenCommentsSection,
            setIsOpenCommentsSection,
            selectedMagnet,
            setSelectedMagnet
        }}>
            {children}
        </movieModalContext.Provider>
    )
}

export { movieModalContext }
export default MovieModalProvider