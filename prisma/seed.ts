const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const CategoriesSeedData = require("../public/demo-data/category-seed-data");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Brands....");

  const brands = Array.from({ length: 10 }, () => ({
    brand_name: faker.company.name(),
    brand_image_url: faker.image.url(),
    user_id: "efe98ada-0863-4609-b0c1-9cde300e64af",
  }));

  await prisma.brand.createMany({
    data: brands,
    skipDuplicates: true,
  });

  console.log("Seeding brands completed!");

  console.log("Seeding Categories.....");
  for (const categories of CategoriesSeedData) {
    await prisma.category.createMany({
      data: {
        category_name: categories.name,
        category_image_url: categories.image,
        user_id: "efe98ada-0863-4609-b0c1-9cde300e64af",
      },
      skipDuplicates: true,
    });
  }
  console.log("Seeding categories completed");

  console.log("Seeding Suppliers....");
  for (let i = 0; i < 500; i++) {
    await prisma.supplier.createMany({
      data: {
        supplier_name: faker.person.fullName(),
        supplier_email: faker.internet.email(),
        supplier_phone_number: faker.phone.number("+8801#########"),
        supplier_country: faker.location.country(),
        supplier_city: faker.location.city(),
        supplier_company_name: faker.company.name(),
        supplier_address: faker.location.streetAddress(),
        user_id: "efe98ada-0863-4609-b0c1-9cde300e64af",
      },
      skipDuplicates: true,
    });
  }
  console.log("Seeding suppliers completed");
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
