import type SearchDTO from "@/services/dto/search.dto";
import type { CategoryItem } from "@/services/dto/search.dto";
import type { SearchResultSectionProp } from "@/types/components-props.types";

import { searchItem } from "@/services/handle-search-request";
import { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import SearchResultItemLoader from "./SearchResultItemLoader";

const SearchResultSection = ({ searchValue }: SearchResultSectionProp) => {
    const [isLoadingAutoComplete, setIsLoadingAutoComplete] = useState(false);
    const [autoComplete, setAutoComplete] = useState<SearchDTO | null>(null);

    useEffect(() => {
        if (!searchValue || searchValue.trim().length === 0) {
            setAutoComplete(null);
            return;
        }

        const controller = new AbortController();

        const fetchAutoComplete = async () => {
            setIsLoadingAutoComplete(true)
            const data = await searchItem(searchValue, controller.signal);
            setAutoComplete(data);
            setIsLoadingAutoComplete(false)
        };

        const timeout = setTimeout(fetchAutoComplete, 500);

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [searchValue]);

    const autoCompleteCategoryTitle = autoComplete?.data?.advance_links?.[0]?.category?.title_fa || '';
    const autoCompleteItems = Array.isArray(autoComplete?.data?.categories)
        ? autoComplete.data.categories.map((category: CategoryItem) => (
            <SearchResultItem key={category.category.id} {...category} />
        ))
        : [];
    const autoCompleteLoader = Array.from({ length: 3 }).map((_, i) => <SearchResultItemLoader key={i} />)
    const isShowResult = !isLoadingAutoComplete && autoComplete && autoCompleteCategoryTitle
    return (
        <>
            {isShowResult && (<div className="pb-8 border-b border-gray-400">
                {!isLoadingAutoComplete && (
                    <span className="block mb-6 text-custom font-iran-regular text-black">
                        همه کالا های {autoCompleteCategoryTitle}
                    </span>
                )}
                <div className="flex flex-col gap-y-6">
                    {autoCompleteItems}
                </div>
            </div>)}
            {isLoadingAutoComplete && (<div className="pb-8 border-b border-gray-500 flex flex-col gap-y-6">
                {autoCompleteLoader}
            </div>)}
        </>
    );
};

export default SearchResultSection;
