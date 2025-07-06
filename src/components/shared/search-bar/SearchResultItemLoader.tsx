const SearchResultItemLoader = () => {
    return (
        <div className="flex items-start flex-col gap-y-2">
            <div className="flex items-center gap-x-1">
                <div className="size-4 rounded-full bg-gray-200 animate-pulse rounded-md"></div>
                <div className="w-20 h-4 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div className="w-25 h-4 rounded-md bg-gray-200 animate-pulse mr-5"></div>
        </div>
    )
}

export default SearchResultItemLoader