import type { CategoryItem } from "@/services/dto/search.dto";
import type { SearchResultSectionProp } from "@/types/components-props.types";

import SearchResultItem from "./SearchResultItem";
import SearchResultItemLoader from "./SearchResultItemLoader";
import { useSearchItemQuery } from "@/services/query/searchQueries";
import { useDebounce } from "@/hooks/useDebounce";

const SearchResultSection = ({ searchValue }: SearchResultSectionProp) => {
    const [debouncedSearchValue] = useDebounce(searchValue, 500)
    const { data: autoComplete, isLoading: isLoadingAutoComplete } = useSearchItemQuery(debouncedSearchValue)

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
                    <span className="block mb-6 text-custom font-dana text-black">
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
