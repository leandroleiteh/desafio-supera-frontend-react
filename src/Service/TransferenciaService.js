import ApiService from "./ApiService";

class TransferenciaService extends ApiService{

    constructor(){
        super('/api/banco/buscarTransferencias')
    }

    findAlltransferencias(){
        return this.get("/");
    }

    readByDate(dataInicio,dataFim) {
        return this.get(`?dataInicio=${dataInicio}&dataFim=${dataFim}`);
    }

    findByOperator(nomeOperadorTransacao){
        return this.get(`?nomeOperadorTransacao=${nomeOperadorTransacao}`);

    }

}

export default TransferenciaService