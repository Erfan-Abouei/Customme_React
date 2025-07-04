import type { LogoComponentProps } from "@/types/components-props.types"

import Logo from '/Logo.svg'
import LogoType from '/LogoType.svg'

const LogoComponent = ({ customClass, gap = 1, showLogoType = true, showLogo = true, LogoClass, LogoTypeClass }: LogoComponentProps) => {
    return (
        <span className={customClass + ` flex items-center gap-x-${gap} `}>
            <img src={Logo} alt="Logo" className={`${LogoClass} size-full ${!showLogo ? 'hidden' : ''}`} />
            <img src={LogoType} alt="LogoType" className={`${LogoTypeClass} size-full ${!showLogoType ? 'hidden' : ''}`} />
        </span>
    )
}

export default LogoComponent