export type LogoComponentProps = {
    customLogoClass: string
    customLogoTypeClass: string
    customClass: string
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