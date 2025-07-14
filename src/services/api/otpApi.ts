import { showToast } from '@/utils/showToast';
import type { OtpDto, OtpRequestBody } from '../dto/otp-login.dto';
import api from './api';

export const loginWithOtp = async (requestBody: OtpRequestBody): Promise<OtpDto | void> => {
    try {
        const response = await api.post<OtpDto>('/user/authenticate/', requestBody);
        if (response.data.message) throw new Error(response.data.message || 'خطای ناشناخته');

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            showToast(error.message, 'error');
        }
    }
};
