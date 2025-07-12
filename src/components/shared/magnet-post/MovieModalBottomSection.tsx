import { memo } from "react"
import PostInformationSection from "./PostInformationSection"
import PostActionsSection from "./PostActionsSection"

const MovieModalBottomSection = () => {
    return (
        <div className="z-10 flex items-end justify-between gap-x-8">
            <PostInformationSection />
            <PostActionsSection />
        </div>
    )
}

export default memo(MovieModalBottomSection)