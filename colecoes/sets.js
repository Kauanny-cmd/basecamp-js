function valoresUnicos(arr){
    let unicos = new Set(arr)
    return[...unicos]
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(valoresUnicos(arr))