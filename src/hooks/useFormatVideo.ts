import { useEffect } from "react";
import Hls from "hls.js";

const useFormatVideo = (url: string | undefined, videoRef: React.RefObject<HTMLVideoElement | null>) => {
    useEffect(() => {
        if (!url || typeof url !== "string" || url.trim() === "") return

        const video = videoRef.current;
        if (!video) return;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = url;
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);

            return () => {
                hls.destroy();
            };
        }
    }, [url, videoRef]);
};

export default useFormatVideo;
