import type { Post } from "@/services/dto/magnet-post/magnet-post.dto"

import { useMagnetPostsQuery } from "@/services/query/magnetPostsQueries"
import MagnetPostCardLoader from "../shared/magnet-post/MagnetPostCardLoader"
import MagnetPostCard from "../shared/magnet-post/MagnetPostCard"
import MovieModal from "../shared/magnet-post/MovieModal"
import Modal from "../shared/Modal"


const MainMenu = () => {
    const { data, isLoading: isLoadingMagnets } = useMagnetPostsQuery();
    const magnets = Array.isArray(data?.data) ? [] : data?.data?.posts ?? [];
    const magnetPostCardLoader = Array.from({ length: 11 }).map((_, i: number) => <MagnetPostCardLoader key={i} />);
    const magnetPosts = magnets.map((post: Post) => <MagnetPostCard key={post.id} {...post} />);

    return (
        (magnets.length > 0 || isLoadingMagnets) && (
            <section className="magnet-section mt-8 max-md:mt-4">
                <div className="container">
                    <div className="flex items-center gap-x-6 max-md:gap-x-4 overflow-auto page__scroll--hidden">
                        {isLoadingMagnets ? magnetPostCardLoader : magnetPosts}
                    </div>
                </div>
                <Modal.Content modalName="movie-modal">
                    <MovieModal />
                </Modal.Content>
            </section>
        )
    );
};

export default MainMenu