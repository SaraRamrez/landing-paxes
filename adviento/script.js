// Cogemos el contenedor del calendario
const calendarGrid = document.getElementById("calendarGrid");

// Obtenemos la fecha actual
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const DECEMBER_MONTH = 11;


// Array con las sorpresas para cada día
const calendarSurprises = [
    { 
        day: 1, 
        title: "Día 1: ¡Bienvenido a tu calendario de Adviento!", 
        content: `
        <img 
            src="assets/Dia1.png" 
            alt="Carta del día 1" 
            style="max-width: 100%; max-height: 62vh; width: auto; height: auto; object-fit: contain; display: block; margin: 0.5rem auto 0; border-radius: 8px;" 
        />
    ` 
    },
    { 
        day: 2, 
        title: "Día 2: Un poco de música para hoy", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0vccKCMndMlg1ZVfGllV63?utm_source=generator&si=ecd35cf7013a497f" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' 
    },
    { 
        day: 3, 
        title: "Día 3: El primer viaje", 
        content: `
        <div style="text-align: center;">
            <img 
                src="assets/Dia3.jpg" 
                alt="Recuerdo de viaje" 
                style="max-width: 100%; max-height: 55vh; width: auto; height: auto; object-fit: contain; display: block; margin: 0 auto 0.75rem; border-radius: 8px;"
            />
            <p style="font-size: 1rem; line-height: 1.5; margin: 0;">
                Este viaje para mí era un sueño, llevaba años planeandolo y después siempre salía mal, así que gracias por haberme acompañado y hacer que fuese tan especial
            </p>
        </div>
    ` 
    },
    { 
        day: 4, 
        title: "Día 4: ¿Gordos de qué?", 
        content: `
        <img 
            src="assets/Dia4.png" 
            alt="Vale para cena: Hamburguesa gochísima" 
            style="width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 12px auto 0; border-radius: 8px;" 
        />
    ` 
    },
    { 
        day: 5, 
        title: "Día 5: Por el culo te la hinco", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5g0RKQ3VOjWqPy5xOIEosd?utm_source=generator&si=e74638e8cb0b4780" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    { 
        day: 6, 
        title: "Día 6: Recordatorio", 
        content: `
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “Hoy solo quiero recordarte que es una suerte haber coincidido contigo”
            </p>
        </div>
    `
    },
    { 
        day: 7, 
        title: "Día 7: Te toca pensar", 
        content: `
        <img 
            src="assets/Dia7.png" 
            alt="Vale por una tarta casera" 
            style="width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 12px auto 0; border-radius: 8px;" 
        />
    ` 
    },
    { 
        day: 8, 
        title: "Día 8: El viaje más random", 
        content: `
        <div style="text-align: center;">
            <img 
                src="assets/Dia8.jpg" 
                alt="Recuerdo de viaje" 
                style="max-width: 100%; max-height: 55vh; width: auto; height: auto; object-fit: contain; display: block; margin: 0 auto 0.75rem; border-radius: 8px;"
            />
            <p style="font-size: 1rem; line-height: 1.5; margin: 0;">
                El viaje más random que he hecho nunca, el papa nos robó un día de alcohol ilimitado pero bueno...
            </p>
        </div>
    `  
    },
    {
        day: 9,
        title: "Día 9: Caza la estrella ⭐",
        content: `
            <div style="text-align: center; padding: 0.5rem;">
                <p style="font-size: 1.05rem; margin-bottom: 1rem;">
                    ¿En qué casilla se ha escondido la estrella hoy? Elige una:
                </p>
                <div style="display: flex; justify-content: center; gap: 0.75rem;">
                    <button 
                        onclick="document.getElementById('starResult9').innerHTML = '😅 Aquí solo hay pelusas navideñas. ¡Prueba otra!'"
                        style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                        1
                    </button>
                    <button 
                        onclick="document.getElementById('starResult9').innerHTML = '⭐ ¡Encontrada! Premio desbloqueado: ¿Qué es un calendario de adviento sin cosas que comer? pues una chapuza, ¡en casa te esperan! 🍫🍬'"
                        style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                        2
                    </button>
                    <button 
                        onclick="document.getElementById('starResult9').innerHTML = '😜 Nada por aquí, ¡sigue buscando!'"
                        style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                        3
                    </button>
                </div>
                <p id="starResult9" style="margin-top: 1.1rem; font-weight: bold; min-height: 1.5rem;"></p>
            </div>
        `
    },
    { 
        day: 10, 
        title: "Día 10: 🔥", 
        content: `
        <img 
            src="assets/Dia10.png" 
            alt="Vale picante" 
            style="width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 12px auto 0; border-radius: 8px;" 
        />
    `
    },
    { 
        day: 11, 
        title: "Día 11: Otro tema que me recuerda a nuestros viajes", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1LPRt6MRT3rbr696ly5lUC?utm_source=generator&si=49d248fb4a98482b" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' 
    },
    { 
        day: 12, 
        title: "Día 12: La mitad del camino", 
        content: `
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “La mitad del camino, espero que te esté gustando... ¡mañana más!”
            </p>
        </div>
    ` 
    },
    { 
        day: 13, 
        title: "Día 13: ¡Cine y cena o cine y comida!", 
        content: `
        <img 
            src="assets/Dia13.png" 
            alt="Vale cine" 
            style="width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 12px auto 0; border-radius: 8px;" 
        />
    ` 
    },
    { 
        day: 14, 
        title: "Día 14: AIFGIWGWY,AIYDIWDWY", 
        content: `
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “And if you go, I wanna go with you
                <br>
                And if you die, I wanna die with you”
            </p>
        </div>
    ` 
    },
    { 
        day: 15, 
        title: "Día 15: 😉", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4pt5fDVTg5GhEvEtlz9dKk?utm_source=generator&si=89c82d3ef2884086" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' 
    },
    { 
        day: 16, 
        title: "Día 16: El mejor barco del mundo 🎄", 
        content: `
        <div style="text-align: center;">
            <img 
                src="assets/Dia16.jpg" 
                alt="Recuerdo de viaje" 
                style="max-width: 100%; max-height: 55vh; width: auto; height: auto; object-fit: contain; display: block; margin: 0 auto 0.75rem; border-radius: 8px;"
            />
            <p style="font-size: 1rem; line-height: 1.5; margin: 0;">
                Las mejores vistas de Vigo.
            </p>
        </div>
    `
    },
    { 
        day: 17, 
        title: "Día 17: Mini juego: Caza la estrella ⭐", 
        content: `
        <div id="day17Game">
            <p>Caza <strong>5 estrellas</strong> para desbloquear tu dulce premio! ⭐</p>
            <p id="gameScore">Estrellas capturadas: 0 / 5</p>
            <div id="gameArena" style="position: relative; height: 180px; border-radius: 12px; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(52, 211, 153, 0.35); overflow: hidden; margin: 12px 0;"></div>
            <button type="button" id="startDay17Btn">Start game</button>
            <div id="day17Reward" style="display: none; margin-top: 12px;"></div>
        </div>
    `
    },
    { 
        day: 18, 
        title: "Día 18: Un recordatorio de que lo estás haciendo genial", 
        content: `
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “Sé que te la pela todo, pero solo quiero recordarte que lo estás haciendo genial, que te esfuerzas todos los días, aunque pienses que no.
                <br>
                No sé si estas palabras sirven de algo pero estoy muy orgullosa de ti por tu constancia y esfuerzo.
                <br>
                ¡Sigue así, lo estás haciendo increíble!
            </p>
        </div>
    `  
    },
    { 
        day: 19, 
        title: "Día 19: Tenerife fue genial", 
        content: `
        <div style="text-align: center;">
            <img 
                src="assets/Dia19.jpg" 
                alt="Recuerdo de viaje" 
                style="max-width: 100%; max-height: 55vh; width: auto; height: auto; object-fit: contain; display: block; margin: 0 auto 0.75rem; border-radius: 8px;"
            />
            <p style="font-size: 1rem; line-height: 1.5; margin: 0;">
                Una puesta de sol tan chula que no pude resistir a marcarla en mi piel para siempre.
            </p>
        </div>
    `
    },
    { 
        day: 20, 
        title: "Día 20: Bebernos las horas como si fuera licor", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/34tHZJLk0adg5tW49iybbE?utm_source=generator&si=cfd5854b981d461b" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
{
    day: 21,
    title: "Día 21: Tres adornos, ¿tres premios?",
    content: `
        <div style="text-align: center; padding: 0.5rem;">
            <p style="font-size: 1.05rem; margin-bottom: 1rem;">
                Descubre el plan que estos adornos esconden...:
            </p>
            <div style="display: flex; justify-content: center; gap: 0.75rem;">
                <button 
                    onclick="document.getElementById('starResult21').innerHTML = '🎄 Plan tranquilo, en casa, con cervezas y lo que surja...'"
                    style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                    🎄
                </button>
                <button 
                    onclick="document.getElementById('starResult21').innerHTML = '🔔 ...en el que espero que no solo toques la campana... 🙈'"
                    style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                    🔔
                </button>
                <button 
                    onclick="document.getElementById('starResult21').innerHTML = '⭐ ...y que comas todo lo que quieras...🤭'"
                    style="font-size: 1.3rem; padding: 0.65rem 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); cursor: pointer;">
                    ⭐
                </button>
            </div>
            <p id="starResult21" style="margin-top: 1.1rem; font-weight: bold; min-height: 1.5rem;"></p>
        </div>
    `
},
    { 
        day: 22, 
        title: "Día 22: Jarvis... ¡PON MÚSICA!", 
        content: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj?utm_source=generator&si=6ecb106b2a384ed6" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    { 
        day: 23, 
        title: "Día 23: Ya casi acabamos", 
        content: `
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “Esto ya está llegando a su fin, solo un día más y habrá acabado tu infierno xD 
                <br>
                Aunque espero que al menos lo hayas disfrutado y te haya gustado un poquito...
                <br>
                Y que algo de espíritu navideño se haya colado dentro de tí, aunque solo sea un poquito 🤏
                <br>
                Y si no pues nada, ¡Ya acaba! ¡Solo un día más!” 
            </p>
        </div>
    ` 
    },
{
    day: 24,
    title: "Día 24: Y este es nuestro camino hasta ahora",
    content: `
        <iframe
            data-testid="embed-iframe"
            style="border-radius:12px"
            src="https://open.spotify.com/embed/track/4DMKwE2E2iYDKY01C335Uw?utm_source=generator&si=ab2326c8ea384d2f"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
        <div style="
            background: rgba(255, 255, 255, 0.04);
            border-left: 3px solid #d33434;
            border-radius: 10px;
            padding: 1.25rem 1rem;
            margin-top: 0.75rem;
            text-align: center;
        ">
            <p style="
                font-size: 1.15rem;
                line-height: 1.6;
                color: #f8fafc;
                font-style: italic;
                margin: 0;
            ">
                “Espero que hayas disfrutado de esto, ¡Feliz Navidad!
                <br>
                Nos vemos pronto
                <br>
                <strong>Te quiero un montón BITCH, ¡ya lo sabes! ❤️</strong>
            </p>
        </div>
    `
}
];

// Creamos el modal y el evento de click de las tarjetas
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// Bucle para las 24 tarjetas
for (let i = 1; i <=24; i++) {
    const card = document.createElement("div");
    card.classList.add("calendar-card");
    
    // Comprobamos si la tarjeta debe estar desbloqueada o bloqueada
    // const isUnlocked = true 
    const isUnlocked = (currentMonth === DECEMBER_MONTH && currentDay >= i);

    // Agregamos la clase y el contenido a la tarjeta según corresponda
    if (isUnlocked) {
        card.classList.add("unlocked");
        card.innerHTML = `
            <span class="day-number">${i}</span>
            <span class="status">🔓 Abrir</span>
        `;

        card.addEventListener("click", () => {

            // Buscamos la sorpresa correspondiente al día
            const surprise = calendarSurprises[i - 1];

            // Si hay sorpresa ese día, accedemos al array y mostramos el contenido
            if (surprise){
                modalTitle.innerText = surprise.title;
                modalBody.innerHTML = surprise.content;
            } else {
                modalTitle.innerText = `Sorpresa del Día ${i}`;
                modalBody.innerHTML = `<p>Proximamente...</p>`;
            }

            modal.style.display = "flex";

            if (i === 17) {
                setupDay17Minigame();
            }
        });

    } else {
        card.classList.add("locked");
        card.innerHTML = `
            <span class="day-number">${i}</span>
            <span class="status">🔒 Bloqueado</span>
        `;

        card.addEventListener("click", () => {
            alert("¡No seas impaciente! 🤭");
        });
    }

    calendarGrid.appendChild(card);

};

// Cerrar modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

function setupDay17Minigame() {
    const startBtn = document.getElementById("startDay17Btn");
    const arena = document.getElementById("gameArena");
    const scoreText = document.getElementById("gameScore");
    const rewardBox = document.getElementById("day17Reward");

    if (!startBtn || !arena || !scoreText || !rewardBox) return;

    const targetScore = 5;
    let score = 0;
    let gameInterval = null;

    function spawnStar() {
        arena.innerHTML = "";
        const star = document.createElement("button");
        star.type = "button";
        star.textContent = "⭐";
        star.style.position = "absolute";
        star.style.fontSize = "1.8rem";
        star.style.background = "transparent";
        star.style.border = "none";
        star.style.cursor = "pointer";

        const maxX = Math.max(0, arena.clientWidth - 45);
        const maxY = Math.max(0, arena.clientHeight - 45);
        star.style.left = `${Math.floor(Math.random() * maxX)}px`;
        star.style.top = `${Math.floor(Math.random() * maxY)}px`;

        star.addEventListener("click", () => {
            score++;
            scoreText.textContent = `Stars caught: ${score} / ${targetScore}`;
            star.remove();

            if (score >= targetScore) {
                clearInterval(gameInterval);
                arena.innerHTML = `<p style="padding: 2rem; text-align: center; color: #6ee7b7;">🎄 ¡Buen trabajo!</p>`;
                startBtn.style.display = "none";
                rewardBox.style.display = "block";
                rewardBox.innerHTML = `<p>🍬 <strong>¡Más cositas dulces te esperan en casa! 😋</strong></p>`;
            }
        });

        arena.appendChild(star);
    }

    startBtn.addEventListener("click", () => {
        score = 0;
        rewardBox.style.display = "none";
        rewardBox.innerHTML = "";
        scoreText.textContent = `Stars caught: 0 / ${targetScore}`;
        startBtn.disabled = true;

        clearInterval(gameInterval);
        spawnStar();
        gameInterval = setInterval(spawnStar, 1100);
    });
}
