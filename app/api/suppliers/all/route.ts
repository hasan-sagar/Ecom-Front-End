import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Supplier {
  id: string;
  supplier_name: string;
}

export async function GET(req: NextRequest) {
  // Extract token from the request
  const token = await getToken({ req });

  // Validate token
  if (!token) {
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

  try {
    const supplier: Supplier[] = await prisma.$queryRaw<Supplier[]>`
        SELECT id,supplier_name
        FROM supplier
    `;

    return NextResponse.json(
      {
        message: "success",
        data: supplier,
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
        status: 400,
      }
    );
  }
}
