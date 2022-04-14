function validaArr(arr, num){
    try{
       if(!arr && !num) throw new ReferenceError("Envie os paramentros")

    if(typeof arr !== 'object') throw new TypeError("Array não é do tipo objeto")

    if(typeof num !== 'number') throw new TypeError("Num não é do tipo número")

    if(arr.length !== num) throw new RangeError('Tamanho inválido') 

    return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log(e.message)
            console.log("Erro do tipo ReferenceError")
        } else if(e instanceof TypeError){
            console.log(e.message)
            console.log("Erro do tipo TypeError")
        } else if(e instanceof RangeError){
            console.log(e.message)
            console.log("Erro do tipo RangeError")
        }
    }

}

console.log(validaArr([1,2,3,4], 4))