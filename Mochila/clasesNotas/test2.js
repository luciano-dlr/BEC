let students = ["messi", "Neymar"];


function mostrarLista(lista){
    if (lista.length){
        lista.forEach(e =>console.log(e))
    }else{
        console.log('lista vacia pa ')
    }
}

mostrarLista(students)