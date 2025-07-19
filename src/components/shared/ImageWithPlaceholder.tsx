import type { ImageWithPlaceholderProps } from "@/types/components-props.types";
import { useState } from "react";
import clsx from "clsx";

const ImageWithPlaceholder = ({
    placeHolderURL = '/images/Image-Place-holder.png',
    resultImageURL,
    placeHolderClass = "size-full rounded-full object-cover grayscale",
    resultImageClass = "size-full rounded-full object-cover",
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
                className={clsx(
                    "absolute inset-0 transition-opacity duration-300",
                    !isLoading ? "opacity-0" : "opacity-100",
                    placeHolderClass
                )}

            />
            <img
                loading="lazy"
                src={resultImageURL}
                alt="Result"
                className={clsx(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    resultImageClass
                )}
                onLoad={handleImageLoad}
                onError={() => setIsLoading(true)}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
