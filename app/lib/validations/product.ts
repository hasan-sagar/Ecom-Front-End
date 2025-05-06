import * as z from "zod";

export const createProductSchema = z.object({
  product_name: z
    .string({
      required_error: "Product name is required",
    })
    .min(1),
  product_description: z
    .string({
      required_error: "Description is required",
    })
    .min(1),
  category_id: z.number({ required_error: "Category is required" }),
  brand_id: z.number({ required_error: "Brand is required" }),
  supplier_id: z.number({ required_error: "Supplier is required" }),
  product_slug: z.string({ required_error: "Slug is required" }).min(1),
  stock: z.coerce.number({ required_error: "Stock is required" }).min(1),
  price: z.coerce.number({ required_error: "Price is required" }).min(0.01),
  sale_price: z.coerce
    .number({ required_error: "Sale price is required" })
    .min(0.01),
  shipping_cost: z.coerce
    .number({
      required_error: "Shipping cost is required",
      invalid_type_error: "Shipping cost must be a valid number",
    })
    .min(0.01),
  discount_percentage: z.coerce.number().optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "OUT_OF_STOCK"], {
    errorMap: () => ({ message: "Status is required" }),
  }),
});
