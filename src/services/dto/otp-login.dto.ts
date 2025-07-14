export type OtpDto = {
    status: number;
    message?: string;
    data?: {
        phone: string;
        has_account: boolean;
        login_method: string;
        sms_ttl: number;
        has_password: boolean;
    };
}

export type OtpRequestBody = {
    backUrl: string
    hash: string
    otp_call: boolean
    username: string
}