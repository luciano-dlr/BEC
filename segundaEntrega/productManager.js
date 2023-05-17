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
          await fs.promises.writeFile(this.path, text);
          
          console.log('Producto agregado:', obj);
        } catch (error) {
          console.log('Error al agregar el producto:', error);
        }
        
      }

      async getProducts() {
         try {
             
             const read = await fs.promises.readFile(this.path, 'utf8');
             console.log('Estos son todos los productos',read);
             return read
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

      updateProduct(){
        
      }
      
    }
    
    
const nuevoProducto = new ProductManager();

// nuevoProducto.addProducto({
//   nombre: "producto prueba",
//   description: "Este es un producto prueba",
//   price:200,
//   thumbnail:"Sin imagen",
//   code:"abc123",
//   stock:25
// })


// console.log(nuevoProducto)

nuevoProducto.getProductById(2);

console.log(nuevoProducto);