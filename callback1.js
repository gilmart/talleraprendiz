function saludar (){
    setTimeout(function(){
        console.log("hola")
        despedir()
    },1000)
}

function despedir() {
    console.log("adios")
}
saludar()
