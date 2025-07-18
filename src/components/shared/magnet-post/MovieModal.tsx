import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlay } from "react-icons/hi2";
import clsx from 'clsx';

import MovieModalTopSection from "./MovieModalTopSection";
import MovieModalBottomSection from './MovieModalBottomSection';
import MovieCommentsModal from './comments/MovieCommentsModal';
import { useMagnetSectionContext } from '@/hooks/contexts-hooks/useMagnetSectionContext';
import useFormatVideo from '@/hooks/useFormatVideo';
import LogoComponent from '@/components/ui/LogoComponent';

const MovieModal = () => {
    const { selectedMagnet } = useMagnetSectionContext()

    // Redux & Context
    const { isOpenCommentsSection, setIsOpenCommentsSection } = useMagnetSectionContext();

    // Refs & States
    const videoElement = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressBarNumber, setProgressBarNumber] = useState(0);

    // Format video source with HLS support
    useFormatVideo(selectedMagnet?.media?.[0]?.url ?? '', videoElement);

    // Handlers
    const handleTimeUpdate = () => {
        if (!videoElement.current) return;

        setCurrentTime(videoElement.current.currentTime);
        setDuration(videoElement.current.duration);
    };

    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!videoElement.current || duration === 0) return;

        const progressBar = e.currentTarget;
        const clickPosition = Math.abs(e.clientX - progressBar.getBoundingClientRect().right)
        const newTime = (clickPosition / progressBar.offsetWidth) * duration;
        videoElement.current.currentTime = newTime;
    }, [duration]);

    const togglePlay = useCallback(() => {
        if (!videoElement.current) return;

        if (isPlay) {
            videoElement.current.pause();
        } else {
            videoElement.current.play();
        }
        setIsPlay(prev => !prev);
    }, [isPlay]);

    // Update progress bar percentage
    useEffect(() => {
        if (duration > 0) {
            setProgressBarNumber((currentTime / duration) * 100);
        }
    }, [currentTime, duration])

    return (
        <div
            className="relative overflow-hidden max-md:p-2 p-3.5 pb-4 max-md:pb-4 md:min-h-140 min-h-screen max-md:w-screen w-80 md:rounded-2xl flex flex-col justify-between"
        >
            {/* Movie Sections */}
            <MovieModalTopSection />
            <MovieModalBottomSection />

            {/* Video */}
            <div className="absolute inset-0 size-full">
                <video
                    ref={videoElement}
                    src={selectedMagnet?.media?.[0]?.url ?? '/video1.mp4'}
                    loop
                    playsInline
                    className="aspect-video size-full object-cover"
                    onLoadedData={() => setIsLoaded(true)}
                    onTimeUpdate={handleTimeUpdate}
                />
            </div>

            {/* Loading Overlay */}
            {!isLoaded && (
                <div className="absolute inset-0 size-full flex items-center justify-center flex-col gap-y-3 bg-black z-30 text-white">
                    <LogoComponent customLogoTypeClass="hidden" customLogoClass="size-10" />
                    <span className="text-white text-custom font-iran-bold">صبر کنید</span>
                </div>
            )}

            {/* Play/Pause Overlay */}
            <div
                onClick={togglePlay}
                className="absolute inset-0 size-full movie-modal__content--overlay"
            />

            {/* Comments Overlay */}
            <div
                onClick={() => setIsOpenCommentsSection(false)}
                className={clsx(
                    'transition-all z-20 absolute inset-0 size-full bg-black/50',
                    {
                        'visible opacity-100': isOpenCommentsSection,
                        'invisible opacity-0': !isOpenCommentsSection,
                    }
                )}
            />

            {/* Progress Bar */}
            <div
                onClick={handleSeek}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 cursor-pointer"
            >
                <div
                    className="transition-all h-full bg-primary"
                    style={{ width: `${progressBarNumber}%` }}
                />
            </div>

            {/* Play Button */}
            {!isPlay && (
                <div className="absolute inset-0 m-auto z-10 flex items-center justify-center">
                    <HiPlay
                        onClick={togglePlay}
                        className="cursor-pointer text-white size-20"
                    />
                </div>
            )}

            {/* Comments Modal */}
            <MovieCommentsModal />
        </div>
    );
};

export default MovieModal;
