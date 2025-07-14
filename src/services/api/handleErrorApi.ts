import { ERROR_MESSAGES } from "@/constants/ERROR_MESSAGE";
import { showToast } from "@/utils/showToast";
import { AxiosError } from "axios";

export const handleError = (error: unknown) => {
    if (error instanceof AxiosError) {
        const status = error.response?.status;
        switch (status) {
            case 400:
                showToast(ERROR_MESSAGES.BAD_REQUEST, 'error');
                break;
            case 404:
                showToast(ERROR_MESSAGES.NOT_FOUND, 'error');
                break;
            case 429:
                showToast(ERROR_MESSAGES.SPAM_REQUEST, 'error');
                break;
            case 401:
                showToast(ERROR_MESSAGES.UNAUTHORIZED, 'error');
                break;
            case 403:
                showToast(ERROR_MESSAGES.FORBIDDEN, 'error');
                break;
            case 500:
                showToast(ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 'error');
                break;
            case 408:
                showToast(ERROR_MESSAGES.TIMEOUT, 'error');
                break;
            case 503:
                showToast(ERROR_MESSAGES.SERVICE_UNAVAILABLE, 'error');
                break;
            default:
                showToast(ERROR_MESSAGES.SERVER_ERROR, 'error');
                break;
        }
    } else {
        showToast((error as Error).message, 'error');
    }
};