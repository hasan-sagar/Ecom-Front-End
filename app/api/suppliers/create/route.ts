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
  // Extract token from the request
  const token = await getToken({ req });

  // Validate token
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const adminId = token.id;

  if (!adminId) {
    return NextResponse.json(
      { message: "Unauthorized: Missing user ID in token" },
      { status: 401 }
    );
  }

  // Parse body data
  const bodyData = await req.json();

  const { supplier_name } = bodyData;
  const { supplier_email } = bodyData;
  const { supplier_phone_number } = bodyData;
  const { supplier_country } = bodyData;
  const { supplier_city } = bodyData;
  const { supplier_company_name } = bodyData;
  const { supplier_address } = bodyData;

  const requiredFields = {
    supplier_name: "Supplier name",
    supplier_email: "Supplier email",
    supplier_phone_number: "Supplier phone number",
    supplier_city: "Supplier city",
    supplier_company_name: "Supplier company name",
    supplier_address: "Supplier address",
  };

  for (const [field, message] of Object.entries(requiredFields)) {
    if (!bodyData[field]) {
      return NextResponse.json(
        { message: `${message} is required` },
        { status: 400 }
      );
    }
  }

  // Check if supplier exists
  const checkSupplier: Suppliers[] = await checkSupplierExist(
    supplier_email,
    supplier_phone_number
  );

  if (checkSupplier.length > 0) {
    return NextResponse.json(
      {
        message: "Supplier email or phone number already exists",
      },
      {
        status: 4000,
      }
    );
  }

  try {
    await prisma.$queryRaw`
      INSERT INTO supplier (supplier_name, supplier_email, supplier_phone_number, supplier_country, supplier_city, supplier_company_name, supplier_address,user_id)
      VALUES (${supplier_name}, ${supplier_email}, ${supplier_phone_number}, ${supplier_country}, ${supplier_city}, ${supplier_company_name}, ${supplier_address} , ${adminId}::uuid)
    `;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating supplier",
      },
      {
        status: 500,
      }
    );
  }
}

//helper function to check if supplier exist
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
