import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlay } from "react-icons/hi2";
import MovieModalTopSection from "./MovieModalTopSection";
import MovieModalProgress from './MovieModalProgress';
import MovieModalBottomSection from './MovieModalBottomSection';

const MovieModal = () => {
    const videoElement = useRef<HTMLVideoElement>(null);
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [progressBarNumber, setProgressBarNumber] = useState<number>(0);

    // Update the currentTime as the video plays
    const handleTimeUpdate = (): void => {
        if (videoElement.current) {
            const current = videoElement.current.currentTime;
            const durationValue = videoElement.current.duration;
            setCurrentTime(current);
            setDuration(durationValue);
        }
    };

    // Handle the click event on the progress bar to seek the video
    const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const progressBar = e.currentTarget;

        const clickPosition = e.clientX - progressBar.getBoundingClientRect().right;
        const newTime = (Math.abs(clickPosition) / progressBar.offsetWidth) * duration;

        if (videoElement.current) {
            videoElement.current.currentTime = newTime;
        }
    };

    // Update the progress bar whenever currentTime or duration changes
    useEffect(() => {
        if (duration > 0) {
            setProgressBarNumber((currentTime / duration) * 100);
        }
    }, [currentTime, duration]);

    // Toggle play/pause
    const togglePlay = () => {
        if (isPlay) {
            videoElement.current?.pause();
        } else {
            videoElement.current?.play();
        }
        setIsPlay(!isPlay);
    };

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
            <MovieModalBottomSection />

            {/* Video */}
            <div className="absolute inset-0 size-full">
                <video
                    ref={videoElement}
                    src="/video1.mp4"
                    autoPlay={isPlay}
                    loop
                    muted={false}
                    playsInline
                    className="aspect-video size-full object-cover"
                    onTimeUpdate={handleTimeUpdate}
                ></video>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 size-full movie-modal__content--overlay"></div>

            {/* ProgressBar */}
            <MovieModalProgress onClick={handleSeek} data={progressBarNumber} />

            {/* Play Button */}
            {!isPlay && (<div className="absolute inset-0 m-auto z-10 flex items-center justify-center">
                <HiPlay
                    onClick={togglePlay}
                    className="cursor-pointer text-white size-20"
                />
            </div>)}
        </motion.div>
    );
};

export default MovieModal;
