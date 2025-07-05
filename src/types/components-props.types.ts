export type LogoComponentProps = {
    customClass: string
    gap?: number
    showLogoType?: boolean
    showLogo?: boolean
    LogoClass?: string
    LogoTypeClass?: string
}

export type SearchBarProp = {
    searchValue: string
}

export type SearchItemProp = {
    keyword: string
}

export type SearchResultSectionProp = SearchBarProp
export type RecentlySearchSectionProps = SearchBarProp