class ContaBancaria{
    constructor(agencia, num, tipo, saldo){
        this.agencia = agencia;
        this.num = num;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }

    
}