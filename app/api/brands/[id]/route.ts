import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

interface Brand {
  id: string;
  brand_name: string;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  // Extract token from the request
  const token = await getToken({ req });

  // Validate token (uncomment if needed)
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Check if the brand exists and delete it
    const deletionResult = await deleteBrandById(id);
    return deletionResult;
  } catch (error) {
    console.error("Deletion error:", error);
    return NextResponse.json(
      { message: "Error deleting brand" },
      { status: 500 }
    );
  }
}

async function deleteBrandById(brandId: string) {
  // Check if brand exists
  const existingBrand: Brand[] = await prisma.$queryRaw`
    SELECT id, brand_name
    FROM brand
    WHERE brand.id = ${brandId}::uuid
  `;

  // If no brand found, return 404
  if (existingBrand.length < 1) {
    return NextResponse.json(
      { message: "No brand found to delete" },
      { status: 404 }
    );
  }

  // Delete the brand
  await prisma.$executeRaw`
    DELETE FROM brand
    WHERE brand.id = ${brandId}::uuid
  `;

  // Return success response
  return NextResponse.json(
    { message: "Brand deleted successfully" },
    { status: 200 }
  );
}
