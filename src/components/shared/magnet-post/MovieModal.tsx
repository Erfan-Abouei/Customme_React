import { motion } from 'framer-motion';
import MovieModalTopSection from "./MovieModalTopSection";
import PostActionsSection from "./PostActionsSection";
import PostInformationSection from './PostInformationSection';
import MovieModalProgress from './MovieModalProgress';

const MovieModal = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 m-auto z-20 overflow-hidden max-md:p-2 p-3.5 pb-4 max-md:pb-4 md:h-140 h-full max-md:w-full w-80 md:rounded-2xl flex flex-col justify-between"
        >

            {/* Movie Top Section */}
            <MovieModalTopSection />

            {/* Movie Bottom Section */}
            <div className="z-10 flex items-end justify-between gap-x-8">
                <PostInformationSection />
                <PostActionsSection />
            </div>

            {/* Video */}
            <div className="absolute inset-0 size-full">
                <video src="/video1.mp4" autoPlay loop muted playsInline className="aspect-video size-full object-cover"></video>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 size-full movie-modal__content--overlay"></div>

            {/* ProgressBar */}
            <MovieModalProgress />
        </motion.div>
    )
}

export default MovieModal