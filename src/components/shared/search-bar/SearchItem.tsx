import type { SearchItemProp } from "@/types/components-props.types"

const SearchItem = ({ keyword }: SearchItemProp) => {
    return (
        <div className="cursor-pointer h-6 px-4 rounded-lg bg-gray-200 flex items-center justify-center text-gray-950 text-custom font-dana">
            <span>{keyword}</span>
        </div>
        
    )
}

export default SearchItem