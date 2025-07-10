const MagnetPostCardLoader = () => {
    return (
        <div className="shrink-0 w-22 flex flex-col items-center gap-y-2">
            <div className="size-21 bg-gray-200 animate-pulse rounded-full"></div>
            <div className="w-full flex flex-col gap-y-1 items-center">
                <div className="w-[calc(100%-10px)] h-3.5 rounded-md bg-gray-200 animate-pulse"></div>
                <div className="w-[calc(100%-50px)] h-3.5 rounded-md bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    )
}

export default MagnetPostCardLoader