const CommentLoader = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-1">
                    <div className="rounded-full size-5 bg-gray-200 animate-pulse"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-10 h-3 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
                <div className="w-7.5 h-3 rounded-md bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-y-1">
                <div className="mr-6 rounded-md h-3 bg-gray-200"></div>
                <div className="mr-6 w-[calc(100%-100px)] rounded-md h-3 bg-gray-200"></div>
            </div>
        </div>
    )
}

export default CommentLoader