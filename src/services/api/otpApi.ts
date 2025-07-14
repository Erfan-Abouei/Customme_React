import type { CheckOtpRequestBody, OtpDto, OtpRequestBody } from '../dto/otp-login.dto';
import api from './api';
import { handleError } from './handleErrorApi';

// backUrl
// code
// type
// username

export const loginWithOtp = async (requestBody: OtpRequestBody): Promise<OtpDto | void> => {
    try {
        const response = await api.post<OtpDto>('/user/authenticate/', requestBody);
        if (response.data.status !== 200) {
            throw new Error(response.data.message);
        }
        return response.data;

    } catch (error) {
        handleError(error);
    }
};

export const checkOtpCode = async (checkOtpRequestBody: CheckOtpRequestBody): Promise<{ status: number, message?: string } | void> => {
    try {
        const response = await api.post('/user/login/otp/', {
            ...checkOtpRequestBody
        })
        if (response.data.status !== 200) {
            throw new Error(response.data.message)
        }
        return response.data
    } catch (error) {
        handleError(error)
    }
}
