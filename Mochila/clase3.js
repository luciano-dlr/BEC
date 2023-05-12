// Metodo de array para comprobar 

let animales = ["loro", "gato", "hamster"];

// console.log(animales.includes("loro"));

// potencia con dos ** de 5
// console.log(5**2);


// const animalesSelva = Array.from(animales);

const animalesSelva = [...animales];
// console.log(animalesSelva);


let felipe = {
    age:20,
    birthay: "May 15",
    novia: false,
    peliculas: ["peli 1", "peli 2", "Matrix"],
    equipoFutbol:{
        nombre:"Gimnasia",
        titulos: 10,
        year: 1960,
    }
}

// Descontruir elementos de felipe
let {birthay, age, ...tutor} = felipe

// console.log("ecmascript 9 ",tutor)



// let productos = Object.keys(objetos);
// console.log(productos)


//PUNTO 1
// let resultado = objetos.reduce((prev,current, i) => {
    //     if(i == 0) return current;
    //     return{
        //         ...prev,
        //         ...current
        //     }
        // },{})
        
        
        // console.log(Object.keys(resultado));
        
        
//[
    //     'manzanas', 'peras',
    //     'carnes',   'jugos',
    //     'dulces',   'zandias',
    //     'huevos',   'panes'
    //   ]
    
    //PUNTO 2
    
    // let resultado = objetos.reduce((p,c) => {
        
        //     let values = Object.values(c)
        //     // [2,5,10,2,1]
        //     let total = values.reduce((p,c) => p + c, 0)  
        
        //     return p + total;
        // }, 0)
        
        // console.log(resultado)
        
        // hasOwnProperty trae los objetos que tienen manzanas
        
        
                // let cantidadManzanas = objetos.filter(obj => obj.hasOwnProperty("manzanas")).reduce((p,c)=>p + c.manzanas,0);
                // console.log(cantidadManzanas)



        let objetos = [
            {
                manzanas:2,
                peras:5,
                carnes:10,
                jugos:2,
                dulces:1
            },
            {
                manzanas:9,
                zandias:2,
                huevos:30,
                jugos:5,
                panes:10
            },
            {
                manzanas:3,
                peras:5,
                carnes:10,
                jugos:2,
                dulces:1
            },
        ]
        
        
        
        let resultadoTest = objetos.filter((a,b,c)=>{

            let total =   b;

            // console.log(`esto es` ,e)

            return total

        });
        
        // console.log(resultadoTest);
        
        

        
        
        


        
        

        
        
        
        
        
        











