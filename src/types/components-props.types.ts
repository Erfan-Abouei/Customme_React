export type LogoComponentProps = {
    customLogoClass?: string
    customLogoTypeClass?: string
    customClass?: string
}

export type SearchBarProp = {
    searchValue: string
}

export type SearchItemProp = {
    keyword: string
}

export type SearchResultSectionProp = SearchBarProp
export type RecentlySearchSectionProps = SearchBarProp

export type AccountButtonProps = {
    children: React.ReactNode,
    onClick?: () => void
}

export type DesktopSearchBarProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export type NotFoundTextProp = {
    message: string
}

export type PrimaryButtonProps = {
    onClick?: () => void
    customClass?: string
    children: React.ReactNode
}

export type ImageWithPlaceholderProps = {
    placeHolderURL?: string;
    resultImageURL: string;
    placeHolderClass?: string;
    resultImageClass?: string;
}