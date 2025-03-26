import axiosInstance from "./axios-instance";

//get all brand api
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

//create brand api

export const createBrand = async (
  brand_name: string,
  brand_image_url: string
) => {
  const response = await axiosInstance.post("/brands/create", {
    brand_name: brand_name,
    brand_image_url,
  });

  return response.data;
};
