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
    // Check if the brand exists and delete it
    const deletionResult = await deleteBrandById(id);
    return deletionResult;
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting brand" },
      { status: 500 }
    );
  }
}

//helper function to delete a brand
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

//update brand
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
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

  //body data
  const bodyData = await req.json();
  const { brand_name } = bodyData;

  if (!brand_name) {
    return NextResponse.json(
      {
        message: "Brand Name required to update",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const updateBrandResult = await updateBrand(id, brand_name);
    return updateBrandResult;
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating brand" },
      { status: 500 }
    );
  }
}

//helper function to update brand
async function updateBrand(brandId: string, brandName: string) {
  // Check if brand exists
  const existingBrand: Brand[] = await prisma.$queryRaw`
    SELECT id, brand_name
    FROM brand
    WHERE brand.id = ${brandId}::uuid
  `;

  // If no brand found, return 404
  if (existingBrand.length < 1) {
    return NextResponse.json(
      { message: "No brand found to update" },
      { status: 404 }
    );
  }

  //update the brand
  //update brand_name field where brand.id is params id
  await prisma.$executeRaw`
    UPDATE brand
    SET brand_name = ${brandName}
    WHERE brand.id = ${brandId}::uuid
  `;

  // Return success response
  return NextResponse.json(
    { message: "Brand updated successfully" },
    { status: 201 }
  );
}
