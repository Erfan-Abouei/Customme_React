import type { ImageWithPlaceholderProps } from "@/types/components-props.types";
import { useState } from "react";
import Logo from '/Logo.svg'

const ImageWithPlaceholder = ({
    placeHolderURL = Logo,
    resultImageURL,
    placeHolderClass = "size-full object-cover rounded-full grayscale",
    resultImageClass = "size-full object-cover rounded-full",
}: ImageWithPlaceholderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (e.currentTarget.complete) {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && (
                <img
                    src={placeHolderURL}
                    alt="Placeholder"
                    className={placeHolderClass}
                />
            )}
            <img
                loading="lazy"
                src={resultImageURL}
                alt="Result"
                className={`${resultImageClass} ${isLoading ? "hidden" : "block"}`}
                onLoad={handleImageLoad}
                onError={() => setIsLoading(false)}
            />
        </>
    );
};

export default ImageWithPlaceholder