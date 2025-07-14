import { useForm, type SubmitHandler } from "react-hook-form"
import InputError from "./InputError";
import clsx from "clsx";
import type { LoginFormProp } from "@/types/components-props.types";
import { sendOtp } from "@/services/api/otpApi";
import type { SendOtpRequestBody } from "@/services/dto/otp-login.dto";
import { useSearchParams } from "react-router";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";
import { useLoginPageContext } from "@/hooks/contexts-hooks/useLoginPageContext";

type Inputs = {
    phoneNumber: string
}

const LoginForm = ({ setLoginStep }: LoginFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const { setOtpData } = useLoginPageContext()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchParams] = useSearchParams()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true)
        try {
            const otpLoginBody: SendOtpRequestBody = {
                backUrl: searchParams.get('backUrl') || '/',
                hash: null,
                otp_call: false,
                username: data.phoneNumber
            }

            const otpResponse = await sendOtp(otpLoginBody)

            if (otpResponse?.status === 200) {
                setLoginStep(2)
                setOtpData(otpResponse)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4 mt-3">
                {/* Login form title */}
                <h4 className="text-lg max-md:text-sm font-iran-bold text-gray-950">ورود | ثبت‌نام</h4>
                {/* Login form caption */}
                <p className="leading-6 text-gray-800 font-iran-regular text-xs">سلام!
                    <br />
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </p>
                <div className="flex flex-col gap-y-1">
                    {/* input container */}
                    <div className="h-12">
                        <input disabled={isLoading} {...register('phoneNumber', {
                            required: "لطفا این فیلد را خالی نگذارید",
                            validate: (value) => {
                                if (!/^[0-9]{11}$/.test(value) || !value.startsWith("09")) {
                                    return "شماره موبایل وارد شده نادرست است"
                                }
                            }
                        })} type="text" className={clsx(`disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm max-md:text-xs font-iran-regular rounded-md md:border-gray-500 max-md:bg-gray-300 max-md:border-transparent text-gray-800 px-3 size-full md:border border-b-2 md:focus:border-black/40 focus:border-b-black/40`, {
                            "!border-error max-md:!border-b-error": errors.phoneNumber
                        })} />
                    </div>
                    {/* input error */}
                    {errors.phoneNumber && <InputError errorMessage={errors.phoneNumber.message as string} />}
                </div>
                {/* Submit Button */}
                <button disabled={isLoading} type="submit" className="disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer mt-2 h-12 rounded-md text-white hover:bg-primary/80 bg-primary flex items-center justify-center font-iran-medium text-sm max-md:text-xs">
                    {isLoading ? <Spinner /> : 'ورود'}
                </button>
            </div>
        </form>
    )
};

export default LoginForm;
