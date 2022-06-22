import { instance, next } from "../base";

interface ObjectValues {
  page: number;
  size: number;
}

export const customers = async (values: ObjectValues) => {
  const { data } = await instance()
    .get(`/staff/customers/`, { params: values })
    .catch((e) => next(e));
  return data.data;
}

export const getCustomerDetail = async (customerId: string) => {
  const { data } = await instance()
    .get(`/customer/profile?customerId=${customerId}`)
    .catch((e) => next(e));
  return data.data;
}