import { uploadImage } from "@/app/lib/cloudinary";
import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Brands {
  id: string;
  brand_name: string;
}

export async function POST(req: NextRequest) {
  //extract token request
  const token = await getToken({ req });

  //validate token
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

  //parse body data
  const bodyData = await req.json();
  const { brand_name, brand_image_url } = bodyData;

  //brand_name required
  if (!brand_name) {
    return NextResponse.json(
      { message: "Brand name is required" },
      { status: 400 }
    );
  }
  if (!brand_image_url) {
    return NextResponse.json(
      { message: "Brand image is required" },
      { status: 400 }
    );
  }

  //check brand exist or not
  const checkBrand: Brands[] = await checkBrandExist(brand_name);
  if (checkBrand.length > 0) {
    return NextResponse.json({ message: "Brand name exist" }, { status: 400 });
  }
  let imageUrl: string = "";
  if (brand_image_url) {
    try {
      imageUrl = await uploadImage(brand_image_url);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed to upload image",
        },
        {
          status: 400,
        }
      );
    }
  }

  try {
    await prisma.$queryRaw`
    INSERT INTO brand (brand_name,brand_image_url,user_id)
    values(${brand_name}, ${imageUrl} , ${adminId}::uuid)
  `;

    return NextResponse.json(
      {
        message: "Brand created success",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating brand",
      },
      {
        status: 500,
      }
    );
  }
}

//helper function to check if brand exist
async function checkBrandExist(brand_name: string): Promise<Brands[]> {
  const formatBrandName = brand_name.toLowerCase();
  return await prisma.$queryRaw`
  SELECT id,brand_name 
  from brand
  WHERE LOWER(brand.brand_name) = ${formatBrandName}
  `;
}
