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
    brand_image_url: brand_image_url,
  });

  return response.data;
};

//delete brand api
export const deleteBrand = async (brandId: string) => {
  const response = await axiosInstance.delete(`/brands/${brandId}`);
  return response.data;
};

//update brand api
export const updateBrand = async (brandId: string, brandName: string) => {
  const response = await axiosInstance.put(`brands/${brandId}`, {
    brand_name: brandName,
  });

  return response.data;
};
