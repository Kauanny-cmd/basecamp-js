const uva = {
    preco: 2.5
}

const banana = {
    preco: 3.00
}

function frutas(){
    const quantidade = [1, 2, 3, 4]

    return quantidade.map(function(item){
       return item * this.preco
    }, uva)
}

console.log(frutas())