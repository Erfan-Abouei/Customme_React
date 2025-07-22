import type { Color, Product } from "@/services/dto/best-selling.dto"
import type { CategoryData } from "@/services/dto/home-page.dto"
import type { Comment, CommentReply } from "@/services/dto/magnet-post/magnet-post-comments.dto"

export type ChildrenProp = {
    children: React.ReactNode
}

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
    toPath: string
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

export type PostActionsButtonProps = {
    children: React.ReactNode,
    onClick?: () => void
}

export type CommentBoxProp = {
    customClass?: string,
    commentData: Comment | CommentReply
}

export type LoginFormProp = {
    setLoginStep: React.Dispatch<React.SetStateAction<1 | 2>>
}

export type SpinnerProps = {
    customClass: string
}

export type InputErrorProp = {
    errorMessage: string
}

export type SectionTitleProps = {
    title: string,
    icon: React.ReactElement,
    leftItem?: React.ReactElement
}

export type CategoriesContainerProps = {
    isLoading: boolean,
    productCategoriesData: CategoryData[]
}

export type NavigationBarLinkProps = {
    title: string,
    icon: React.ReactElement,
    activeIcon: React.ReactElement,
    path: string
}

export type ProductCardTitleProps = {
    title: string,
    productId: string
}

export type BestProductSellContainerProps = {
    productsData: Product[]
    isLoading: boolean
}

export type ProductCardImageProps = {
    imageUrl: string,
    colors?: Color[],
}

export type ProductCardProps = {
    children: React.ReactNode,
    discount?: number | boolean
}

export type ProductCardPriceProps = {
    price: number,
    rrpPrice: number | null
}

export type OfferComponentProp = {
    discountNumber: number
}

export type SpecialItemBoxProps = {
    className: string,
    boxTitle: string,
    boxImage: string
}