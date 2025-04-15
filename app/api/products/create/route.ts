// app/api/create-product/route.ts
import prisma from "@/app/lib/prisma";
import { createProductSchema } from "@/app/lib/validations/product";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

interface Product {
  id: string;
  product_name: string;
}

export async function POST(req: NextRequest) {
  //   //extract token request
  //   const token = await getToken({ req });

  //   //validate token
  //   if (!token) {
  //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  //   }

  //   //role
  //   const role = token.role;
  //   if (role !== "admin") {
  //     return NextResponse.json(
  //       {
  //         message: "Forbidden Resource",
  //       },
  //       {
  //         status: 403,
  //       }
  //     );
  //   }

  //   const adminId = token.id;

  //   if (!adminId) {
  //     return NextResponse.json(
  //       { message: "Unauthorized: Missing user ID in token" },
  //       { status: 401 }
  //     );
  //   }

  try {
    // Parse the request body
    const bodyData = await req.json();
    const { image_url, is_featured, is_new_arrival } = bodyData;

    // if (!image_url) {
    //   return NextResponse.json(
    //     {
    //       message: "Image url required",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    //data validation
    const validatedData = createProductSchema.parse(bodyData);

    //check for existing product
    const existingProduct = await checkProductExist(
      validatedData.product_name,
      validatedData.product_slug
    );

    if (existingProduct.length > 0) {
      return NextResponse.json(
        {
          message: "Product already exist",
        },
        {
          status: 409,
        }
      );
    }

    // Respond with success
    return NextResponse.json(
      {
        message: "Product created successfully",
        data: {
          ...validatedData,
          image_url,
          is_featured,
          is_new_arrival,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      // Extract only the error messages
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      87;

      return NextResponse.json(
        { error: "Validation failed", details: errorMessages },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//check product exist
async function checkProductExist(
  product_name: string,
  product_slug: string
): Promise<Product[]> {
  return await prisma.$queryRaw`
      SELECT id,product_name
      FROM product
      WHERE product.product_name = ${product_name}
      OR product.product_slug=${product_slug}
    `;
}
