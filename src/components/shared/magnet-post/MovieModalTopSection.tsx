import { memo } from "react"
import PostAuthorInfoSection from "./PostAuthorInfoSection"

const MovieModalTopSection = () => {
    return (
        <>
            {/* Movie Title */}
            < div className="z-10 flex items-center justify-between" >
                <PostAuthorInfoSection />
                {/* Follow Button */}
                < button className="transition-colors hover:bg-white/80 shrink-0 cursor-pointer text-xs h-8 px-2 rounded-md font-dana-medium bg-white" > دنبال کردن</button>
            </div >
        </>
    )
}

export default memo(MovieModalTopSection)