const SectionTitle = ({icon, title}) => {
    return (
        <div className="flex items-center max-md:justify-between md:gap-x-4">
            {/* Title */}
            <div className="shrink-0 flex items-center gap-x-2 text-gray-950 font-iran-bold !tracking-widest text-2xl max-md:text-sm">
                <span className="size-10 max-md:hidden">
                    {icon}
                </span>
                <span className="">{title}</span>
            </div>
            {/* Line */}
            <div className="max-md:hidden grow h-px bg-gray-400"></div>
        </div>
    )
} 

export default SectionTitle