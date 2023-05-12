class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  getProducts() {
    return this.products;
  }
  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      throw new Error(`No se encontró ningún producto con ID ${productId}`);
    }
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    // Tirar error si el code de un producto es el mismo
    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
      throw new Error("Producto existente");
    }

    // Cada Producto tendra un id unico debido que siempre se suma el id +1
    this.id += 1;
    const newProductId = this.id.toString();

    // Agregando id al objeto mediente .push 
    const newProduct = { id: newProductId, title, description, price, thumbnail, code, stock };
    this.products.push(newProduct);

    return newProduct;
  }
  
}





