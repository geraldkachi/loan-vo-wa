import { instance, next } from "../base";

interface ObjectValues {
  page: number;
  size: number;
}

interface staffValues { 
  role: string
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  // assignPermission: boolean;
}

export const getAllStaffs = async () => {
  const { data } = await instance()
    .get(`/staff`)
    .catch((e) => next(e));
  return data.data
};

export const getSingleStaff = async (staffId: string) => {
  const { data } = await instance()
    .get(`/staff/profile/${staffId}`)
    .catch((e) => next(e));
  return data.data
}

export const createStaff = async (values: staffValues,) => {
  const { data } = await instance()
    .post(`/staff`, values)
    .catch((e) => next(e));
  return data.data
}
export const updateStaff = async (id: string, values: staffValues) => {
  const { data } = await instance()
    .put(`/staff/${id}`, values)
    .catch((e) => next(e));
  return data.data
}

