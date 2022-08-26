// funcion tradicional
/*
function Padawan(nombre,planeta,edad,estatura){
    this.nombre = nombre
    this.planeta = planeta
    this.edad = edad
    this.estatura = estatura
    this.actividad =  function(){
        if (edad > 15){
            console.log(resultado = `La actividad asignada es Manejo del sable de luz`)
        }
        else{
            console.log(resultado = `La actividad asignada es: Manejo de la fuerza`)
        }
        return resultado
    }

    this.datosCompletos =function(){
        return `\n` + this.nombre + ' '+ `\n` + this.planeta + ' ' + `\n` + this.edad + ' ' +`\n`+ this.estatura + ' ' +`\n` + resultado
    }
}


let padawan1 = new Padawan('juan','martes',16,'1.60')

console.log(padawan1.datosCompletos())
console.log(padawan1.actividad())

let padawan2 = new Padawan('jose','saturno',10,'1.40')
console.log(padawan2.datosCompletos())
console.log(padawan2.actividad())
*/

function crearAprendiz (nombre,planeta,edad,estatura,clasificarAprendiz){
    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,

    }

    clasificarAprendiz(datosAprendiz)
}


crearAprendiz('juan', 'tierra', 14, 1.70, function(aprendiz){
    if (aprendiz.edad >= 15){
        console.log(aprendiz.nombre + 'está clasificado en manejo de fuerza')
    }
    else{
        console.log(aprendiz.nombre + 'esta clasificado a la clase de luz')
    }

})