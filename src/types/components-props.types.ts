export type LogoComponentProps = {
    customClass: string
    gap?: number
    showLogoType?: boolean
    showLogo?: boolean
    LogoClass?: string
    LogoTypeClass?: string
}

export type SearchBarProp = {
    isOpen: boolean
}

export type OverlayProps = {
    zIndex: number,
    onClick: () => void
}

export type OverlayProviderProp = {
    children: React.ReactNode
}