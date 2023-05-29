const fs = require("fs")

class ManagerUsuario {

    constructor() {
        this.file= "Usuarios.json"
    }
    async existFile(){
        try {


            fs.accessSync(this.file)
            return true
            
        } catch (error) {
            return false
        }
    }


    async readFile(){
        try {
           
            const file = fs.promises.readFile(this.file, 'utf-8')
            if (this.existFile){
                let file =await this.readFile(this.file)
                file.push(obj);
            }
        } catch (error) {
            let text = JSON.stringify([{obj}],null, 2)
             fs.writeFile(this.file,text)
        }
    }

    async crearUsuario(obj){
        try {
            const existFile = await this.existFile();
            console.log(existFile)
            if(await this.existFile()){

            }
            this.file.push(obj)
            let text = JSON.stringify(file,null, 2)

            
        } catch (error) {
            let text = JSON.stringify([{obj}],null, 2)
             fs.writeFile(this.file,text)
            
        }
    }

    async consultarUsuario(){
        try {
            
        } catch (error) {
            
        }
    }
}

let test = new ManagerUsuario();


await test.crearUsuario({
    nombre: 'lucho',
    apellido: 'pardo',
    edad: 22,
    curso: 3
})

console.log(test.consultarUsuario())

