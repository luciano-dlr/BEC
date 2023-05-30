import express from "express";
import { ProductManager } from "./productManager.js";

const nuevoProducto = new ProductManager();

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>aplicacion ProductManager</h1>");
});

// funcion para agregar productos a modo de utilizar la funcion del product manager y no hardcodear el archivo.json
app.get("/add", async (req, res) => {
    await nuevoProducto.addProducto({
      nombre: "producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "Sin imagen",
      code: "abc123",
      stock: 25
    });
    const products = await nuevoProducto.getProducts();
    const parsedProducts = JSON.parse(products);
    res.send(`<h1>Producto Agregado</h1><h2>Productos</h2><pre>${JSON.stringify(parsedProducts, null, 2)}</pre>`);
  });

  // obtener los productos por ID
  app.get("/products/:id", async (req, res) => {
    const productId = parseInt(req.params.id); // Obtener el ID del parámetro de la URL y convertirlo a un número entero
  
    const product = await nuevoProducto.getProductById(productId);
    
  
    if (product) {
      res.send(`<h2>Producto</h2><pre>${JSON.stringify(product, null, 2)}</pre>`);
    } else {
      res.send(`No se encontró ningún producto con ID ${productId}`);
    }
  });

  // obtener todos los productos /products o por req.query el limite de los productos a filtrar '?limit=5'
  app.get("/products", async (req, res) => {
    const limit = parseInt(req.query.limit); // Obtener el valor del parámetro de consulta 'limit' y convertirlo a un número entero
  
    const products = await nuevoProducto.getProducts();
  
    if (products) {
      let parsedProducts = JSON.parse(products);
  
      if (limit) {
        parsedProducts = parsedProducts.slice(0, limit); // Obtener los primeros 'limit' productos si se especifica el parámetro 'limit'
      }
  
      res.send(`<h2>Productos</h2><pre>${JSON.stringify(parsedProducts, null, 2)}</pre>`);
    } else {
      res.send("No hay productos disponibles");
    }
  });



app.listen(port, () => console.log(`http://localhost:${port}`));


// testing 

// 1) http://localhost:8080/products

// 2) http://localhost:8080/products?limit=5

// 3) http://localhost:8080/products/2