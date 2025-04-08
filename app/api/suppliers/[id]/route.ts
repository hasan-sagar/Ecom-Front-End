import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Supplier {
  id: string;
  supplier_name: string;
}

interface FetchSupplier {
  id: string;
  supplier_name: string;
  supplier_email: string;
  supplier_phone_number: string;
  supplier_country: string;
  supplier_city: string;
  supplier_company_name: string;
  supplier_address: string;
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = await getToken({ req });

  if (!token || !token.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  //role
  const role = token.role;
  if (role !== "admin") {
    return NextResponse.json(
      {
        message: "Forbidden Resource",
      },
      {
        status: 403,
      }
    );
  }

  const id = (await params).id;

  const deletionResult = await deleteSupplier(id);
  return deletionResult;
}

//helper function to delete supplier
async function deleteSupplier(supplierId: string) {
  try {
    const existingSupplier: Supplier[] = await prisma.$queryRaw`
        SELECT id, supplier_name
        FROM supplier
        WHERE supplier.id=${supplierId}::uuid
      `;

    if (existingSupplier.length < 1) {
      return NextResponse.json(
        {
          message: "No supplier found to delete",
        },
        {
          status: 404,
        }
      );
    }

    //delete the supplier
    await prisma.$executeRaw`
    DELETE FROM supplier
    WHERE supplier.id = ${supplierId}::uuid
   `;

    //success
    return NextResponse.json(
      {
        message: "Supplier deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting supplier" },
      { status: 500 }
    );
  }
}

//get supplier
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = await getToken({ req });

  if (!token || !token.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  //role
  const role = token.role;
  if (role !== "admin") {
    return NextResponse.json(
      {
        message: "Forbidden Resource",
      },
      {
        status: 403,
      }
    );
  }
  //params id url
  const id = (await params).id;

  try {
    //fetch supplier
    const supplier: FetchSupplier[] = await prisma.$queryRaw`
    SELECT id,supplier_name,supplier_email,supplier_phone_number,supplier_country,supplier_city,supplier_address,supplier_company_name
    FROM supplier
    WHERE supplier.id=${id}::uuid
`;

    const supplierData = supplier[0];
    return NextResponse.json(
      {
        message: "success",
        data: supplierData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching supplier",
      },
      {
        status: 500,
      }
    );
  }
}
