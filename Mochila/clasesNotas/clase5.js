


// --lina sincronica   [buscar peli si existe ]
// --lina sincronica   [la hora que vamos a escoger ]
// --lina sincronica   [disponibilidad de asientos ]
// --lina sincronica   [escogemos los asientos ]
// --lina sincronica   [pagamos]
// --lina asincronica  [asientos que y no estan disponibles, los seleccionados son reservados]
// --lina asincronica  [ticket al email]
// --lina sincronica   [se dan las entradas]


// let counter = 0;
// let timer = setInterval(()=>{
//     if (counter== 5){
//         clearInterval(timer)
//     }
//     console.log(`intervalo counter = ${counter}`)
//     counter ++;
// },1000)


const fs = require("fs")


const fecha = new Date();

// const hora = new Date().toLocaleTimeString();

const ARCHIVO = "clase.txt"

const fyh = `${ fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}`
// console.log(fyh)


fs.writeFile(ARCHIVO,`Nuevo ${fyh}`,(error) => {
    if(error) console.log("existe un error write papa")

    fs.readFile(ARCHIVO,(error,texto)=>{

        if(error) console.log("existe un error en read");
        console.log(`leyendo ${texto}`)

        fs.appendFile(ARCHIVO,"esto es un nuevo texto",(error)=>{
            if(error) console.log('hubo error x2')
        })


    })
})