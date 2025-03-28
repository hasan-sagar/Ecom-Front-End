import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Categories {
  id: string;
  category_name: string;
  category_image_url: string;
}

export async function GET(req: NextRequest) {
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

  //parse query parameters
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || " 10");
  const query = url.searchParams.get("query")?.trim().toLocaleLowerCase() || "";
  const offset = (page - 1) * pageSize;

  try {
    // Fetch total category count
    const totalCategoryFetch: [{ count: any }] = await prisma.$queryRaw`
        SELECT COUNT(*) AS count
        FROM category
        WHERE category.user_id=${adminId}::uuid
        AND LOWER(category.category_name) LIKE ${`%${query}%`}
    `;

    //fetch total categories with pagination and searching
    const categories = await prisma.$queryRaw<Categories>`
        SELECT id , category_name , category_image_url
        FROM category
        WHERE category.user_id=${adminId}::uuid
        AND LOWER(category.category_name) LIKE ${`%${query}%`}
        ORDER BY category_name
        LIMIT ${pageSize} OFFSET ${offset}
    `;

    //total category in number
    const totalCategories = Number(totalCategoryFetch[0]?.count);
    const totalPages = Math.ceil(totalCategories / pageSize);

    return NextResponse.json(
      {
        message: "success",
        data: categories,
        pagination: {
          currentPage: page,
          pageSize,
          totalCategories,
          totalPages,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
