
// let dataBase = [
//     "lucho",
//     "nicolas",
//     "jose"
// ]


// class User {
//     get (req,res) {
//         res.json(dataBase)
//     }

//     create(req,res){
//         let {name} =req.body;
//         dataBase.push(name);
//         res.json(dataBase);
//     }
// }


// module.exports = new User();

// let dataBase = [
//     "lucho",
//     "nicolas",
//     "jose"
//   ];
  
//   class User {
//     get(req, res) {
//       res.json(dataBase);
//     }
  
//     create(req, res) {
//       let { name } = req.body;
//       dataBase = [...dataBase, name]; // Actualiza el arreglo dataBase sin modificarlo directamente
//       res.json(dataBase);
//     }
//   }
  
//   module.exports = new User();

let database = [
  "Federico",
  "Andres",
  "Emma"
]

class User {
  get(req, res){
    
    res.json(database);
  }

  create(req, res){
    let { name } = req.body;
    database.push(name);
    res.json(database);
  }
}

module.exports = new User();