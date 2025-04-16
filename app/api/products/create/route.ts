import { uploadMultipleImage } from "@/app/lib/cloudinary";
import prisma from "@/app/lib/prisma";
import { createProductSchema } from "@/app/lib/validations/product";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

interface ProductData {
  id: string;
  product_name: string;
  product_description: string;
  category_id: string;
  brand_id: string;
  supplier_id: string;
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

interface Product {
  id: string;
  product_name: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const role = token.role;
  if (role !== "admin") {
    return NextResponse.json(
      { message: "Forbidden Resource" },
      { status: 403 }
    );
  }

  const adminId = token.id;

  if (!adminId) {
    return NextResponse.json(
      { message: "Unauthorized: Missing user ID in token" },
      { status: 401 }
    );
  }

  try {
    const bodyData = await req.json();
    const { image_url, is_featured, is_new_arrival } = bodyData;

    if (!Array.isArray(image_url) || image_url.length === 0) {
      return NextResponse.json(
        { message: "Minimum upload one image" },
        { status: 400 }
      );
    }

    const validatedData = createProductSchema.parse(bodyData);

    const existingProduct = await checkProductExist(
      validatedData.product_name,
      validatedData.product_slug
    );

    if (existingProduct.length > 0) {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 409 }
      );
    }

    // Upload images
    let imageUrls: string[] = [];
    try {
      imageUrls = await uploadMultipleImage(image_url, "products");
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to upload one or more images" },
        { status: 400 }
      );
    }

    // Insert product using raw SQL
    const createdProduct = await prisma.$queryRaw<ProductData[]>`
      INSERT INTO product (
        product_name,
        product_description,
        price,
        stock,
        category_id,
        brand_id,
        user_id,
        product_slug,
        is_featured,
        is_new_arrival,
        status,
        shipping_cost,
        discount_percentage,
        sale_price,
        supplier_id
      )
      VALUES (
        ${validatedData.product_name},
        ${validatedData.product_description},
        ${validatedData.price},
        ${validatedData.stock},
        ${validatedData.category_id}::uuid,
        ${validatedData.brand_id}::uuid,
        ${adminId}::uuid,
        ${validatedData.product_slug},
        ${is_featured ?? false},
        ${is_new_arrival ?? false},
        'ACTIVE',
        ${validatedData.shipping_cost},
        ${validatedData.discount_percentage ?? 0},
        ${validatedData.sale_price},
        ${validatedData.supplier_id}::uuid
      )
      RETURNING id, product_name;
    `;

    const productId = createdProduct[0]?.id;

    if (!productId) {
      return NextResponse.json(
        { message: "Failed to create product" },
        { status: 500 }
      );
    }

    // Insert product images using raw SQL
    for (const image of imageUrls) {
      await prisma.$queryRaw`
        INSERT INTO product_image (
          image_url,
          product_id
        )
        VALUES (
          ${image},
          ${productId}::uuid
        );
      `;
    }

    return NextResponse.json(
      {
        message: "Product created successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        { error: "Validation failed", details: errorMessages },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

// Helper to check if product already exists
async function checkProductExist(
  product_name: string,
  product_slug: string
): Promise<Product[]> {
  return await prisma.$queryRaw<Product[]>`
    SELECT id, product_name
    FROM product
    WHERE product_name = ${product_name}
    OR product_slug = ${product_slug};
  `;
}
