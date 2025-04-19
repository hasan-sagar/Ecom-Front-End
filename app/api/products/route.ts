import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Products {
  id: string;
  product_name: string;
  price: number;
  stock: number;
  is_featured: boolean;
  is_new_arrival: boolean;
  status: [];
  shipping_cost: number;
  sale_price: number;
  supplier_name: string;
  category_name: string;
  brand_name: string;
}

export async function GET(req: NextRequest) {
  //parse query
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const query = url.searchParams.get("query")?.trim().toLowerCase() || "";
  const offset: number = (page - 1) * pageSize;

  try {
    //fetch total products count
    const totalProductsFetch: [{ count: any }] = await prisma.$queryRaw`
        SELECT COUNT(product.id) as count
        FROM product
    `;

    const product = await prisma.$queryRaw`
        SELECT 
        product.id,
        product.product_name,
        product.price,
        product.stock,
        product.is_featured,
        product.is_new_arrival,
        product.status,
        product.shipping_cost,
        product.sale_price,
        supplier.id AS supplier_id,
        supplier.supplier_name,
        category.id AS category_id,
        category.category_name,
        brand.id AS brand_id,
        brand.brand_name,
        array_agg(DISTINCT product_image.image_url) AS image_url
    FROM 
        product
    LEFT JOIN 
        product_image ON product.id = product_image.product_id
    LEFT JOIN
        supplier ON product.supplier_id = supplier.id
    LEFT JOIN
        category ON product.category_id = category.id
    LEFT JOIN
        brand ON product.brand_id = brand.id
    GROUP BY 
        product.id,
        supplier.id,
        supplier.supplier_name,
        category.id,
        category.category_name,
        brand.id,
        brand.brand_name
    ORDER BY 
        product.product_name ASC;

  `;

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Error fetching products",
      },
      {
        status: 500,
      }
    );
  }
}
