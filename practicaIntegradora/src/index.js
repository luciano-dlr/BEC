const express = reqire('express');
const cors = require('cors');
const serverRoutes = require("./routes");
const path = require("path")

class Server {

    constructor (){
        this.app = express();
        this.settings();
        this.middlewares();
        this.route();
    }
    

    settings(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static(`${_dirname}/public`))
        

    }

    middlewares(){
        this.app.use(cors("*"));


    }

    route(){
        serverRoutes(this.app);


    }

    views(){
        this.app.set("views",path.join(_dirname,"views"));
        this.app.set("view engine","ejs")
    }

    listen(){

        this.app.listen(3000,()=> {console.log(`http:localhost:3000`)})

    }
}


modeule.exports = new Server();