let numeros = [1,2,3,4,5,6];

let total = numeros.reduce((prev,current,i,array) =>{

    console.log(`index ${i})- estamos sumando el valor previo ${prev}, con el numero actual ${current}, con un resultado final de iteracion ${prev + current}, `)

    // console.log('este es el array trabajado ',array)
   
    return prev + current ;

},0)

console.log(`resultado final ${total}`)
