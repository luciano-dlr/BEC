
// const fs = require("fs")

// const fileName = 'test';

// async function manejadorArchivos(fileName){
//     try {
//         const info = {
//             contenidoString:"",
//             contendioObjeto:{},
//             size: 0  

//         }
//         if(!fs.existsSync(fileName))throw new Error('tu archivo no existe');
//         const packageInfo = await fs.promises.readFile(fileName,'utf-8');

//         // let stats = (await fs.promises.stat(fileName)).size;


//         // info.contenidoString = JSON.stringify(packageInfo)
//         // console.log(packageInfo)
//         info.contenidoString = packageInfo;
//         info.contendioObjeto=JSON.parse(packageInfo)
//         info.size = (await fs.promises.stat(fileName)).size;
//         console.log(info)
//     } catch (error) {
//         console.log(`'error leio'${Error}`);
//     }
// }

// manejadorArchivos(fileName)

const fs = require("fs");

const fileName = 'package2.json';

async function manejadorArchivos(fileName){
    try {
        const info = {
            contenidoString: "",
            contendioObjeto: {},
            size: 0
        };

        if (!fs.existsSync(fileName)) {
            throw new Error('Tu archivo no existe');
        }

        const packageInfo = await fs.promises.readFile(fileName, 'utf-8');

        info.contenidoString = packageInfo;
        info.contendioObjeto = JSON.parse(packageInfo);
        info.size = (await fs.promises.stat(fileName)).size;
        console.log(info);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

manejadorArchivos(fileName);