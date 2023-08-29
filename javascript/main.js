//Examen 

let pregunta1 = "Cuanto es: 2+2"
let pregunta2 = "Cuanto es: 3x3"
let pregunta3 = "Cuanto es: 20/5"
let pregunta4 = "Cuanto es: 100-55"
let pregunta5 = "Cuanto es: 4*5"

let respuestaValida1 = 4
let respuestaValida2 = 9
let respuestaValida3 = 4
let respuestaValida4 = 45
let respuestaValida5 = 20

let cantAlumnos = 5

for(let alumno=0; alumno<cantAlumnos; alumno++){
    let nota = 0   
    let nombre = prompt('Ingrese nombre')
    let apellido = prompt('Ingrese apellido')
    
    let respuesta1 = prompt(pregunta1)
    if (parseInt(respuesta1) === respuestaValida1) {
        nota = nota+2
    }
    let respuesta2 = prompt(pregunta2)
    if (parseInt(respuesta2) === respuestaValida2) {
        nota = nota+2
    }

    let respuesta3 = prompt(pregunta3)
    if (parseInt(respuesta3) === respuestaValida3) {
        nota = nota+2
    }
    let respuesta4 = prompt(pregunta4)
    if (parseInt(respuesta4) === respuestaValida4) {
        nota = nota+2
    }
    let respuesta5 = prompt(pregunta5)
    if (parseInt(respuesta5) === respuestaValida5) {
        nota = nota+2
    }

    alert(`La nota de ${nombre} ${apellido} es de ${nota}`)
}
