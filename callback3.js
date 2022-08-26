//callbackhell estudiar
function principal(nombre,funcionsecundaria){
    console.log('hola '+ nombre)
    funcionsecundaria()
}

principal('juan',function(){
    console.log('ya desayuno?')
})


