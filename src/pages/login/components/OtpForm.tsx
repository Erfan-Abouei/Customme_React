import Spinner from "@/components/ui/Spinner";
import { useLoginPageContext } from "@/hooks/contexts-hooks/useLoginPageContext";
import { useEffect, useState, type SyntheticEvent } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import InputError from "./InputError";
import clsx from "clsx";
import { checkOtpCode } from "@/services/api/otpApi";
import type { CheckOtpRequestBody } from "@/services/dto/otp-login.dto";
import { useNavigate, useSearchParams } from "react-router";

interface Inputs {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
}

const OtpForm = () => {
    const { register, handleSubmit, setError, watch, setFocus, reset, formState: { errors } } = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { otpData } = useLoginPageContext();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (isSubmitting) return;

        const otp = [data.otp1, data.otp2, data.otp3, data.otp4, data.otp5].join("");
        if (otp.length < 5) {
            setError('root', { type: 'manual', message: 'لطفا کد را به صورت کامل وارد کنید' });
            return;
        }

        try {
            setIsSubmitting(true);
            setIsLoading(true);

            const checkOtpData: CheckOtpRequestBody = {
                backUrl: searchParams.get("backUrl") || '',
                code: otp,
                type: "otp",
                username: otpData?.data?.phone as string
            };
            const checkOtpStatus = await checkOtpCode(checkOtpData);

            if (checkOtpStatus?.status === 200) {
                navigate(searchParams.get('backUrl') || '/', { replace: true });
                reset();
            }
            else {
                setError('root', { type: 'manual', message: "" })
            }
        } finally {
            setIsLoading(false);
            setIsSubmitting(false);
        }
    };

    const watchOtp = watch();

    useEffect(() => {
        const otp = [watchOtp.otp1, watchOtp.otp2, watchOtp.otp3, watchOtp.otp4, watchOtp.otp5].join("");
        if (otp.length === 5 && !isSubmitting) {
            handleSubmit(onSubmit)();
        }
    }, []);

    const handleFocusInputs = (e: SyntheticEvent<HTMLInputElement>) => {
        const currentInput = e.currentTarget;
        const name = currentInput.getAttribute('name');
        if (!name) return;

        const index = parseInt(name.replace('otp', ''), 10);

        if (currentInput.value.length >= 1 && e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code !== "Backspace") {
            if (index < 5) setFocus(`otp${index + 1}` as keyof Inputs);
        } else if (currentInput.value.length === 0 && e.nativeEvent instanceof KeyboardEvent && e.nativeEvent.code === "Backspace") {
            if (index > 1) setFocus(`otp${index - 1}` as keyof Inputs);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-y-4 mt-3">
                <h4 className="text-lg max-md:text-sm font-iran-bold text-gray-950">کد تایید را وارد کنید</h4>
                <p className="leading-6 text-gray-800 font-iran-regular text-xs">سلام!
                    <br />
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </p>

                <div className="flex flex-col gap-y-1">
                    <div className="flex items-center justify-center gap-x-2" dir="ltr">
                        {[1, 2, 3, 4, 5].map(num => (
                            <div className="size-15" key={num}>
                                <input
                                    {...register(`otp${num}` as keyof Inputs, {
                                    })}
                                    type="text"
                                    maxLength={1}
                                    inputMode="numeric"
                                    onKeyUp={handleFocusInputs}
                                    className={clsx("font-iran-medium rounded-md focus:border-primary/40 border border-gray-300 transition-all size-full text-center text-xl", {
                                        '!border-error': errors.root
                                    })}
                                />
                            </div>
                        ))}
                    </div>
                    {errors.root && <InputError errorMessage={errors.root.message as string} />}
                </div>

                <button
                    disabled={isLoading || isSubmitting}
                    type="submit"
                    className="disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer mt-2 h-12 rounded-md text-white hover:bg-primary/80 bg-primary flex items-center justify-center font-iran-medium text-sm max-md:text-xs"
                >
                    {isLoading ? <Spinner /> : 'ورود'}
                </button>
            </div>
        </form>
    );
};

export default OtpForm;
