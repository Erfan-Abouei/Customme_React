import type { Post } from "@/services/dto/magnet-post/magnet-post.dto";
import type { ChildrenProp } from "@/types/components-props.types";
import { useState, createContext } from "react";

interface MagnetPostsProviderType {
    isOpenCommentsSection: boolean
    setIsOpenCommentsSection: React.Dispatch<React.SetStateAction<boolean>>
    selectedMagnet: Post | undefined,
    setSelectedMagnet: React.Dispatch<React.SetStateAction<Post | undefined>>
}

const magnetSectionContext = createContext<MagnetPostsProviderType | null>(null)

const MagnetSectionProvider = ({ children }: ChildrenProp) => {
    const [isOpenCommentsSection, setIsOpenCommentsSection] = useState(false)
    const [selectedMagnet, setSelectedMagnet] = useState<Post | undefined>()
    return (
        <magnetSectionContext.Provider value={{
            isOpenCommentsSection,
            setIsOpenCommentsSection,
            selectedMagnet,
            setSelectedMagnet
        }}>
            {children}
        </magnetSectionContext.Provider>
    )
}

export { magnetSectionContext }
export default MagnetSectionProvider