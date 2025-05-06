import axiosInstance from "./axios-instance";

interface ProductBodyData {
  product_name: string;
  product_description: string;
  category_id: number;
  brand_id: number;
  supplier_id: number;
  product_slug: string;
  image_url: string[];
  stock: number;
  price: number;
  sale_price: number;
  shipping_cost: number;
  discount_percentage: number;
  status: string;
  is_featured: boolean;
  is_new_arrival: boolean;
}

// Create new product
export const createProduct = async (productBodyData: ProductBodyData) => {
  const response = await axiosInstance.post("/products/create", {
    product_name: productBodyData.product_name,
    product_description: productBodyData.product_description,
    category_id: productBodyData.category_id,
    brand_id: productBodyData.brand_id,
    supplier_id: productBodyData.supplier_id,
    product_slug: productBodyData.product_slug,
    image_url: productBodyData.image_url,
    stock: productBodyData.stock,
    price: productBodyData.price,
    sale_price: productBodyData.sale_price,
    shipping_cost: productBodyData.shipping_cost,
    discount_percentage: productBodyData.discount_percentage,
    status: productBodyData.status,
    is_featured: productBodyData.is_featured,
    is_new_arrival: productBodyData.is_new_arrival,
  });

  return response.data;
};
