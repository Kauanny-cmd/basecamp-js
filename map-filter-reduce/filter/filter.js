function filtraPares(arr){
    if(arr == ''){
        return 'Insira valores no array'
    } else{
        return  (arr.filter((item) => item%2 == 0))
    }
   
}

const num = [1, 2, 3, 6, 8]

console.log(filtraPares(num))