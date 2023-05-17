class TicketManager {
    constructor(){
        this.eventos = [];
        this.usuarios = [];
    }

    validateId(){
        if(this.eventos.length){
            let idMayor = this.eventos.reduce((p,c)=>{
                return c.id > p.id ? c.id:p.id;
            },{id:0})
            return idMayor + 1;
        }
        return 1;
    }

    getEventos(){
        return this.eventos;
    }


    validateExist(arr){
        return arr.filter(obj => obj.id ===id);
    }

    agregarEvento(obj){
        let fechaAhora = new Date().toLocaleDateString()
        let {nombre, lugar, precio, capacidad = 50,fecha= fechaAhora } = obj;
        this.eventos.push({
            id:this.validateId(),
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes:[]
        })
    }

    aregarUsuario( obj ){
        this.usuario
    }
    // agregarUsuarioEvento(idEvento, idUsuario){
    //     if(validateExist(this.eventos,idEvento).length &&this.validateExist(this.usuarios,idUsuario).length){
    //         this.eventos = this.eventos.map(evento = {
    //             if(evento.id === idEvento){
    //                  evento.participantes.push(idUsuario)
    //                 return evento;
    //             }
    //         })
    //     }
    //     else{
    //         console.log('error')
    //     }

    // }
}