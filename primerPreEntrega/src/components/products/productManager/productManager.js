const fs = require("fs");
// import fs from "fs";
const { error } = require("console");



class ProductManager {

    constructor(){
      this.path = "./src/components/products/productManager/path/path.json";
    }

    async addProducto (obj){
      
        try {

          const existingData = await this.getProducts();

          let file = [];
          let id = 0;
          
          if (existingData) {
            file = JSON.parse(existingData);
            const nuevoId = file[file.length - 1];
            
            if (nuevoId && nuevoId.id) {
              id = nuevoId.id;
              
            }
          }

          const newProductId = id + 1;
          obj.id = newProductId;
          
          file.push(obj);
      
          let text = JSON.stringify(file, null,2);
          await fs.promises.writeFile(this.path,text);
          
          console.log('Producto agregado:', obj);

        } catch (error) {

          console.log('Error al agregar el producto:', error);
        }
        
      }

      async getProducts() {
        try {
          const fileData = await fs.promises.readFile(this.path, 'utf8');
      
          console.log('Estos son todos los productos', fileData);
      
          if (!fileData) {
            console.log('El archivo está vacío');
            return null;
          }
      
          const products = JSON.parse(fileData);
      
          if (!Array.isArray(products)) {
            console.log('El archivo no contiene un array de productos');
            return null;
          }
      
          return products;
        } catch (error) {
          console.log('Error al leer el archivo:', error);
          return null;
        }
      }
      
      async getProductById(productId) {
        try {
          const products = await this.getProducts();
      
          if (products) {
            const product = products.find((p) => p.id === productId);
      
            console.log('Este es el producto buscado via ID =>', product);
      
            if (!product) {
              console.log(`No se encontró ningún producto con ID => ${productId}`);
              return null;
            }
      
            return product;
          } else {
            console.log('No hay productos disponibles');
            return null;
          }
        } catch (error) {
          console.log('Error al obtener el producto:', error);
          return null;
        }
      }

      async updateProduct(productId,nombre,description,price,thumbnail,code,stock){
        try {
          const existingData = await this.getProducts();
      
          if (existingData) {
            const products = JSON.parse(existingData);
            const product = products.find((p) => p.id === productId);

            console.log('Este es el producto buscado via ID  para actualizar =>',product)
            if (!product) {
              console.log(`No se encontró ningún producto con ID => ${productId}`);
              return null;
            }
            // Actualizar los campos del producto
            product.nombre = nombre;
            product.description = description;
            product.price = price;
            product.thumbnail = thumbnail;
            product.code = code;
            product.stock = stock;

            // Guardar los cambios en el archivo
            const updatedData = JSON.stringify(products, null, 0);
            await fs.promises.writeFile(this.path, updatedData);

            console.log('Producto actualizado:', product);

            return product;
      
          
          } else {
            console.log('No hay productos disponibles');
            return null;
          }
        } catch (error) {
          console.log('Error al obtener el producto:', error);
          return null;
        }
      }
      

      async deletProduct(productId){
        try {
          const existingData = await this.getProducts();
          
          if (existingData) {
            const products = JSON.parse(existingData);
            const product = products.filter((p) => p.id !== productId);

            // console.log('estos son los productos filtrados ',product)
          
            // Si las dos constantes son iguales, significa que no se encontró ningún producto con el ID
            if (products.length === product.length) {
              throw new Error(`No se encontró ningún producto con ID => ${productId}`);
            }
            

            // Guardar los cambios en el archivo escribiendo l
            await fs.promises.writeFile(this.path, JSON.stringify(product, null, 2));
          

            console.log(`producto con id ${productId} Eliminado `);

            return productId;
          } else {
            console.log('No hay productos disponibles');
            return null;
          }
        } catch (error) {
          console.log('Error al obtener el producto:', error);
          return null;
        }
      }
      
    }

    module.exports = { ProductManager };