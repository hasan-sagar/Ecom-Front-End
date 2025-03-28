const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const CategoriesSeedData = require("../public/demo-data/category-seed-data");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Brands....");

  // Generate 100 brands with a user_id
  const brands = Array.from({ length: 100 }, () => ({
    brand_name: faker.company.name(),
    brand_image_url: faker.image.url(),
    user_id: "efe98ada-0863-4609-b0c1-9cde300e64af",
  }));

  // Create many brands in the database
  await prisma.brand.createMany({
    data: brands,
    skipDuplicates: true,
  });

  console.log("Seeding brands completed!");

  console.log("Seeding Categories.....");
  //Create categories seed
  for (const categories of CategoriesSeedData) {
    await prisma.category.createMany({
      data: {
        category_name: categories.name,
        category_image_url: categories.image,
        user_id: "efe98ada-0863-4609-b0c1-9cde300e64af",
      },
    });
  }
  console.log("Seeding categories completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
