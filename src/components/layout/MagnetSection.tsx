import { type AppDispatch, type RootState } from "@/store"
import type { Post } from "@/services/dto/magnet-post.dto"

import { useDispatch, useSelector } from "react-redux"
import { useOneTime } from "@/hooks/useOneTime"
import { fetchPost } from "@/reducers/magnet/magnetReducer"

import MagnetPostCardLoader from "../shared/magnet-post/MagnetPostCardLoader"
import MagnetPostCard from "../shared/magnet-post/MagnetPostCard"


const MainMenu = () => {
    const { isLoadingMagnets, magnets } = useSelector((state: RootState) => state.magnetPosts)
    const dispatch = useDispatch<AppDispatch>()
    useOneTime(() => dispatch(fetchPost()))

    const magnetPostCardLoader = Array.from({ length: 11 }).map((_, i: number) => <MagnetPostCardLoader key={i} />)
    const magnetPosts = Array.isArray(magnets) ? magnets.map((post: Post) => <MagnetPostCard key={post.id} {...post} />) : []
    return (
        magnets.length > 0 || isLoadingMagnets && (
            <section className="magnet-section my-8 max-md:my-4">
                <div className="container">
                    <div className="flex items-center gap-x-6 overflow-auto page__scroll--hidden">
                        {isLoadingMagnets ? magnetPostCardLoader : magnetPosts}
                    </div>
                </div>
            </section>
        )
    );

}

export default MainMenu