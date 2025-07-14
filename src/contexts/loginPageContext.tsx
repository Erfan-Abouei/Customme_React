import type { OtpDto } from "@/services/dto/otp-login.dto";
import { createContext, useState } from "react";

interface LoginPageProviderType {
    otpData: OtpDto | null,
    setOtpData: React.Dispatch<React.SetStateAction<OtpDto | null>>
}

const loginPageContext = createContext<LoginPageProviderType | null>(null)

const LoginPageProvider = ({ children }: { children: React.ReactNode }) => {
    const [otpData, setOtpData] = useState<OtpDto | null>(null)
    return (
        <loginPageContext.Provider value={{
            otpData,
            setOtpData
        }}>
            {children}
        </loginPageContext.Provider>
    )
}

export { loginPageContext }
export default LoginPageProvider