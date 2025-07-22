// No official type definitions from Digikala for the otp login data structure are publicly available,
// so these interfaces are created based on observed sample data and educated guesses,
// and may not be complete or fully accurate.
export interface OtpDto {
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

export interface SendOtpRequestBody {
    backUrl: string
    hash: string | null
    otp_call: boolean
    username: string
}

export interface CheckOtpRequestBody {
    backUrl: string
    code: string
    interface: "otp"
    username: string
}