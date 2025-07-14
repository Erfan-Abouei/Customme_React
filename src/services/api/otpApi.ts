import type { CheckOtpRequestBody, OtpDto, SendOtpRequestBody } from '../dto/otp-login.dto';
import api from './api';
import { handleError } from './handleErrorApi';

export const sendOtp = async (sendOtpRequestBody: SendOtpRequestBody): Promise<OtpDto | void> => {
    try {
        const response = await api.post<OtpDto>('/user/authenticate/', sendOtpRequestBody);
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
