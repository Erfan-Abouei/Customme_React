import type { LogoComponentProps } from '@/types/components-props.types'
import Logo from '/Logo.svg'
import LogoType from '/LogoType.svg'
import { useNavigate } from "react-router"

const LogoComponent = ({ customClass, customLogoClass, customLogoTypeClass }: LogoComponentProps) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/')} className={`cursor-pointer flex items-center gap-x-1 ${customClass}`}>
            <img src={Logo} alt="Logo" className={customLogoClass} />
            <img src={LogoType} alt="Logo Type" className={customLogoTypeClass} />
        </div>
    )
}

export default LogoComponent