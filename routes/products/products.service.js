const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];

    this.generate(100);
  }

  async generate(amount) {

    const limit = amount || 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        image: faker.image.abstract(),
        price: faker.commerce.price()
      })
    }

    return this.products;
  }

  async list(size) {
    return size ? this.products.slice(0, size) : this.products;
  }

  async findOne(id) {
    const foundProduct = this.products.find(product => product.id === id);

    if (!foundProduct) {
      throw new Error("Not Found");
    }

    return foundProduct
  }

  async create(data) {

    const { name, image, price } = data;

    const newProduct = {
      id: faker.database.mongodbObjectId(),
      name,
      image,
      price
    }

    if (!name || !image || !price) {
      throw new Error("Invalid data");
    }

    this.products.push(newProduct);
    return newProduct;
  }


  async update(id, data) {
    const foundProductIndex = this.products.findIndex(product => product.id === id);

    if (foundProductIndex === -1) {
      throw new Error("Not Found");
    }

    const product = this.products[foundProductIndex];
    const updatedProduct = {
      ...product,
      ...data,
      id: product.id
    }
    this.products[foundProductIndex] = updatedProduct;

    return updatedProduct;

  }

  async delete(id) {
    const foundProductIndex = this.products.findIndex(product => product.id === id);

    if (foundProductIndex === -1) {
      throw new Error("Not Found");
    }

    this.products.splice(foundProductIndex, 1);

    return { id }

  }
}

module.exports = ProductsService
