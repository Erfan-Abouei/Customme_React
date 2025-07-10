import { useDispatch, useSelector } from "react-redux"
import MagnetPostCardLoader from "../shared/MagnetPostCardLoader"
import { type AppDispatch, type RootState } from "@/store"
import { useOneTime } from "@/hooks/useOneTime"
import { loadPost } from "@/reducers/magnet/magnetReducer"
import type { Post } from "@/services/dto/magnet-post.dto"
import MagnetPostCard from "../shared/MagnetPostCard"


const MainMenu = () => {
    const { isLoadingMagnets, magnets } = useSelector((state: RootState) => state.magnetPosts)
    const dispatch = useDispatch<AppDispatch>()
    useOneTime(() => dispatch(loadPost()))

    const magnetPostCardLoader = Array.from({ length: 11 }).map((_, i: number) => <MagnetPostCardLoader key={i} />)
    const magnetPosts = magnets.map((post: Post) => <MagnetPostCard key={post.id} {...post} />)
    return (
        <section className="magnet-section my-8 max-md:my-4">
            <div className="container">
                <div className="flex items-center gap-x-6 overflow-auto page__scroll--hidden">
                    {isLoadingMagnets || magnets.length === 0 ? magnetPostCardLoader : magnetPosts}

                </div>
            </div>
        </section>
    )
}

export default MainMenu