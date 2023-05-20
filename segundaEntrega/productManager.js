const { error } = require("console");
const fs = require("fs");


class ProductManager {

    constructor(){
        // this.products = []
        // this.id = 0
        this.path = "./path/path.json"
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
             // readFile de this.path para traer todos los productos en la constante read
            const read = await fs.promises.readFile(this.path, 'utf8');

             console.log('Estos son todos los productos', read);

             if(read.length=== -1) throw error ('el archivo esta vacio', read)
            

             return read;

           } catch (error) {
  
             console.log('Error al leer el archivo:', error);

             return null;
             
           }
       }
      
       async getProductById(productId) {
        try {
          const existingData = await this.getProducts();
      
          if (existingData) {
            const products = JSON.parse(existingData);
            const product = products.find((p) => p.id === productId);

            console.log('Este es el producto buscado via ID =>',product)

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
            const updatedData = JSON.stringify(products, null, 2);
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
    
// Testing

// 1 ) Se creará una instancia de la clase “ProductManager”
const nuevoProducto = new ProductManager();

// 2 ) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

// nuevoProducto.getProducts()
// console.log(nuevoProducto);

// 3 ) Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25


nuevoProducto.addProducto({
  nombre: "producto prueba",
  description: "Este es un producto prueba",
  price:200,
  thumbnail:"Sin imagen",
  code:"abc123",
  stock:25
});


console.log(nuevoProducto);

// 4 ) El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

// nuevoProducto.addProducto({
//   nombre: "producto prueba",
//   description: "Este es un producto prueba",
//   price:200,
//   thumbnail:"Sin imagen",
//   code:"abc123",
//   stock:25
// })
// console.log(nuevoProducto);

// 5 ) Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

// nuevoProducto.getProducts()
// console.log(nuevoProducto);

// 6 ) Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.

// nuevoProducto.getProductById(2)
// console.log(nuevoProducto);

// console.log(nuevoProducto)

// 7 ) Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.

// nuevoProducto.updateProduct(2, "Nuevo nombre", "Nueva descripción", 150, "Nueva imagen", "nuevoCodigo", 10);
// console.log(nuevoProducto)

// 8 ) Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

// nuevoProducto.deletProduct(1)
