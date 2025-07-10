import type { ImageWithPlaceholderProps } from "@/types/components-props.types";
import { useState } from "react";
import Logo from '/Logo.svg';

const ImageWithPlaceholder = ({
    placeHolderURL = Logo,
    resultImageURL,
    placeHolderClass = "size-full object-cover rounded-full grayscale",
    resultImageClass = "size-full object-cover rounded-full",
}: ImageWithPlaceholderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative w-full h-full">
            <img
                src={placeHolderURL}
                alt="Placeholder"
                className={`${placeHolderClass} absolute inset-0 transition-opacity duration-300 ${!isLoading ? "opacity-0" : "opacity-100"}`}
            />
            <img
                loading="lazy"
                src={resultImageURL}
                alt="Result"
                className={`${resultImageClass} transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                onLoad={handleImageLoad}
                onError={() => setIsLoading(false)}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
