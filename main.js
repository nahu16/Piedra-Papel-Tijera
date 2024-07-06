

const body = document.querySelector("body")
let nombreJugador=[]

const nombreJuego = document.createElement("h1")
nombreJuego.innerHTML= "Piedra ✊🏻 - Papel 🖐🏻 - Tijeras ✌🏻"  
body.appendChild(nombreJuego)

const login = document.createElement("input")
login.placeholder= "Ingresa tu nombre:"  
body.appendChild(login)

const jugar = document.createElement("button")
jugar.innerHTML="Jugar"
jugar.addEventListener("click", function(){
    nombreJugador.push(login.value)
    console.log(nombreJugador)  

const container = document.createElement("div")
body.appendChild(container)

let jugador1 = []

const titulo = document.createElement("h1")
titulo.innerHTML = "Elegi alguna de las opciones:"
titulo.classList.add("titulo")
container.appendChild(titulo)

const piedra = document.createElement("button")
piedra.innerHTML= "PIEDRA"
piedra.classList.add("piedra")
piedra.addEventListener("click",function(){
    jugador1.push("PIEDRA")
    console.log(jugador1)
    juego()
})
container.appendChild(piedra)

const papel = document.createElement("button")
papel.innerHTML= "PAPEL"
papel.classList.add("papeles")
papel.addEventListener("click",function(){
    jugador1.push("PAPEL")
    console.log(jugador1)
    juego()
})
container.appendChild(papel)

const tijeras = document.createElement("button")
tijeras.innerHTML= "TIJERA"
tijeras.classList.add("tijera")
tijeras.addEventListener("click",function(){
    jugador1.push("TIJERA")
    console.log(jugador1)
    juego()
})
container.appendChild(tijeras)



console.log(jugador1)


function juego(){
let opciones = ['PIEDRA','PAPEL','TIJERA'] 
let opcionesAleatorias = Math.floor(Math.random()*opciones.length)
let objetoAleatorio = opciones[opcionesAleatorias]

const oponente = objetoAleatorio

alert (`el oponente eligio ${oponente}`);
const marcador = []


if (jugador1==oponente){
    marcador.push("EMPATE")
}else if (jugador1 == "PIEDRA" && oponente == "PAPEL"){
    marcador.push("Perdiste")
}else if (jugador1 == "PIEDRA" && oponente == "TIJERA"){
    marcador.push ("Ganaste")
}else if (jugador1 == "PAPEL" && oponente == "TIJERA"){
    marcador.push ("Perdiste")
}else if (jugador1 == "PAPEL" && oponente == "PIEDRA"){
    marcador.push ("Ganaste")
}else if (jugador1 == "TIJERA" && oponente == "PAPEL"){
    marcador.push ("Ganaste")
}else if (jugador1 == "TIJERA" && oponente == "PIEDRA"){
    marcador.push ("Perdiste")
}


console.log(marcador)
jugador1=[]


if (marcador=="Ganaste"){
    const puntaje = document.createElement("p")
    puntaje.innerHTML=`${nombreJugador}: 1 punto`
    puntaje.classList.add("puntaje")
    body.appendChild(puntaje)

}else if(marcador=="Perdiste"){

    const puntaje = document.createElement("p")
    puntaje.innerHTML=`Oponente: 1 punto`
    puntaje.classList.add("puntaje")
    body.appendChild(puntaje)
}

}

})
body.appendChild(jugar)
