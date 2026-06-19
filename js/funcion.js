// ======================================
// INGENIA MULTIMEDIA
// SCRIPT GENERAL
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // MENSAJES NIA POR PÁGINA
    // ======================================

    const mensajesPorPagina = {

        "index.html":
            "¡Hola! Soy NIA. Te acompañaré durante este recorrido.",

        "fundamentos.html":
            "Aquí aprenderás los fundamentos de la Ingeniería Multimedia.",

        "areas.html":
            "Explora las diferentes áreas de desempeño profesional.",

        "herramientas.html":
            "Conoce las herramientas más utilizadas por un Ingeniero Multimedia.",

        "proceso.html":
            "Descubre las fases del desarrollo multimedia.",

        "laboratorio.html":
            "Bienvenido al laboratorio multimedia.",

        "quiz.html":
            "Demuestra cuánto has aprendido durante el recorrido.",

        "creditos.html":
            "Gracias por visitar Ingenia Multimedia."
    };

    const paginaActual =
        window.location.pathname.split("/").pop();

        document.querySelectorAll(".nav-links a")
        .forEach(enlace => {
            const href =
            enlace.getAttribute("href");

            if(href.endsWith(paginaActual)){
                enlace.classList.add("active");
            }
        });

    const mensajeNIA =
        document.querySelector(".nia-message p");

    if (
        mensajeNIA &&
        mensajesPorPagina[paginaActual]
    ) {

        mensajeNIA.textContent =
            mensajesPorPagina[paginaActual];
    }

    // ======================================
    // BOTÓN COMENZAR
    // ======================================

    const botonComenzar =
        document.querySelector(".btn-primary");

    if (botonComenzar) {

        botonComenzar.addEventListener("click", () => {

            if (paginaActual === "index.html") {

                window.location.href =
                    "Estructura/fundamentos.html";

            }

        });

    }

    // AUDIO

    const botonAudio =
        document.querySelector(".audio-btn");

        if (botonAudio) {

            botonAudio.addEventListener("click", () => {

                const texto = `
                La ingenería Multimedia integra disciplinas como programación,
                diseño grafico, produccion audiovisual, animación e interacción
                digital para desarrollar experiencias digitales innovadoras.
                Su objetivo es crear productos que permitan una comunicación
                efectiva mediante recursos visuales, sonoros e interactivos,
                mejorando la experiencia del usuario.
                `;

                const voz =
                new SpeechSynthesisUtterance(texto);

                voz.lang = "es-CO";

                speechSynthesis.speak(voz);
            });

        }

const audio = document.getElementById("audioNIA");
const wave = document.getElementById("voiceWave");

if(audio && wave){
audio.addEventListener("play", () => {
    wave.classList.add("active");
});

audio.addEventListener("ended", () => {
    wave.classList.remove("active");
});

audio.addEventListener("pause", () => {
    wave.classList.remove("active");
});

}





    // ======================================
    // TARJETAS ÁREAS
    // ======================================

    const tarjetas =
        document.querySelectorAll(".card");

    const infoArea =
        document.getElementById("infoArea");

    if (infoArea) {

        tarjetas.forEach(tarjeta => {

            tarjeta.addEventListener("click", () => {

                infoArea.textContent =
                tarjeta.dataset.info;

                hablar(tarjeta.dataset.info);

                const mensajeNIA =
                document.querySelector(".nia-message p");

                if (mensajeNIA) {
                    mensajeNIA.textContent =
                    "¡Has seleccionado un área de desempeño profesional!";
                }

            });

        });

    }

    // ======================================
    // HERRAMIENTAS
    // ======================================

    const herramientas =
        document.querySelectorAll(".tool-card");

    const infoHerramienta =
        document.getElementById("infoHerramienta");

    if (
        herramientas.length > 0 &&
        infoHerramienta
    ) {

        herramientas.forEach(herramienta => {

            herramienta.addEventListener("click", () => {

                infoHerramienta.textContent =
                    herramienta.dataset.info;

                    hablar(herramienta.dataset.info);

            });

        });

    }

    // ======================================
    // PROCESO MULTIMEDIA
    // ======================================

    const fases =
        document.querySelectorAll(".timeline-item");

    const infoProceso =
        document.getElementById("infoProceso");

    if (
        fases.length > 0 &&
        infoProceso
    ) {

        fases.forEach(fase => {

            fase.addEventListener("click", () => {

                infoProceso.textContent =
                    fase.dataset.info;

            });

        });

    }

    // ======================================
    // EFECTOS DE APARICIÓN
    // ======================================

    const elementos =
        document.querySelectorAll(
            ".card, .tool-card, .gallery-card, .timeline-item"
        );

    if (elementos.length > 0) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    });

                },
                {
                    threshold: 0.2
                }
            );

        elementos.forEach(elemento => {

            observer.observe(elemento);

        });

    }

    // ======================================
    // EFECTO NAVBAR ACTIVO
    // ======================================

    const enlaces =
        document.querySelectorAll(".nav-links a");

    enlaces.forEach(enlace => {

        const href = enlace.getAttribute("href");

        if (
            href &&
            paginaActual &&
            href.includes(paginaActual)
        ) {

            enlace.classList.add("active");

        }

    });

    // ======================================
    // ANIMACIÓN SUAVE LOGO
    // ======================================

    const logo =
        document.querySelector(".logo img");

    if (logo) {

        logo.addEventListener("mouseenter", () => {

            logo.style.transform =
                "scale(1.08)";

        });

        logo.addEventListener("mouseleave", () => {

            logo.style.transform =
                "scale(1)";

        });

    }

    // ======================================
    // MENSAJES ROTATIVOS NIA
    // ======================================

    const mensajesRotativos = [

        "La creatividad y la tecnología trabajan juntas.",

        "Un Ingeniero Multimedia desarrolla experiencias digitales.",

        "La interacción es fundamental en los productos multimedia.",

        "Explora todas las secciones para aprender más.",

        "¡No olvides realizar el quiz!"
    ];

    let indice = 0;

    if (mensajeNIA) {

        setInterval(() => {

            indice++;

            if (
                indice >=
                mensajesRotativos.length
            ) {

                indice = 0;

            }

            mensajeNIA.textContent =
                mensajesRotativos[indice];

        }, 8000);

    }

});

