import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//table paginated
// table searching (brand name) + paginated
//exute.com/api/brands/page=2&pageSize=10&query=""

interface Brands {
  id: string;
  brand_name: string;
  brand_image_url: string;
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

  // Parse query parameters
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const query = url.searchParams.get("query")?.trim().toLowerCase() || "";
  const offset: number = (page - 1) * pageSize;

  try {
    // Fetch total brands count
    const totalBrandsFetch: [{ count: any }] =
      await prisma.$queryRaw`SELECT COUNT(*) AS count 
      FROM brand 
      WHERE brand.user_id=${adminId}::uuid 
      AND LOWER(brand.brand_name) LIKE ${`%${query}%`}`;

    //fetch total brands with pagination and searching
    const brands = await prisma.$queryRaw<Brands>`
      SELECT id,brand_name,brand_image_url
      FROM brand
      WHERE brand.user_id=${adminId}::uuid
      AND LOWER(brand.brand_name) LIKE ${`%${query}%`}
      ORDER BY brand_name
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    //total brands count in number
    const totalBrands = Number(totalBrandsFetch[0]?.count);
    const totalPages = Math.ceil(totalBrands / pageSize);

    return NextResponse.json(
      {
        message: "success",
        data: brands,
        pagination: {
          currentPage: page,
          pageSize,
          totalBrands,
          totalPages,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
