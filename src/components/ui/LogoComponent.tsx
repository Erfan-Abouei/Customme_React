import type { LogoComponentProps } from "@/types/components-props.types"

import Logo from '/Logo.svg'
import LogoType from '/LogoType.svg'

const LogoComponent = ({ customClass, gap = 1, showLogoType = true, showLogo = true, }: LogoComponentProps) => {
    return (
        <span className={customClass + ` flex items-center gap-x-${gap} `}>
            <img src={Logo} alt="Logo" className={`size-full ${!showLogo ? 'hidden' : ''}`} />
            <img src={LogoType} alt="LogoType" className={`size-full ${!showLogoType ? 'hidden' : ''}`} />
        </span>
    )
}

export default LogoComponent