// Funcion que genera un numero aleatorio, recibe dos parametros.
const aleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let ataqueJugador = "";
let ataqueEnemigo = "";
let ataquesDisponibles = ["Fuego🔥", "Agua💧", "Tierra🌱"];
let vidasJugador = 3;
let vidasEnemigo = 3;

const iniciarJuego = () => {
    // Encondemos la seccion de combate y de reiniciar
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciar = document.getElementById("boton-reiniciar");
    sectionReiniciar.style.display = "none"; 

    let btnMascotaJugador = document.getElementById("boton-mascota");
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    // Boton reiniciar juego
    let btnReiniciarJuego = document.getElementById("boton-reiniciar");
    btnReiniciarJuego.addEventListener("click", () => {
        location.reload();
    })
}

const seleccionarMascotaJugador = () => {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascosta");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "flex";



    let imputHipodoge = document.getElementById("hipodoge");
    let imputCapipepo = document.getElementById("capipepo");
    let imputRatigueya = document.getElementById("ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (imputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        seleccionarMascotaEnemigo();
    } else if (imputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
        seleccionarMascotaEnemigo();
    } else if (imputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        seleccionarMascotaEnemigo();
    } else {
        alert("Selecciona un Mokepon.");
        location.reload();
    }
}

const seleccionarMascotaEnemigo = () => {
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let mascotaAleatoriaEnemigo = aleatorio(1, 3);
    if (mascotaAleatoriaEnemigo === 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (mascotaAleatoriaEnemigo === 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
    ataqueSeleccionadoJugador();
}

const ataqueSeleccionadoJugador = () => {
    let btnFuego = document.getElementById("boton-fuego");
    btnFuego.addEventListener("click", () => {
        ataqueJugador = ataquesDisponibles[0];
        ataqueSeleccionadoEnemigo();
    });

    let btnAgua = document.getElementById("boton-agua");
    btnAgua.addEventListener("click", () => {
        ataqueJugador = ataquesDisponibles[1];
        ataqueSeleccionadoEnemigo();
    });

    let btnTierra = document.getElementById("boton-tierra");
    btnTierra.addEventListener("click", () => {
        ataqueJugador = ataquesDisponibles[2];
        ataqueSeleccionadoEnemigo();
    });
}

const ataqueSeleccionadoEnemigo = () => {
    ataqueEnemigo = ataquesDisponibles[aleatorio(0, 2)];
    combate();
}

const combate = () => {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    if (ataqueEnemigo == ataqueJugador) {
        crearMensajes("EMPATE!!😐");
    } else if (ataqueJugador == ataquesDisponibles[0] && ataqueEnemigo == ataquesDisponibles[2]) {
        crearMensajes("GANASTE!!🥳🎉");
        spanVidasEnemigo.innerHTML = --vidasEnemigo;
    } else if (ataqueJugador == ataquesDisponibles[1] && ataqueEnemigo == ataquesDisponibles[0]) {
        crearMensajes("GANASTE!!🥳🎉");
        spanVidasEnemigo.innerHTML = --vidasEnemigo;
    } else if (ataqueJugador == ataquesDisponibles[2] && ataqueEnemigo == ataquesDisponibles[1]) {
        crearMensajes("GANASTE!!🥳🎉");
        spanVidasEnemigo.innerHTML = --vidasEnemigo;
    } else {
        crearMensajes("PERDISTE!!😞😭");
        spanVidasJugador.innerHTML = --vidasJugador;
    }
    resivarVidas();
}

const resivarVidas = () => {
    if (vidasEnemigo === 0) {
        mensajeFinal("Felicitaciones, GANASTE!!🥳🎉🎉🎉...");
    } else if (vidasJugador === 0) {
        mensajeFinal("Lo siento, perdiste😥");
    }
}

const crearMensajes = (resultado) => {
    let seccionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tú Mokepon atacó con " + ataqueJugador +
        ", el Mokepon del enemigo atacó con " + ataqueEnemigo + ".- " + resultado;
    seccionMensajes.appendChild(parrafo);
}

const mensajeFinal = (resultado) => {
    let seccionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.style.color = "blue";
    parrafo.innerHTML = "<strong>" + resultado;
    seccionMensajes.appendChild(parrafo);

    // Desabilitar botones de ataque
    let btnFuego = document.getElementById("boton-fuego");
    btnFuego.disabled = true;

    let btnAgua = document.getElementById("boton-agua");
    btnAgua.disabled = true;

    let btnTierra = document.getElementById("boton-tierra");
    btnTierra.disabled = true;

    let sectionReiniciar = document.getElementById("boton-reiniciar");
    sectionReiniciar.style.display = "block"; 
}



window.addEventListener("load", iniciarJuego);