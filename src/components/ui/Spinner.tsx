const Spinner = () => {
    return (
        <div className="flex gap-1">
            <div className="size-2 rounded-full bg-white animate-bounce"></div>
            <div
                className="size-2 rounded-full bg-white animate-bounce [animation-delay:-.3s]"
            ></div>
            <div
                className="size-2 rounded-full bg-white animate-bounce [animation-delay:-.5s]"
            ></div>
        </div>
    )
}

export default Spinner