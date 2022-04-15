const lista = [
    {
        nome: 'água',
        preco: 2
    },
    {
        nome: 'salgadinho',
        preco: 4
    },
    {
        nome: 'faca',
        preco: 10
    }
]

const saldoDisponivel = 50

function Saldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, curr){
        return prev - curr.preco;
    }, saldoDisponivel)
}

console.log(Saldo(saldoDisponivel, lista))