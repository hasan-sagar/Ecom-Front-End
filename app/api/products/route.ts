import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Products {
  id: string;
  product_name: string;
  price: number;
  stock: number;
  is_featured: boolean;
  is_new_arrival: boolean;
  status: string;
  shipping_cost: number;
  sale_price: number;
  supplier_name: string;
  category_name: string;
  brand_name: string;
  image_url: string[];
}

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const adminId = Number(token.id);
  if (!adminId) {
    return NextResponse.json(
      { message: "Unauthorized: Missing user ID in token" },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const query = url.searchParams.get("query")?.trim().toLowerCase() || "";
  const offset: number = (page - 1) * pageSize;

  try {
    // Total count with query
    const totalProductsFetch: [{ count: number }] = await prisma.$queryRaw`
      SELECT COUNT(product.id) as count
      FROM product
      WHERE product.user_id = ${adminId}
      AND(LOWER(product.product_name) LIKE ${`%${query}%`} )
    `;

    const products: Products[] = await prisma.$queryRaw`
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
        supplier.supplier_name,
        category.category_name,
        brand.brand_name,
        array_agg(product_image.image_url) AS image_url
      FROM product
      LEFT JOIN product_image ON product.id = product_image.product_id
      LEFT JOIN supplier ON product.supplier_id = supplier.id
      LEFT JOIN category ON product.category_id = category.id
      LEFT JOIN brand ON product.brand_id = brand.id
      WHERE product.user_id = ${adminId}
      AND (
        LOWER(product.product_name) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_email) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_phone_number) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_country) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_city) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_company_name) LIKE ${`%${query}%`} OR
        LOWER(supplier.supplier_address) LIKE ${`%${query}%`}
      )
      GROUP BY
        product.id,
        supplier.supplier_name,
        category.category_name,
        brand.brand_name
      ORDER BY
        product.product_name
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    const totalProducts = Number(totalProductsFetch[0].count);
    const totalPages = Math.ceil(totalProducts / pageSize);

    return NextResponse.json({
      message: "success",
      data: products,
      pagination: {
        currentPage: page,
        pageSize,
        totalProducts,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}
