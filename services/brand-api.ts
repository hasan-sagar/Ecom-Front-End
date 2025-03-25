import axiosInstance from "./axios-instance";

export const getAllBrands = async (
  page: number,
  pageSize: number,
  query: string
) => {
  const response = await axiosInstance.get(
    `/brands?page=${page}&pageSize=${pageSize}&query=${query}`
  );
  return response.data;
};
