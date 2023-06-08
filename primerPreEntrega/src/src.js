
const express = require("express");
const PORT = 8080;
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require('body-parser');

class Server {
  constructor() {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }

  settings() {
    this.app.use(bodyParser.json());
    this.app.use("/francisco", express.static(`${__dirname}/public`));
  }

  middleware() {
    this.app.use(cors('*'));
    this.app.use((req, res, next) => {
      console.log("En mi middleware a nivel de app!");
      next();
    });
  }

  routes() {
    routes(this.app);
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  }
}
module.exports = new Server();

