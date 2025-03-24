// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amour Plastique", time: 0 },
  { text: "En mi mente, todo divaga", time: 6 },
  { text: "Me pierdo en tus ojos", time: 9 },
  { text: "Me estoy ahogando en la ola", time: 11 },
  { text: "De tu mirada amorosa", time: 13 },
  { text: "Solo quiero tu alma", time: 16 },
  { text: "Divagando sobre mi piel", time: 18 },
  { text: "Una flor, una mujer", time: 19 },
  { text: "En tu corazón, Romeo", time: 22 },
  { text: "Solo soy tu sombra", time: 24 },
  { text: "El aliento palpitante", time: 26 },
  { text: "De nuestros cuerpos en la oscuridad", time: 28 },
  { text: "Animados lentamente", time: 30 },
  { text: "Y por la noche lloro lágrimas", time: 32 },
  { text: "Que corren por mis mejillas", time: 35 },
  { text: "Solo pienso en ti cuando el día oscuro", time: 38 },
  { text: "Que posa sobre mí", time: 42 },
  { text: "Mis tristes demonios en el abismo sin fondo", time: 44 },
  { text: "Ámame hasta que las rosas se marchiten", time: 48 },
  { text: "Y que nuestras almas se hundan en el limbo profundo", time: 52 },
  { text: "Y por la noche, cuando todo está oscuro", time: 63 },
  { text: "Te veo bailar", time: 66 },
  { text: "Pienso en los besos", time: 92 },
  { text: "A lo largo de tu pecho", time: 95 },
  { text: "Perdida en la avalancha", time: 98 },
  { text: "De mi corazón despistado", time: 100 },
  { text: "¿Quién eres? ¿Dónde estás?", time: 102 },
  { text: "Llorando, riendo", time: 104 },
  { text: "De tu mirada ámbar", time: 106 },
  { text: "Pienso en los besos", time: 108 },
  { text: "En mi mente, todo divaga", time: 110 },
  { text: "Me pierdo en tus ojos", time: 112 },
  { text: "Me estoy ahogando en la ola", time: 114 },
  { text: "De tu mirada amorosa", time: 116 },
  { text: "Solo quiero tu alma", time: 118 },
  { text: "Divagando sobre mi piel", time: 120 },
  { text: "Una flor, una mujer", time: 123 },
  { text: "En tu corazón, Romeo", time: 125 },
  { text: "Solo soy tu sombra", time: 127 },
  { text: "El aliento palpitante", time: 128 },
  { text: "De nuestros cuerpos en la oscuridad", time: 129 },
  { text: "Animados lentamente", time: 130},
  { text: "Y por la noche, cuando todo está oscuro", time: 144 },
  { text: "Te veo bailar", time: 149 }
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);