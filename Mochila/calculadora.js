class Calculadora{

    constructor(){

    }

    suma(a,b){
        return new Promise((resolve,reject)=>{
            if(a === 0 || b === 0)reject('operation inecesaria')
            const resultado = a + b ;

            if(resultado <= 0)reject('la calculadora solo debe devolver valores positivos ')

            resolve(resultado);
        })
    }

    resta(a,b){
        return new Promise((resolve,reject)=>{
            if(a === 0 || b === 0)reject('operation inecesaria')
            const resultado = a - b ;

            if(resultado <= 0)reject('la calculadora solo debe devolver valores positivos ')

            resolve(resultado);
        })
    }

    multiplicacion(a,b){
        return new Promise((resolve,reject)=>{
            if(a < 0 || b < 0)reject('solo valores positivos')
           

           

            resolve( a * b);
        })
    }

    division(a,b){
        return new Promise((resolve,reject)=>{
            if( b === 0)reject('solo valores positivos')
    
            resolve( a / b);
        })
    }

}


async function calculos() {

    try {
        const calculadora = new Calculadora();
        let suma = await calculadora.suma(2,3);
        
        let resta = await calculadora.resta(suma,4);

        let multiplicacion = await calculadora.multiplicacion(resta,100);

        let division = await calculadora.division(multiplicacion,2)
        console.log('el resultado de todas las operaciones es ',division)
    } catch (error) {
        console.log(`error ${error}`)
    }
    
}


calculos()