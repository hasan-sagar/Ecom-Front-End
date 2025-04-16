import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Brand {
  id: string;
  brand_name: string;
}

export async function GET() {
  try {
    const brand: Brand[] = await prisma.$queryRaw<Brand[]>`
        SELECT id,brand_name
        FROM brand
    `;

    return NextResponse.json(
      {
        message: "success",
        data: brand,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching brands",
      },
      {
        status: 400,
      }
    );
  }
}
