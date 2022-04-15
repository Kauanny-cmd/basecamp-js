function somaNum(arr){
    return arr.reduce((prev, cur) => prev + cur)
}

const num = [1, 2, 3]

console.log(somaNum(num))