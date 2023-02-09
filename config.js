module.exports = {
  app: {
    port: 4080,

    products: {
      defaultProduct: {
        //id for a testProduct
        id: "ba1295db206da828609949ad",
        name: "TestProduct(invincible product)"
      }
    },
    whitelist: {
      enable: false,
      hosts: ["www.example1.com"]
    }
  }
}
