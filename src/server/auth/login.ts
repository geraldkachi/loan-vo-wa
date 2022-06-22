import { instance, next } from '../base';

interface ObjectValues {
    email: string;
    password: string;
}

interface OTPValues {
    otp: string;
    email: string;
}

export const allowLogin = async (values: ObjectValues) => {
    const { data } = await instance()
        .post('/staff/signin', values)
        .catch((e) => next(e));
    return data.data;
}

export const validateOTP = async (values: OTPValues) => {
    const { data } = await instance()
        .put('/staff/signin', values)
        .catch((e) => next(e));
    return data
}