import { useState } from "react";
import { createContext } from "vm";

const magnetPostsContext = createContext()

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