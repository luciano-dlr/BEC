const sumar = (a , b ) => a + b;
const restar = (a , b ) => a - b;
const multiplicar = (a , b ) => a * b;
const dividir = (a , b ) => a / b;

const realizarOp = (a,b,cb) => {



console.log('la operation es igual a',cb(a,b))

return ;

}

// realizarOp(1,1,sumar);

//Promesa

const dividirPromesa = (dividiendo , divisor ) => {

    return new Promise((resolve,reject)=>{
        if(divisor=== 0)reject('no s epuede dividir en 0 ')
        resolve(dividiendo/divisor)
    })


}

// dividirPromesa(3,4).then(result => console.log(result)).catch(e=>{console.log(e)});

const funcionAsync = async ( ) =>{

    try {
        const resultado = await dividirPromesa(3,0)
        console.log(resultado)
    } catch (error) {
        console.log(`   error ${error}`)
        
    }

}

// funcionAsync();