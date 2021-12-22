const faker = require("faker");

const buildProductList = (size) => {
  const result = [];

  for (let i = 1; i <= size; i++) {
    result.push({
      id: i,
      image: "",
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slug: faker.lorem.slug,
    });
  }

  return result;
};

console.log(JSON.stringify(buildProductList(100), null, "  "));
