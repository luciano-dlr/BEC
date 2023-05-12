
let students = ["messi", "Neymar"]


function addAge (jugadores =[], edad = 30){ 
    return jugadores.map (jugador => {

        edad ++;

        return {name:jugador, age:edad};
    })
}

console.log(addAge(students))



//ejemplo .map
let elDoble = num => num * 2 ;

//forma junior
// console.log(`el doble de 4 es ${elDoble(4)})


//forma sinior 

let numeros  = [2,3,4,5,6];

let dobles = numeros.map(elDoble)
console.log(dobles)


// sacar duda! 
if(typeof students === 'asd'){
    console.log(students)
};

