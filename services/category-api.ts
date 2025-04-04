import axiosInstance from "./axios-instance";

//get all category api
export const getAllCategories = async (
  page: number,
  pageSize: number,
  query: string
) => {
  const response = await axiosInstance.get(
    `/category?page=${page}&pageSize=${pageSize}&query=${query}`
  );
  return response.data;
};

//create category api
export const createCategory = async (
  category_name: string,
  category_image_url: string
) => {
  const response = await axiosInstance.post("/category/create", {
    category_name: category_name,
    category_image_url: category_image_url,
  });

  return response.data;
};

//delete category api
export const deleteCategory = async (categoryId: string) => {
  const response = await axiosInstance.delete(`/category/${categoryId}`);
  return response.data;
};

//update category api
export const updateCategory = async (
  categoryId: string,
  categoryName: string
) => {
  const response = await axiosInstance.put(`/category/${categoryId}`, {
    category_name: categoryName,
  });
  return response.data;
};
