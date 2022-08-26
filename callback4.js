//declarando la principal
function principal(numeros,callback){
setTimeout(function(){
    let suma =0
    numeros.forEach(function(numero){
        suma =suma+numero
    })
    callback(suma)
},3000)
}

//llamar a la principal
let arreglo=[1,2,3,4,5]
principal(arreglo,function(parametro){
    console.log('la suma es: ' +parametro)
})




// TALLER 3
//1. random - genrar aletaorio los datos de entrada