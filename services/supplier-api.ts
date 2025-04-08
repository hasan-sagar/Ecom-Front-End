import axiosInstance from "./axios-instance";

interface SupplierBodyData {
  supplier_name: string;
  supplier_email: string;
  supplier_phone_number: string;
  supplier_country?: string;
  supplier_city: string;
  supplier_company_name: string;
  supplier_address: string;
}

//create new supplier
export const createSupplier = async (
  supplier_name: string,
  supplier_email: string,
  supplier_phone_number: string,
  supplier_country: string,
  supplier_city: string,
  supplier_company_name: string,
  supplier_address: string
) => {
  const response = await axiosInstance.post("/suppliers/create", {
    supplier_name: supplier_name,
    supplier_email: supplier_email,
    supplier_phone_number: supplier_phone_number,
    supplier_country: supplier_country,
    supplier_city: supplier_city,
    supplier_company_name: supplier_company_name,
    supplier_address: supplier_address,
  });

  return response.data;
};

//get all suppliers
export const getAllSuppliers = async (
  page: number,
  pageSize: number,
  query: string
) => {
  const response = await axiosInstance.get(
    `/suppliers?page=${page}&pageSize=${pageSize}&query=${query}`
  );
  return response.data;
};

//delete supplier
export const deleteSupplier = async (supplierId: string) => {
  const response = await axiosInstance.delete(`/suppliers/${supplierId}`);
  return response.data;
};

//get supplier
export const getSupplier = async (supplierId: string) => {
  const response = await axiosInstance.get(`/suppliers/${supplierId}`);
  return response.data;
};

//update supplier
export const updateSupplier = async (
  supplierId: string,
  supplierData: SupplierBodyData
) => {
  const response = await axiosInstance.put(`/suppliers/${supplierId}`, {
    supplier_name: supplierData.supplier_name,
    supplier_email: supplierData.supplier_email,
    supplier_phone_number: supplierData.supplier_phone_number,
    supplier_country: supplierData.supplier_country,
    supplier_city: supplierData.supplier_city,
    supplier_company_name: supplierData.supplier_company_name,
    supplier_address: supplierData.supplier_address,
  });

  return response.data;
};
