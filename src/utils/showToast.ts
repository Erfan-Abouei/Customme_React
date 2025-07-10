import toast from "react-hot-toast"

type ToastStatus = 'error' | 'success'

export const showToast = (toastMessage: string, toastStatus: ToastStatus, toastCustomClass?: string) => {
    switch (toastStatus) {
        case 'success':
            return toast.success(toastMessage, {
                className: `toast__box--custom-class ${toastCustomClass}`
            })
        case 'error':
            return toast.error(toastMessage, {
                className: `toast__box--custom-class ${toastCustomClass}`
            })
        default:
            throw new Error('toast status must be success or error')
    }
}