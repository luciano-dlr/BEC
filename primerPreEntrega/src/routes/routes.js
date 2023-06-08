const userApi = require ("../components/user");
const petsApi = require ("../components/products/products");





module.exports = app  => {
    userApi(app);
    petsApi(app);
    app.get("/",(req,res)=> res.send("ok!"));
}