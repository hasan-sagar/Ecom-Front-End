import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Suppliers {
  id: string;
  supplier_name: string;
  supplier_email: string;
  supplier_phone_number: string;
  supplier_country: string;
  supplier_city: string;
  supplier_company_name: string;
  supplier_address: string;
}

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  // Validate token
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

  //parse query
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const query = url.searchParams.get("query")?.trim().toLowerCase() || "";
  const offset: number = (page - 1) * pageSize;

  try {
    //fetch total suppliers count
    const totalSuppliersFetch: [{ count: any }] = await prisma.$queryRaw`
        SELECT COUNT(*) AS count 
        FROM supplier
        WHERE supplier.user_id = ${adminId}
        AND LOWER(supplier.supplier_name) LIKE ${`%${query}%`}
    `;

    //fetch total suppliers with pagination and searching
    const suppliers = await prisma.$queryRaw<Suppliers>`
        SELECT id, supplier_name, supplier_email, supplier_phone_number, supplier_country, supplier_city, supplier_company_name, supplier_address
        FROM supplier
        WHERE supplier.user_id = ${adminId}
        AND (
        LOWER(supplier_name) LIKE ${`%${query}%`} OR
        LOWER(supplier_email) LIKE ${`%${query}%`} OR
        LOWER(supplier_phone_number) LIKE ${`%${query}%`} OR
        LOWER(supplier_country) LIKE ${`%${query}%`} OR
        LOWER(supplier_city) LIKE ${`%${query}%`} OR
        LOWER(supplier_company_name) LIKE ${`%${query}%`} OR
        LOWER(supplier_address) LIKE ${`%${query}%`}
      )
        ORDER BY supplier_name
        LIMIT ${pageSize} OFFSET ${offset}
    `;

    //total suppliers count in number
    const totalSuppliers = Number(totalSuppliersFetch[0].count);
    const totalPages = Math.ceil(totalSuppliers / pageSize);

    return NextResponse.json({
      message: "success",
      data: suppliers,
      pagination: {
        currentPage: page,
        pageSize,
        totalSuppliers,
        totalPages,
      },
    });
  } catch (error: any) {
    // Ensure the error is logged properly
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Error fetching products:", errorMessage);

    return NextResponse.json(
      {
        message: "Error fetching products",
        error: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
