const tareas = [
    {id:1 , descripcion: 'hacer investigacion', completada: true},
    {id:2 , descripcion: 'crear plan de proyecto', completada: true},
    {id:3 , descripcion: 'desarrollar codigo', completada: false},
    {id:4 , descripcion: 'realizar pruebas', completada: false},
    {id:5 , descripcion: 'desplear aplicacion', completada: false},
];


// 1) Necesitamos obtener  un nuevo  array con solamente  las descriptciones de las tareas  que aun no han sido 
// Completadas, y en mayuscula . Representar en consola 


// retornamos solo las tareas en false realizando un .filter, pasando como parametro tarea que lo designamos con tarea.completada
// y que sea validado por un false con un return implicito en una sola linea

console.log('Respuesta ejercicio 1 ')
const tareasPendientes = tareas
    .filter(tarea => tarea.completada === false)
    .map(tarea => tarea.descripcion.toLocaleUpperCase())
    .forEach(descripcion => console.log(descripcion))
    console.log('-------------------------------------- \n \n')


// 2) Existen tareas pendientes?

// let tareasPendientes2 = false ;

// for ( const tarea of tareas){
//     if(tarea.completada === false ){
//         tareasPendientes2 = true ;
//         break;
//     }
// }

// console.log(tareasPendientes2)

// Some itera y solo checkea si alguno no cumple la funcion y reresa un true 
let existenTreasPendientes = tareas.some(tarea => tarea.completada === false );


// Every itera todos los objetos valdiando una key para devolver un booleano, tiene que validar todos los objetos para devolver un true 
let existenTreasPendientes2 = tareas.every(tarea => tarea.completada === false );


console.log('Existen tareas pendientes? ',existenTreasPendientes)


// Cuantas tareas hay completadas?

// ejemplo reduce
let numeros = [1,2,3,4,5,6];

let total = numeros.reduce((prev,current,i) =>{

    // console.log(`index ${i})- estamos sumando el valor previo ${prev}, con el numero actual ${current}, con un resultado final de iteracion ${prev + current}`)

    return prev + current ;

},0)

// console.log(`resultado final ${total}`)


// 3) Cuantas tareas hay completadas?

const tareasCompletadasCount = tareas.reduce((prev,current,i)=> current.completada === true ? prev + 1 : prev,0)

console.log(`Las tareas completadas son ${tareasCompletadasCount}`)


// 4) Existe alguna tarea con el nombre 'Realizar Prueba' ?


let buscar = 'Realizar Pruebas'

let respuesta4Find = tareas.find(tarea => tarea.descripcion.toLocaleLowerCase() === buscar.toLocaleLowerCase());

let respuesta4Filter = tareas.filter(tarea => tarea.descripcion.toLocaleLowerCase() === buscar.toLocaleLowerCase());





console.log('respuesta 4 Find',respuesta4Find)
console.log('respuesta 4 Filter',respuesta4Filter)


let animales = ["perro","gato", "aguila"]

console.log(animales.includes("aguila")) // Nos devuelve un bool si existe ese string


// 5) Existe un iphone 12????

const prductos = [
    {id: 1, nombre:'iphone 12', precio:999},
    {id: 2, nombre:'galaxy s21', precio:888},
    {id: 3, nombre:'poco phone', precio:999}
];

let existe = 'iphone 12';

let respuesta = prductos.some(prductos => prductos.nombre.includes(existe)) ? 'si existe el producto ' : 'lo sentimos no tenemos ese producto';

console.log(respuesta)