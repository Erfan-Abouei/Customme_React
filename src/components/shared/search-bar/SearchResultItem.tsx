import type { CategoryItem } from "@/services/dto/search.dto";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchResultItem = (data: CategoryItem) => {
    return (
        <div className="cursor-pointer group flex flex-col gap-y-2 items-start">
            {/* Auto Complete Title */}
            <div className="flex items-center gap-x-1">
                <HiMagnifyingGlass className="size-4 text-gray-700 transition-colors group-hover:text-primary" />
                <span className="text-custom text-gray-950 font-iran-regular">{data.keyword}</span>
            </div>
            {/* Category Name */}
            <span className="mr-5 text-custom font-iran-regular text-gray-700">در دسته <span className="text-primary">{data.category.title_fa}</span></span>
        </div>
    )
}

export default SearchResultItem