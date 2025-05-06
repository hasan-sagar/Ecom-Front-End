const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const CategoriesSeedData = require("../public/demo-data/category-seed-data");

const prisma = new PrismaClient();

async function main() {
  // console.log("Seeding Brands....");
  // const brands = Array.from({ length: 100 }, () => ({
  //   brand_name: faker.company.name(),
  //   brand_image_url: faker.image.url(),
  //   user_id: 2,
  // }));
  // await prisma.brand.createMany({
  //   data: brands,
  //   skipDuplicates: true,
  // });
  // console.log("Seeding brands completed!");
  // console.log("Seeding Categories.....");
  // for (const categories of CategoriesSeedData) {
  //   await prisma.category.createMany({
  //     data: {
  //       category_name: categories.name,
  //       category_image_url: categories.image,
  //       user_id: 2,
  //     },
  //     skipDuplicates: true,
  //   });
  // }
  // console.log("Seeding categories completed");
  // console.log("Seeding Suppliers....");
  // for (let i = 0; i < 500; i++) {
  //   await prisma.supplier.createMany({
  //     data: {
  //       supplier_name: faker.person.fullName(),
  //       supplier_email: faker.internet.email(),
  //       supplier_phone_number: faker.phone.number("+8801#########"),
  //       supplier_country: faker.location.country(),
  //       supplier_city: faker.location.city(),
  //       supplier_company_name: faker.company.name(),
  //       supplier_address: faker.location.streetAddress(),
  //       user_id: 2,
  //     },
  //     skipDuplicates: true,
  //   });
  // }
  // console.log("Seeding suppliers completed");
  console.log("Seeding products...");
  const userId = 2;
  const brandId = 101;
  const categoryId = 1;
  const supplierId = 1;
  // Seed 100 products
  for (let i = 0; i < 100; i++) {
    const slNo = i + 1;
    const productName = faker.commerce.productName();
    const productSlug = faker.helpers.slugify(productName).toLowerCase();
    const product = await prisma.product.create({
      data: {
        product_name: productName,
        product_description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price(10, 1000)),
        stock: faker.number.int({ min: 0, max: 100 }),
        category_id: categoryId,
        brand_id: brandId,
        user_id: userId,
        supplier_id: supplierId,
        product_slug: productSlug,
        is_featured: faker.datatype.boolean(),
        is_new_arrival: faker.datatype.boolean(),
        status: faker.helpers.arrayElement([
          "ACTIVE",
          "INACTIVE",
          "OUT_OF_STOCK",
        ]),
        shipping_cost: parseFloat(faker.finance.amount(0, 20)),
        discount_percentage: faker.datatype.boolean()
          ? parseFloat(faker.finance.amount(5, 50))
          : null,
        sale_price: parseFloat(faker.commerce.price(5, 500)),
      },
      // skipDuplicates: true,
    });
    console.log(`Created product [SL No: ${slNo}]: ${product.product_name}`);

    // const imageCount = faker.number.int({ min: 2, max: 5 });
    // const imagesData = Array.from({ length: imageCount }, () => ({
    //   image_url: faker.image.urlLoremFlickr({ category: "product" }),
    //   product_id: product.id, // Associate the image with the product ID
    // }));
    // // Bulk create product images
    // await prisma.product_image.createMany({
    //   data: imagesData,
    //   skipDuplicates: true,
    // });
    const imageCount = faker.number.int({ min: 2, max: 5 });

    // Use a Set to avoid duplicate URLs per product
    const imageUrls = new Set<string>();
    while (imageUrls.size < imageCount) {
      imageUrls.add(faker.image.urlLoremFlickr({ category: "product" }));
    }

    const imagesData = Array.from(imageUrls).map((url) => ({
      image_url: url, // nullable is fine
      product_id: product.id,
    }));

    await prisma.product_image.createMany({
      data: imagesData,
      skipDuplicates: true,
    });
    console.log(
      `Added ${imageCount} images for product: ${product.product_name}`
    );
  }
  console.log("Product seeding completed!");
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
