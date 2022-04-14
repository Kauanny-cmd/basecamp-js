function validaArr(arr, num){
    if(!arr && !num) throw new ReferenceError("Envie os paramentros")

    if(typeof arr !== 'object') throw new TypeError("Array não é do tipo objeto")

    if(typeof num !== 'number') throw new TypeError("Num não é do tipo número")

    if(arr.length !== num) throw new RangeError('Tamanho inválido') 

    return arr;
    
}