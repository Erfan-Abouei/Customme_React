import type SearchDTO from "@/services/dto/search.dto";
import type { CategoryItem } from "@/services/dto/search.dto";
import type { SearchResultSectionProp } from "@/types/components-props.types";

import { searchItem } from "@/services/handle-search-request";
import { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import SearchResultItemLoader from "./SearchResultItemLoader";
import toast from "react-hot-toast";

const SearchResultSection = ({ searchValue }: SearchResultSectionProp) => {
    const [isLoadingAutoComplete, setIsLoadingAutoComplete] = useState(false);
    const [autoComplete, setAutoComplete] = useState<SearchDTO | null>(null);

    useEffect(() => {
        if (!searchValue) {
            setAutoComplete(null);
            return;
        }

        const controller = new AbortController();

        const fetchAutoComplete = async () => {
            try {
                setIsLoadingAutoComplete(true);
                const data = await searchItem(searchValue, controller.signal);
                setAutoComplete(data);
            } catch (error) {
                toast.error('دریافت اطلاعات با مشکل مواجه شد')
            } finally {
                setIsLoadingAutoComplete(false);
            }
        };

        const timeout = setTimeout(fetchAutoComplete, 1000);

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [searchValue]);

    const autoCompleteCategoryTitle = autoComplete?.data?.advance_links?.[0]?.category?.title_fa;
    const autoCompleteItems = autoComplete?.data?.categories.map((category: CategoryItem) => (
        <SearchResultItem key={category.category.id} {...category} />
    ));
    const autoCompleteLoader = Array.from({ length: 4 }).map((_, i) => <SearchResultItemLoader key={i} />)


    if (!searchValue || !autoComplete || !autoCompleteCategoryTitle) return null;

    return (
        <div className="pb-8 border-b border-gray-400 flex flex-col gap-y-6">
            {!isLoadingAutoComplete && (
                <span className="text-custom font-iran-regular text-black">
                    همه کالا های {autoCompleteCategoryTitle}
                </span>
            )}
            <div className="flex flex-col gap-y-6">
                {isLoadingAutoComplete ? autoCompleteLoader : autoCompleteItems}
            </div>
        </div>
    );
};

export default SearchResultSection;
