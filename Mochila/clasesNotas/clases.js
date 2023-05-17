class Contador {
    static contadorGlobal = 0;
    constructor(name){
        this.name = name ;
        this.contador = 0;

    }
    getResponsable(){
        return `el responsable es ${this.name}`
        
    }

    contar (){
        this.contador++
        Contador.contadorGlobal++;
    }

    getCuentaLocal(){
        return this.contador;
    }

    getCuentaGlobal(){
        return Contador.getCuentaGlobal;
    }
}

let nico = new Contador('nico pa');

nico.contar()
console.log(nico);
nico.getCuentaLocal()
nico.contar()
nico.contar()
nico.contar()
console.log(nico);


