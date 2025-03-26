import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //extract token request
  const token = await getToken({ req });

  //validate token
  //   if (!token) {
  //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  //   }

  //   const adminId = token.id;

  //   if (!adminId) {
  //     return NextResponse.json(
  //       { message: "Unauthorized: Missing user ID in token" },
  //       { status: 401 }
  //     );
  //   }

  //parse body data
  const bodyData = await req.json();
  const { brand_name } = bodyData;

  //brand_name required
  if (!brand_name) {
    return NextResponse.json(
      { message: "Brand name is required" },
      { status: 400 }
    );
  }

  //check brand exist or not
  const checkBrand = await checkBrandExist(brand_name);
  if (checkBrand.length > 0) {
    return NextResponse.json({ message: "Brand name exist" }, { status: 400 });
  }

  await prisma.$queryRaw`
    INSERT INTO brand (brand_name,brand_image_url,user_id)
    values(${brand_name},"Dummy Url" , ${"efe98ada-0863-4609-b0c1-9cde300e64af"}::uuid)
  `;

  return NextResponse.json(checkBrand);
}

//helper function to check if brand exist
async function checkBrandExist(brand_name: string) {
  const formatBrandName = brand_name.toLowerCase();
  return await prisma.$queryRaw`
  SELECT id,brand_name 
  from brand
  WHERE LOWER(brand.brand_name) = ${formatBrandName}
  `;
}
