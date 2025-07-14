import type { Post } from "@/services/dto/magnet-post/magnet-post.dto"

import MagnetPostCardLoader from "../shared/magnet-post/MagnetPostCardLoader"
import MagnetPostCard from "../shared/magnet-post/MagnetPostCard"
import { useState } from "react"
import { useLocationHash } from "@/hooks/useLocationHash"
import MovieModal from "../shared/magnet-post/MovieModal"
import MovieModalProvider from "@/contexts/movieModalContext"
import { useMagnetPostsQuery } from "@/services/query/magnetPostsQueries"


const MainMenu = () => {
    const { data, isLoading: isLoadingMagnets } = useMagnetPostsQuery();
    const magnets = Array.isArray(data?.data) ? [] : data?.data.posts ?? [];

    const [isShowMovieModal, setIsShowMovieModal] = useState<boolean>(false);

    const handleMovieModalVisibility = () => setIsShowMovieModal(location.hash === '#mv');
    useLocationHash(handleMovieModalVisibility);

    const magnetPostCardLoader = Array.from({ length: 11 }).map((_, i: number) => <MagnetPostCardLoader key={i} />);
    const magnetPosts = magnets.map((post: Post) => <MagnetPostCard key={post.id} {...post} />);

    return (
        (magnets.length > 0 || isLoadingMagnets) && (
            <section className="magnet-section my-8 max-md:my-4">
                <div className="container">
                    <div className="flex items-center gap-x-6 overflow-auto page__scroll--hidden">
                        {isLoadingMagnets ? magnetPostCardLoader : magnetPosts}
                    </div>
                </div>
                {isShowMovieModal && (
                    <MovieModalProvider>
                        <MovieModal />
                    </MovieModalProvider>
                )}
            </section>
        )
    );
};

export default MainMenu