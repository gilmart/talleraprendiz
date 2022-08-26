function sumar(num1, num2,callback){
let suma= num1+num2
callback(suma)
}

sumar(1,2,function(parametro){
    console.log('la suma es: ' +parametro)
})


