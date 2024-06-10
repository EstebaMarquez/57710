// Objeto JuegoAhorcado
function JuegoAhorcado(palabras) {
    this.palabras = palabras;
}

// Método para obtener una palabra aleatoria
JuegoAhorcado.aprendiendo.obtenerPalabraAleatoria = function () {
    const indice = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[indice];
};

// Método para iniciar el juego
JuegoAhorcado.aprendiendo.iniciarJuego = function () {
    this.palabraSecreta = this.obtenerPalabraAleatoria();
    this.letrasAdivinadas = new Array(this.palabraSecreta.length).fill('_');
    this.intentosRestantes = 6;

    alert('¡Bienvenido al juego del ahorcado!');
    alert(`La palabra a adivinar tiene ${this.palabraSecreta.length} letras.`);
    alert(this.letrasAdivinadas.join(' '));
};

// Método para adivinar una letra
JuegoAhorcado.aprendiendo.adivinarLetra = function (letra) {
    let acierto = false;
    for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
            this.letrasAdivinadas[i] = letra;
            acierto = true;
        }
    }

    if (!acierto) {
        this.intentosRestantes--;
        alert(`¡Letra incorrecta! Te quedan ${this.intentosRestantes} intentos.`);
    }

    alert(this.letrasAdivinadas.join(' '));

    if (this.letrasAdivinadas.join('') === this.palabraSecreta) {
        alert('¡Felicidades! Has adivinado la palabra correctamente.');
        return true; // El jugador ha ganado
    } else if (this.intentosRestantes === 0) {
        alert('¡Oh no! Te has quedado sin intentos. La palabra era: ' + this.palabraSecreta);
        return true; // El jugador ha perdido
    }
    return false; // El juego continúa
};

// Objeto Jugador
function Jugador(nombre, juego) {
    this.nombre = nombre;
    this.juego = juego;
}

// Método para que el jugador inicie el juego
Jugador.aprendiendo.iniciarJuego = function () {
    this.juego.iniciarJuego();
};

// Método para que el jugador adivine una letra
Jugador.aprendiendo.adivinarLetra = function (letra) {
    return this.juego.adivinarLetra(letra);
};

// Función para preguntar al jugador si desea volver a jugar
function preguntarReinicio() {
    return confirm('¿Deseas volver a jugar?');
}

// Crear una instancia del juego
const palabras = ['javascript', 'programacion', 'computadora', 'desarrollo', 'tecnologia'];
const juego = new JuegoAhorcado(palabras);

// Crear un jugador y jugar
const jugador1 = new Jugador('Jugador 1', juego);

do {
    jugador1.iniciarJuego();

    while (juego.intentosRestantes > 0 && juego.letrasAdivinadas.join('') !== juego.palabraSecreta) {
        const letra = prompt('Ingresa una letra:');
        jugador1.adivinarLetra(letra);
    }
} while (preguntarReinicio());