class ContaBancaria{
    constructor(agencia, num, tipo){
        this.agencia = agencia;
        this.num = num;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Valor inválido!"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, num, cartaoCredito){
        super(agencia, num);
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, num){
        super(agencia, num);
        this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, num){
        super(agencia, num);
        this.tipo = 'universitaria'
    }

    sacar(valor){
        if(valor > 500){
            return 'Valor inválido!'
        } else if(valor > this._saldo){
            return "Valor inválido!"
        }
        this._saldo = this._saldo - valor;
    }
}