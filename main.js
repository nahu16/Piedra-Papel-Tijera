let puntosJugador1 = 0;
let puntosOponente = 0;


const body = document.querySelector("body");
let nombreJugador = [];

const nombreJuego = document.createElement("h1");
nombreJuego.innerHTML = "Piedra ✊🏻 - Papel 🖐🏻 - Tijeras ✌🏻";
body.appendChild(nombreJuego);

const loguear = document.createElement("div");
loguear.classList.add("loguear");

const login = document.createElement("input");
login.placeholder = "Ingresa tu nombre:";
loguear.appendChild(login);

const jugar = document.createElement("button");
jugar.innerHTML = "Jugar";
jugar.classList.add("jugar");
jugar.addEventListener("click", function () {

    nombreJugador.push(login.value);

    const container = document.createElement("div");
    container.classList.add("contenedor");
    body.appendChild(container);

    let jugador1 = [];

    const titulo = document.createElement("h1");
    titulo.innerHTML = "Elige alguna de las opciones:";
    titulo.classList.add("titulo");
    container.appendChild(titulo);

    const piedra = document.createElement("button");
    piedra.style.backgroundImage = 'url("../Imagen/Piedra.jpg")';
    piedra.classList.add("piedra");
    piedra.addEventListener("click", function () {
        jugador1.push("PIEDRA");
        console.log(jugador1);
        juego();
    });
    container.appendChild(piedra);

    const papel = document.createElement("button");
    papel.style.backgroundImage = 'url("../Imagen/Papel.jpg")';
    papel.classList.add("papeles");
    papel.addEventListener("click", function () {
        jugador1.push("PAPEL");
        console.log(jugador1);
        juego();
    });
    container.appendChild(papel);

    const tijeras = document.createElement("button");
    tijeras.style.backgroundImage = 'url("../Imagen/Tijera.jpg")';
    tijeras.classList.add("tijera");
    tijeras.addEventListener("click", function () {
        jugador1.push("TIJERA");
        console.log(jugador1);
        juego();
    });
    container.appendChild(tijeras);

    function juego() {
        let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
        let opcionesAleatorias = Math.floor(Math.random() * opciones.length);
        let objetoAleatorio = opciones[opcionesAleatorias];

        const oponente = objetoAleatorio;
        ActualizarPuntos()   

        const duelosAnteriores = container.querySelectorAll(".duelo");
        duelosAnteriores.forEach(element => element.remove());
    
        const duelo = document.createElement("div");
        duelo.classList.add("duelo")
        duelo.innerHTML = Swal.fire(`El oponente eligió ${oponente} <br> ${nombreJugador} eligió ${jugador1}`);
        container.appendChild(duelo);

        let marcador = "";

        if (jugador1[0] === oponente) {
            marcador = "EMPATE";
        } else if (jugador1[0] === "PIEDRA" && oponente === "PAPEL") {
            marcador = "Perdiste";
        } else if (jugador1[0] === "PIEDRA" && oponente === "TIJERA") {
            marcador = "Ganaste";
        } else if (jugador1[0] === "PAPEL" && oponente === "TIJERA") {
            marcador = "Perdiste";
        } else if (jugador1[0] === "PAPEL" && oponente === "PIEDRA") {
            marcador = "Ganaste";
        } else if (jugador1[0] === "TIJERA" && oponente === "PAPEL") {
            marcador = "Ganaste";
        } else if (jugador1[0] === "TIJERA" && oponente === "PIEDRA") {
            marcador = "Perdiste";
        }
        
        evaluarResultado(marcador);
        ActualizarPuntos();
        finJuego();
        jugador1 = [];
    }

    function evaluarResultado(marcador) {
        if (marcador === "Ganaste") {
            puntosJugador1++;
        } else if (marcador === "Perdiste") {
            puntosOponente++;
        }
    }

    function ActualizarPuntos() {
        const puntajeElement = document.querySelector(".puntaje")

        if (puntajeElement) {
            puntajeElement.innerHTML = `${nombreJugador}: ${puntosJugador1} puntos <br> Oponente: ${puntosOponente} puntos`;
        } else {
            const puntajeElement = document.createElement("p");
            puntajeElement.innerHTML = `${nombreJugador}: ${puntosJugador1} puntos <br> Oponente: ${puntosOponente} puntos`;
            puntajeElement.classList.add("puntaje");
            container.appendChild(puntajeElement);
        }
    }

    function finJuego() {
        if (puntosJugador1 === 3) {
            alert("Ganaste\n¿Deseas volver a jugar?");
            reiniciarJuego();
        } else if (puntosOponente === 3) {
            alert("Perdiste\n¿Deseas volver a jugar?");
            reiniciarJuego();
        }
    }

    function reiniciarJuego() {
        puntosJugador1 = 0;
        puntosOponente = 0;
        ActualizarPuntos();
    }
});

loguear.appendChild(jugar);
body.appendChild(loguear);
