import { useForm, type SubmitHandler } from "react-hook-form"
import InputError from "./InputError";
import clsx from "clsx";
import type { LoginFormProp } from "@/types/components-props.types";

type Inputs = {
    phoneNumber: string
}

const LoginForm = ({ setLoginStep }: LoginFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {

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
                        <input {...register('phoneNumber', {
                            required: "لطفا این فیلد را خالی نگذارید",
                            validate: (value) => {
                                if (!/^[0-9]{11}$/.test(value) || !value.startsWith("09")) {
                                    return "شماره موبایل وارد شده نادرست است"
                                }
                            }
                        })} type="text" className={clsx(`transition-all text-sm max-md:text-xs font-iran-regular rounded-md md:border-gray-500 max-md:bg-gray-300 max-md:border-transparent text-gray-800 px-3 size-full md:border border-b-2 md:focus:border-black/40 focus:border-b-black/40`, {
                            "!border-error max-md:!border-b-error": errors.phoneNumber
                        })} />
                    </div>
                    {/* input error */}
                    {errors.phoneNumber && <InputError errorMessage={errors.phoneNumber.message} />}
                </div>
                {/* Submit Button */}
                <button type="submit" className="transition-colors cursor-pointer mt-2 h-12 rounded-md text-white hover:bg-primary/80 bg-primary flex items-center justify-center font-iran-medium text-sm max-md:text-xs">ورود</button>
            </div>
        </form>
    )
};

export default LoginForm;
