import { instance, next } from "../base";

interface ObjectValues {
    page: number,
    size: number
}

export const allowLogin = async (values: ObjectValues) => {
  const { data } = await instance()
    .get(`/repayments?page=${values.page}&size=${values.size}`)
    .catch((e) => next(e));
  return data.data.staff;
};
