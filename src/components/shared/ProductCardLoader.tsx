const ProductCardLoader = ({ showAddToGalleryButton }: { showAddToGalleryButton: boolean }) => {
    return (
        <div className="rounded-2xl border border-gray-500 p-4 max-md:p-3 flex flex-col items-center gap-y-4 max-md:gap-y-3">
            <div className="w-full h-64 max-md:size-24 relative rounded-md overflow-hidden bg-gray-200 animate-pulse"></div>
            <div className="w-full">
                <div className="flex items-center gap-x-1 justify-between">
                    <div className="h-6 max-md:h-4 w-6/10 bg-gray-200 animate-pulse rounded-md"></div>
                    <div className="size-6 max-md:size-4 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
                <div className="flex flex-col gap-y-1 items-start mt-2.5 max-md:mt-3">
                    <div className="h-4 max-md:h-3 w-9/10 rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 max-md:h-3 w-7/10 rounded-md bg-gray-200 animate-pulse"></div>
                </div>
                {!showAddToGalleryButton ? (
                    <div className="mt-4 max-md:mt-2 flex items-center justify-end gap-x-1">
                        <span className="bg-gray-200 rounded-md w-20 max-md:w-10 h-6 max-md:h-4 animate-pulse"></span>
                        <span className="bg-gray-200 rounded-md w-10 max-md:w-5 h-6 max-md:h-4 animate-pulse"></span>
                    </div>
                ) : (
                    <div className="bg-gray-200 animate-pulse w-full h-10 max-md:h-8.5 rounded-md max-md:mt-2 mt-4"></div>
                )}
            </div>
        </div>
    )
}

export default ProductCardLoader