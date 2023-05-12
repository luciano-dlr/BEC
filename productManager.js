class ProductManager {

    constructor(){
        this.products = []
        this.id = 0
    }

    getProducts() {
        return this.products;
      }

    addProduct(title,description,price,thumbnail,code,stock){
        
        //Validacion por si existe un producto ingresado con un codigo ya existente
        const existe = this.products.find((p)=>p.code === code);
        
        if(existe){
            throw new Error ('--------------------Campo "code" repetido, ingrese otro codigo -----------------------')
        }

        //Generacion de un id unico incrementable 
        this.id += 1;
        const newProductId = this.id;
        const newProduct = {id: newProductId,title,description,price,thumbnail,code,stock};


        //validacion de si todos los campos estan completados, debido que si no completa el usuario es undefined por default
        //Intente usar el metodo some() pero no puedo usarlo debido que es un metodo para arrays, se puede hacer esto con algun metodo?
        for (const campos in newProduct) {
            if (newProduct[campos] === undefined) {
                throw new Error('---------------------Debe completar todos los campos para agregar un producto ---------------------------');
            }
        }
        
        // Add del nuevo producto 
        this.products.push(newProduct);
        
        return newProduct;
    }

      getProductById(productId) {
        const product = this.products.find((product) => product.id === productId);
        if (!product) {
          console.log(`No se encontró ningún producto con ID => ${productId}`);
        }
        return product;
      }

}

// Proceso de testing

//1) Se creará una instancia de la clase “ProductManager”
let nuevoProducto = new ProductManager();

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
const todos = nuevoProducto.getProducts();

//3) Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen” 
//code:”abc123”,
//stock:25

nuevoProducto.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)

//4) El objeto debe agregarse satisfactoriamente con un id generado 

console.log(todos)

//5) Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

// const todos = nuevoProducto.getProducts();

//6) Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

// nuevoProducto.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

const id = nuevoProducto.getProductById(2)














