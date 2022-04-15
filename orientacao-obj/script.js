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

    sacar(valor){
        if(valor > this._saldo){
            return "Valor inválido"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente{
    constructor(agencia, num, saldo, cartaoCredito){
        super(agencia, num, saldo);
        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito;
    }
}