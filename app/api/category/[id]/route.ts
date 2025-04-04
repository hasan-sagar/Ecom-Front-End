import prisma from "@/app/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface Category {
  id: string;
  category_name: string;
}

//delete category
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  // Extract token from the request
  const token = await getToken({ req });

  // Validate token
  //   if (!token) {
  //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  //   }

  //role
  //   const role = token.role;
  //   if (role !== "admin") {
  //     return NextResponse.json(
  //       {
  //         message: "Forbidden Resource",
  //       },
  //       {
  //         status: 403,
  //       }
  //     );
  //   }

  try {
    //check if category exist and delete
    const deleteResult = await deleteCategory(id);
    return deleteResult;
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting category" },
      { status: 500 }
    );
  }
}

//helper function to delete a category
async function deleteCategory(categoryId: string) {
  //check if category exist
  const existingCategory: Category[] = await prisma.$queryRaw`
    SELECT id,category_name
    FROM category
    WHERE category.id = ${categoryId}::uuid
  `;

  //if no category found
  if (existingCategory.length < 1) {
    return NextResponse.json(
      {
        message: "No category found to delete",
      },
      {
        status: 404,
      }
    );
  }

  //delete the category
  await prisma.$executeRaw`
    DELETE FROM category
    WHERE category.id=${categoryId}::uuid
  `;

  //return success response
  return NextResponse.json(
    {
      message: "Category delete successfully",
    },
    {
      status: 200,
    }
  );
}

//update category
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  // Extract token from the request
  const token = await getToken({ req });

  // Validate token
  //   if (!token) {
  //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  //   }

  //role
  //   const role = token.role;
  //   if (role !== "admin") {
  //     return NextResponse.json(
  //       {
  //         message: "Forbidden Resource",
  //       },
  //       {
  //         status: 403,
  //       }
  //     );
  //   }

  //body data
  const bodyData = await req.json();
  const { category_name } = bodyData;

  if (!category_name) {
    return NextResponse.json(
      {
        message: "Category Name required to update",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const updateCategoryResult = await updateCategory(id, category_name);
    return updateCategoryResult;
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating category" },
      { status: 500 }
    );
  }
}

//helper function to update category
async function updateCategory(categoryId: string, categoryName: string) {
  //check if category exist
  const existingCategory: Category[] = await prisma.$queryRaw`
    SELECT id,category_name
    FROM category
    WHERE category.id = ${categoryId}::uuid
`;

  //if no category found
  if (existingCategory.length < 1) {
    return NextResponse.json(
      {
        message: "No category found to delete",
      },
      {
        status: 404,
      }
    );
  }

  //update the category
  await prisma.$executeRaw`
    UPDATE category
    SET category_name = ${categoryName}
    WHERE category.id = ${categoryId}::uuid
  `;
  //return succsess response

  return NextResponse.json(
    {
      message: "Category updated successfully",
    },
    {
      status: 201,
    }
  );
}
