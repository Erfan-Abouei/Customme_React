import { usePageTitle } from "@/hooks/usePageTitle"
import { useState } from "react"

const LoginPage = () => {
    const [stepLogin, setStepLogin] = useState<1 | 2>(1)
    usePageTitle(stepLogin === 1 ? 'خوش آمدید' : 'وارد کردن کد')

    return (
        <div>Login Page</div>
    )
}

export default LoginPage