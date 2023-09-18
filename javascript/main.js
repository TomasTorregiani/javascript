
let pregunta1 = "¿Quién ganó el primer premio nobel argentino?"
let pregunta2 = "Equipo grande del fútbol argentino"
let pregunta3 = "¿Quién fue el primer presidente argentino?"
let pregunta4 = "Pintor y escultor español"

let respuestaValida1 = "HOUSSAY"
let respuestaValida2 = "RIVER PLATE"
let respuestaValida3 = "BERNARDINO RIVADAVIA"
let respuestaValida4 = "PICASSO"

const arrayDatos = [
    {pregunta: pregunta1, respuesta: respuestaValida1, pistas:["El premio nobel fue en medicina", "Fue otorgado el 23 de octubre de 1947", "Nació en Buenos Aires el 10 de abril de 1887"]},
    {pregunta: pregunta2, respuesta: respuestaValida2, pistas:["Se fundó el 25 de Mayo de 1991", "Su estadio es apodado `el monumental`", "Sus colores son blanco y rojo"]},
    {pregunta: pregunta3, respuesta: respuestaValida3, pistas:["Lo apodaron `el mulato`", "Fué elegido el 9 de julio de 1816", "Pertenecía a ala unitaria"]},
    {pregunta: pregunta4, respuesta: respuestaValida4, pistas:["Nació en Malaga, España", "Su obra más importante fue `el guernica`", "Creador del cubismo"]},
]

let limiteParticipantes = 1
const arrayParticipantes = [];
let contadorParticipante = 0

let contadorPista = 0

const calcularPuntaje = (pistasUtilizadas) => {
    const valores = {
        0:100,
        1:75,
        2:50,
        3:25,
        4: 0
    }
    return valores[pistasUtilizadas]
}

while (arrayParticipantes.length < limiteParticipantes){
    
    let nombre = prompt (`Ingrese su nombre y apellido`)
    alert(`Bienvenido ${nombre}`) 
    arrayParticipantes.push({nombre, nota: 0})
    for (let contadorPregunta = 0; contadorPregunta < arrayDatos.length; contadorPregunta++){
        let respuesta = prompt(`La pregunta ${contadorPregunta+1} es: ${arrayDatos[contadorPregunta].pregunta}`).toUpperCase().trim()
        
        
        while(respuesta !== arrayDatos[contadorPregunta].respuesta && contadorPista < arrayDatos[contadorPregunta].pistas.length){
            alert (`La respuesta fue incorrecta, pista n${contadorPista}: ${arrayDatos[contadorPregunta].pistas[contadorPista]}`)
            
            contadorPista ++

            respuesta = prompt (`Ingrese nueva respuesta: `)
        }   

        if (contadorPista === arrayDatos[contadorPregunta].pistas.length){
            alert (`respuestas incorrectas, pasas a la siguiente preg. No sumasate puntos`)    
        } else { 
            arrayParticipantes[contadorParticipante].nota = arrayParticipantes[contadorParticipante].nota + calcularPuntaje(contadorPista)     
        }
        contadorPista=0
    }                             
    alert (`Participante ${arrayParticipantes[contadorParticipante].nombre}, tu puntaje es: ${arrayParticipantes[contadorParticipante].nota}`)              
    
    contadorParticipante++

}































