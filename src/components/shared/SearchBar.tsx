import clsx from 'clsx';

type SearchBarProp = {
    isOpen: boolean;
};

const SearchBar = ({ isOpen }: SearchBarProp) => {
    return (
        <div
            className={clsx(
                "absolute top-0 left-0 right-0 w-full h-100 bg-gray-100 rounded-2xl transition-all duration-300",
                {
                    'search-bar--show': isOpen,
                    'search-bar--close': !isOpen,
                }
            )}
        ></div>
    );
};

export default SearchBar