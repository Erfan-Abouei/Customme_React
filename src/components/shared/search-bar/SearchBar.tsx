import type { SearchBarProp } from '@/types/components-props.types';
import SearchResultSection from './SearchResultSection';
import RecentlySearchSection from './RecentlySearchSection';
import TrendsSearchSection from './TrendsSearchSection';

const SearchBar = ({ searchValue }: SearchBarProp) => {
    return (
        <div
            className="absolute max-md:fixed max-md:w-full max-md:min-h-screen top-0 left-0 right-0 w-full bg-white rounded-2xl transition-all duration-300 search-bar--show">
            <div className="pt-18 px-6 pb-6">
                <SearchResultSection searchValue={searchValue} />
                <RecentlySearchSection searchValue={searchValue} />
                <TrendsSearchSection />
            </div>

        </div >
    );
};

export default SearchBar