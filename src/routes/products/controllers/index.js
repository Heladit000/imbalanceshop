const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const config = require('../../../../config');

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
        price: parseInt(faker.commerce.price(100, 500)),
        locked: faker.datatype.boolean()
      })
    }

    this.products.push({
      ...this.products[0],
      id: config.app.products.defaultProduct.id,
      name: config.app.products.defaultProduct.name,
      locked: false
    })

    return this.products;
  }

  async list(size) {
    return size ? this.products.slice(0, size) : this.products;
  }

  async findOne(id) {
    const foundProduct = this.products.find(product => product.id === id);

    if (!foundProduct) {
      throw boom.notFound("Product not found");
    }

    if (foundProduct.locked) {
      throw boom.locked("Product locked");
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
      throw boom.badReques("The product need name, image and price");
    }

    this.products.push(newProduct);
    return newProduct;
  }


  async update(id, data) {
    const foundProductIndex = this.products.findIndex(product => product.id === id);

    if (foundProductIndex === -1) {
      throw boom.notFound("Product not found");
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
      throw boom.notFound("Product not found");
    }

    this.products.splice(foundProductIndex, 1);

    return { id }

  }
}

module.exports = ProductsService
