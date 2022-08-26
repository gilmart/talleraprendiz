/*
function mensajeExitoso(aleatorio){

    // let exitoso = ("Plano conseguido, listos para despegar")
     console.log(`Plano conseguido, ¡feliz viaje! ${aleatorio}`)
 }
 function mensajeError(aleatorio){
 
     // let exitoso = ("Plano conseguido, listos para despegar")
      console.log(`Plano falso conseguido, intente nuevamente con otra secuencia. ${aleatorio}`)
  }
 
 function planos(min,max,mensajeCallBack,mensajeCallBackError){
 
     let aleatorio = Math.floor((Math.random() * (max-min +1))+ min)
    
    if(aleatorio <= 10){
     mensajeCallBack(`Serie de plano: #${aleatorio} , `)
     return (aleatorio)
    }
 
    else{
 
     mensajeCallBackError(`Serie de plano: #${aleatorio} , `)
     return (aleatorio)
    }
 }
 
 planos(1,10,mensajeExitoso,mensajeError)
 
 */

 function filtrarPlanos (planos, arrancarNave){
    let filtro = planos.filter(function(plano){

        return (planos >= 1 && planos <=10)
    })
    arrancarNave(filtro)

 }

 let planos = [1,2,200,300,400,500]
 filtrarPlanos(planos, function(filtro){
    let cuenta = filtro.length
    if(cuenta > 0){
        console.log("arrancando nave")
    }
    else{
        ("buscando planos")
    }

 })

