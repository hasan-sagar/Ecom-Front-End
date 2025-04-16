import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Category {
  id: string;
  category_name: string;
}

export async function GET() {
  try {
    const category: Category[] = await prisma.$queryRaw<Category[]>`
        SELECT id,category_name
        FROM category
    `;

    return NextResponse.json(
      {
        message: "success",
        data: category,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching categories",
      },
      {
        status: 400,
      }
    );
  }
}