// ======================================
// QUIZ
// ======================================

function validarQuiz(correcta) {

    const resultado =
        document.getElementById("resultado");

    if (!resultado) return;

    if (correcta) {

        resultado.innerHTML =
            "✅ ¡Respuesta correcta!";

        resultado.style.color =
            "#9FA1FF";

    } else {

        resultado.innerHTML =
            "❌ Respuesta incorrecta";

        resultado.style.color =
            "#CB2957";

    }

}

// VOZ DEL NAVEGADOR

function hablar(texto) {
    const wave = document.getElementById("voiceWave");
    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-CO";
    // voz.rate = 1;
    // voz.pitch = 1;

    voz.onstart = () => {
        wave.classList.add("active");
    };

    voz.onend = () => {
        wave.classList.remove("active");
    };

    speechSynthesis.cancel();
    speechSynthesis.speak(voz);
}

// FUNCIONES PARA MOSTRAR INFO EN ÁREAS
function mostrarArea(
    titulo,
    video,
    descripcion,
    herramientas
){

    document.getElementById("areaTitulo").textContent =
        titulo;

    // document.getElementById("areaImagen").src =
    //     imagen;

        const areaVideo =
    document.getElementById("areaVideo");

    areaVideo.src = video;
    areaVideo.load();
    areaVideo.play();
    

    document.getElementById("areaDescripcion").textContent =
        descripcion;

    document.getElementById("areaHerramientas").textContent =
        herramientas;

    const voz =
        new SpeechSynthesisUtterance(
            "Este es el área de " + titulo + "Encargada de " + descripcion + " Y las herramientas más utilizadas son: " + herramientas
        );

    voz.lang = "es-CO";

    speechSynthesis.cancel();
    speechSynthesis.speak(voz);
}

function mostrarTecnologia(
    titulo,
    descripcion,
    icono
){
    document.getElementById("techTitulo").textContent =
    icono + " " + titulo;

    document.getElementById("techDescripcion").textContent=
    descripcion;

    hablar(descripcion);
}

function mostrarMultimedia(tipo){

    const contenedor =
    document.getElementById("multimediaContenido");

    if(tipo === "imagen"){

        contenedor.innerHTML = `
            <img src="../elementos/imagenes/multiimg.png">
            <p>
                Las imágenes permiten comunicar información visual de forma rápida y efectiva.
            </p>
        `;

        hablar("Las imágenes son uno de los recursos multimedia más utilizados.");

    }

    else if(tipo === "audio"){

        contenedor.innerHTML = `
            <h3>🔊 Recurso de Audio</h3>
            <p>
                NIA está reproduciendo una explicación mediante síntesis de voz.
            </p>
        `;

        hablar("El audio facilita la comunicación y mejora la experiencia de aprendizaje.");

    }

    else if(tipo === "video"){

        contenedor.innerHTML = `
            <video autoplay muted loop controls>
                <source src="../elementos/videos/ani2.mp4" type="video/mp4">
            </video>

            <p>
                Los videos integran imagen, movimiento y sonido.
            </p>
        `;

        hablar("Los videos permiten transmitir información de forma dinámica.");

    }

    else if(tipo === "animacion"){

    contenedor.innerHTML = `

        <div class="equalizer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <h3>✨ Animación Multimedia</h3>

        <p>
            Las animaciones aportan dinamismo, interactividad y una mejor experiencia visual al usuario.
        </p>

    `;

    hablar("Las animaciones aportan dinamismo y atractivo visual.");
}
}

function mostrarPerfil(tipo){

    const titulo =
    document.getElementById("perfilTitulo");

    const descripcion =
    document.getElementById("perfilDescripcion");

    switch(tipo){

        case "web":

            titulo.textContent =
            "💻 Desarrollo Web";

            descripcion.textContent =
            "Te interesa la programación, la creación de sitios web y las experiencias digitales interactivas.";

            hablar(descripcion.textContent);

        break;

        case "diseno":

            titulo.textContent =
            "🎨 Diseño Digital";

            descripcion.textContent =
            "Te atrae la creatividad visual, la experiencia de usuario y el diseño de interfaces.";

            hablar(descripcion.textContent);

        break;

        case "video":

            titulo.textContent =
            "🎬 Producción Audiovisual";

            descripcion.textContent =
            "Disfrutas contar historias mediante video, sonido y edición multimedia.";

            hablar(descripcion.textContent);

        break;

        case "juegos":

            titulo.textContent =
            "🎮 Desarrollo de Videojuegos";

            descripcion.textContent =
            "Te apasiona crear experiencias interactivas, mundos virtuales y entretenimiento digital.";

            hablar(descripcion.textContent);

        break;
    }
}

function irAlQuiz(){

    hablar(
        "Excelente trabajo. Has finalizado el laboratorio multimedia. Ahora puedes comenzar el quiz."
    );

    setTimeout(() => {

        window.location.href =
        "../Estructura/quiz.html";

    }, 4000);

}