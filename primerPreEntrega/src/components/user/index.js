// const {router, Router} = require("express");
// const userController = require("./userController/userController")

// module.exports = app => {
//     let router = new Router();
//     app.use("/api/user",router);
//     router.get("/",userController.get);
//     router.post("/",userController.create);

// }

const {router, Router} = require("express");
const userController = require("./userController/userController")

module.exports = app => {
    let router = new Router();
    app.use("/api/user",router);
    router.get("/",userController.get);
    router.post("/",userController.create);

}