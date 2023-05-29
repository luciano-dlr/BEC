import express from "express";
import { ProductManager } from "./productManager.js";

const nuevoProducto = new ProductManager();
nuevoProducto.getProducts();
console.log(nuevoProducto);

console.log(nuevoProducto);

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>aplicacion ProductManager</h1>");
});

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

app.get("/products", async (req, res) => {
    const products = await nuevoProducto.getProducts();
    const parsedProducts = JSON.parse(products);
    res.send(`<h2>Productos</h2><pre>${JSON.stringify(parsedProducts, null,2 )}</pre>`);
  });

  app.get("/products", async (req, res) => {
    const limit = req.query.limit || 0; // Obtener el valor del parámetro 'limit' de la solicitud o 0 por defecto
    const products = await nuevoProducto.getProducts();
    const parsedProducts = JSON.parse(products);
    const limitedProducts = limit > 0 ? parsedProducts.slice(0, limit) : parsedProducts; // Limitar los resultados si se proporciona un valor de 'limit' mayor a 0
  
    res.send(`<h2>Productos</h2><pre>${JSON.stringify(limitedProducts, null, 2)}</pre>`);
  });




app.listen(port, () => console.log(`http://localhost:${port}`));