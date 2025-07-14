import { usePageTitle } from "@/hooks/usePageTitle"
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import LogoComponent from "@/components/ui/LogoComponent";
import { HiArrowSmallRight } from "react-icons/hi2";
import LoginForm from "./components/LoginForm";
import OtpForm from "./components/OtpForm";
import LoginPageProvider from "@/contexts/loginPageContext";


const LoginPage = () => {
    const [loginStep, setLoginStep] = useState<1 | 2>(1)
    const navigate = useNavigate()

    usePageTitle(loginStep === 1 ? 'خوش آمدید' : 'وارد کردن کد')

    const handleBack = () => {
        loginStep === 2 ? setLoginStep(1) : navigate(-1)
    }

    return (
        <section className="login-section">
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="md:max-w-100 w-full p-8 max-md:p-3 rounded-xl md:border md:border-gray-400 flex flex-col gap-y-4">
                    {/* Logo */}
                    <div className="flex items-center justify-center md:relative">
                        <LogoComponent />
                        {/* Back Button */}
                        <span onClick={handleBack} className="cursor-pointer size-6 text-gray-950 absolute md:my-auto md:right-0 right-3 top-3">
                            <HiArrowSmallRight className="size-full" />
                        </span>
                    </div>
                    <LoginPageProvider>
                        {loginStep === 1 ? <LoginForm setLoginStep={setLoginStep} /> : <OtpForm />}
                    </LoginPageProvider>
                    {/* Accept Rules */}
                    <p className="text-center text-xs max-md:text-custom text-gray-800 font-iran-medium max-md:font-iran-regular">ورود شما به معنای پذریش قوانین <Link to="/" className="text-primary">کاستومی</Link> است</p>
                </div>
            </div>
        </section>
    )
}

export default LoginPage