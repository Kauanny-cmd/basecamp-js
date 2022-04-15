const uva = {
    preco: 2.5
}

const banana = {
    preco: 3.00
}

function comThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.preco
    }, thisArg)
}

const num = [1, 2, 3, 4]
console.log('this - uva',comThis(num, uva))
console.log('this - banana',comThis(num, banana))