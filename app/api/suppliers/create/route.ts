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
  user_id: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || !token.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const adminId = token.id;

  const bodyData = await req.json();

  const {
    supplier_name,
    supplier_email,
    supplier_phone_number,
    supplier_country,
    supplier_city,
    supplier_company_name,
    supplier_address,
  } = bodyData;

  const requiredFields = {
    supplier_name: "Supplier name",
    supplier_email: "Supplier email",
    supplier_phone_number: "Supplier phone number",
    supplier_city: "Supplier city",
    supplier_company_name: "Supplier company name",
    supplier_address: "Supplier address",
  };

  for (const [field, label] of Object.entries(requiredFields)) {
    if (!bodyData[field]) {
      return NextResponse.json(
        { message: `${label} is required` },
        { status: 400 }
      );
    }
  }

  // Check for existing supplier
  const existingSupplier = await checkSupplierExist(
    supplier_phone_number,
    supplier_email
  );

  if (existingSupplier.length > 0) {
    return NextResponse.json(
      { message: "Supplier already exists" },
      { status: 400 }
    );
  }

  try {
    await prisma.$queryRaw`
      INSERT INTO supplier (
        supplier_name,
        supplier_email,
        supplier_phone_number,
        supplier_country,
        supplier_city,
        supplier_company_name,
        supplier_address,
        user_id
      )
      VALUES (
        ${supplier_name},
        ${supplier_email},
        ${supplier_phone_number},
        ${supplier_country},
        ${supplier_city},
        ${supplier_company_name},
        ${supplier_address},
        ${adminId}::uuid
      )
    `;

    return NextResponse.json(
      { message: "Supplier created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating supplier:", error);
    return NextResponse.json(
      { message: "Error creating supplier" },
      { status: 500 }
    );
  }
}

async function checkSupplierExist(
  supplier_phone_number: string,
  supplier_email: string
): Promise<Suppliers[]> {
  return await prisma.$queryRaw`
    SELECT * 
    FROM supplier
    WHERE supplier.supplier_email = ${supplier_email} 
    OR supplier.supplier_phone_number = ${supplier_phone_number}
  `;
}
