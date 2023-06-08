const { Router } = require("express");
const { ProductManager } = require("./productManager/productManager");


const nuevoProducto = new ProductManager();

module.exports = function (app) {
  let router = Router();

  app.use("/api", router);


  // obtener todos los productos /products o por req.query el limite de los productos a filtrar '?limit=5'
  app.get("/api/products", async (req, res) => {
    const limit = parseInt(req.query.limit);// Obtener el valor del parámetro de consulta 'limit' y convertirlo a un número entero

    const products = await nuevoProducto.getProducts(); // Esperar la resolución de la promesa

    if (products) {
      let parsedProducts = products;

      if (limit) {
        parsedProducts = parsedProducts.slice(0, limit);// Obtener los primeros 'limit' productos si se especifica el parámetro 'limit'
      }

      res.send(`<h2>Productos</h2><pre>${JSON.stringify(parsedProducts, null, 2)}</pre>`);
    } else {
      res.send("No hay productos disponibles");
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    const productId = parseInt(req.params.id); // Obtener el valor del parámetro de ruta 'id' y convertirlo a un número entero
  
    const product = await nuevoProducto.getProductById(productId); // Obtener el producto por su ID
  
    if (product) {
      res.send(`<h2>Producto</h2><pre>${JSON.stringify(product, null, 2)}</pre>`);
    } else {
      res.send(`No se encontró ningún producto con ID ${productId}`);
    }
  });

  app.post('/api/products', async (req, res) => {
    const { nombre, description, price, thumbnail, code, stock } = req.body;

    // Verificar si se proporcionaron todos los datos necesarios
    if (!nombre || !description || !price || !thumbnail || !code || !stock) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const product = {
      nombre,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    await nuevoProducto.addProducto(product);

    res.status(201).json({ message: 'Producto agregado exitosamente', product });
  });
  


};