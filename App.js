// ─── Géneros ───────────────────────────────────────────────────────────────
const GENEROS = [
  { id: "accion",     nombre: "Acción",           icono: "⚔️" },
  { id: "aventura",   nombre: "Aventura",          icono: "🗺️" },
  { id: "comedia",    nombre: "Comedia",           icono: "😂" },
  { id: "drama",      nombre: "Drama",             icono: "🎭" },
  { id: "romance",    nombre: "Romance",           icono: "💕" },
  { id: "terror",     nombre: "Terror",            icono: "👻" },
  { id: "suspenso",   nombre: "Suspenso",          icono: "😰" },
  { id: "thriller",   nombre: "Thriller",          icono: "🔪" },
  { id: "crimen",     nombre: "Crimen",            icono: "🕵️" },
  { id: "scifi",      nombre: "Ciencia ficción",   icono: "🚀" },
  { id: "fantasia",   nombre: "Fantasía",          icono: "🧙" },
  { id: "historico",  nombre: "Histórico",         icono: "🏛️" },
  { id: "belico",     nombre: "Bélico",            icono: "🪖" },
  { id: "documental", nombre: "Documental",        icono: "📽️" },
];

// ─── Estado ────────────────────────────────────────────────────────────────
let mazo        = [];
let mano        = [];
let descartadas = [];
let seleccion   = new Set();
let fase        = "inicio";   // inicio | descartar | resultado

// ─── Helpers ───────────────────────────────────────────────────────────────
function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function puntuarPelicula(pelicula, generosElegidos) {
  const coincidencias = pelicula.generos.filter(g => generosElegidos.includes(g)).length;
  const foraneos      = pelicula.generos.filter(g => !generosElegidos.includes(g)).length;
  return coincidencias * 2 - foraneos;
}

function filtrarYOrdenar(generosElegidos) {
  return PELICULAS
    .map(p => ({ ...p, score: puntuarPelicula(p, generosElegidos) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score);
}

// ─── Render cartas ─────────────────────────────────────────────────────────
function renderMano() {
  const contenedor = document.getElementById("mano");
  contenedor.innerHTML = "";

  mano.forEach((g, i) => {
    const carta = document.createElement("div");
    carta.className = "carta" + (seleccion.has(i) ? " seleccionada" : "");
    carta.innerHTML = `
      <span class="carta-icono">${g.icono}</span>
      <span class="carta-nombre">${g.nombre}</span>
      ${seleccion.has(i) ? '<span class="marca-descarte">✕</span>' : ""}
    `;
    if (fase === "descartar") {
      carta.addEventListener("click", () => toggleSeleccion(i));
    }
    contenedor.appendChild(carta);
  });
}

function actualizarBtnDescartar() {
  const btn = document.getElementById("btn-descartar");
  if (!btn) return;

  const cuentaEl = document.getElementById("cuenta-sel");
  if (cuentaEl) cuentaEl.textContent = seleccion.size;

  btn.disabled = seleccion.size === 0;
}

// ─── Acciones ──────────────────────────────────────────────────────────────
function repartir() {
  mazo        = mezclar(GENEROS);
  mano        = mazo.splice(0, 5);
  descartadas = [];
  seleccion.clear();
  fase        = "descartar";

  actualizarMazo();
  setFaseTag("descartar");
  setStatus("Seleccioná hasta 2 cartas para cambiar. Podés descartar cuantas veces quieras (de a 2) siempre que quede al menos 1 carta en tu mano.");
  document.getElementById("seccion-resultado").style.display = "none";

  document.getElementById("acciones").innerHTML = `
    <button id="btn-descartar" onclick="hacerDescarte()" disabled>
      Descartar <span id="cuenta-sel">0</span> carta(s)
    </button>
    <button class="primario" onclick="confirmar()">
      ✓ Confirmar mano
    </button>
  `;

  renderMano();
}

function toggleSeleccion(i) {
  // máximo 2 por ronda, y no podés seleccionar TODAS (tiene que quedar 1)
  const maxDescartable = Math.min(2, mano.length - 1);

  if (seleccion.has(i)) {
    seleccion.delete(i);
  } else {
    if (seleccion.size >= maxDescartable) return;
    seleccion.add(i);
  }

  actualizarBtnDescartar();
  renderMano();
}

function hacerDescarte() {
  if (seleccion.size === 0) return;

  const indices = [...seleccion].sort((a, b) => b - a);
  indices.forEach(i => {
    descartadas.push(mano[i]);
    mano.splice(i, 1);
  });
  seleccion.clear();

  const nuevas = mazo.splice(0, indices.length);
  mano.push(...nuevas);

  actualizarMazo();

  const puedeDescartar = mano.length > 1;
  const msgExtra = puedeDescartar
    ? " Podés seguir descartando o confirmar tu mano."
    : " Solo te queda 1 carta, confirmá tu mano.";

  let msgRobo = nuevas.length > 0
    ? `Descartaste y robaste ${nuevas.length} carta${nuevas.length > 1 ? "s" : ""} nueva${nuevas.length > 1 ? "s" : ""}.`
    : `Descartaste ${indices.length} carta${indices.length > 1 ? "s" : ""} sin robar (mazo vacío).`;
  setStatus(msgRobo + msgExtra);

  document.getElementById("btn-descartar").disabled = true;
  document.getElementById("cuenta-sel").textContent = 0;

  renderMano();
}

function confirmar() {
  fase = "resultado";
  seleccion.clear();

  setFaseTag("resultado");
  setStatus("Buscando películas para tus géneros...");
  renderMano();

  document.getElementById("acciones").innerHTML = `
    <button onclick="repartir()">↺ Nueva mano</button>
  `;

  const generosElegidos = mano.map(g => g.id);
  mostrarResultados(generosElegidos);
}

// ─── Resultados ────────────────────────────────────────────────────────────
function mostrarResultados(generosElegidos) {
  const peliculas  = filtrarYOrdenar(generosElegidos);
  const seccion    = document.getElementById("seccion-resultado");
  const contenedor = document.getElementById("resultados-lista");

  const nombresGeneros = generosElegidos
    .map(id => GENEROS.find(g => g.id === id)?.nombre)
    .filter(Boolean);

  document.getElementById("resumen-generos").innerHTML =
    nombresGeneros.map(n => `<span class="chip">${n}</span>`).join("");

  contenedor.innerHTML = "";

  if (peliculas.length === 0) {
    contenedor.innerHTML = `<p class="sin-resultados">No encontramos películas para esa combinación. Probá con otra mano.</p>`;
    setStatus("No se encontraron resultados.");
  } else {
    peliculas.forEach(p => {
      const card = document.createElement("div");
      card.className = "pelicula-card";

      const generosHtml = p.generos.map(gid => {
        const gen     = GENEROS.find(g => g.id === gid);
        const esMatch = generosElegidos.includes(gid);
        return `<span class="chip-genero ${esMatch ? "match" : "foraneo"}">${gen ? gen.nombre : gid}</span>`;
      }).join("");

      card.innerHTML = `
        <div class="pelicula-imagen">
          <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
        </div>
        <div class="pelicula-info">
          <div class="pelicula-header">
            <h3 class="pelicula-titulo">${p.titulo}</h3>
            <span class="pelicula-anio">${p.anio}</span>
          </div>
          <p class="pelicula-desc">${p.descripcion}</p>
          <div class="pelicula-generos">${generosHtml}</div>
        </div>
      `;
      contenedor.appendChild(card);
    });

    setStatus(`Encontramos <strong>${peliculas.length}</strong> película${peliculas.length !== 1 ? "s" : ""} para tus géneros.`);
  }

  seccion.style.display = "block";
  seccion.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── UI helpers ────────────────────────────────────────────────────────────
function actualizarMazo() {
  document.getElementById("mazo-count").textContent    = mazo.length;
  document.getElementById("descarte-count").textContent = descartadas.length;
}

function setStatus(html) {
  const el = document.getElementById("status");
  el.style.display = html ? "block" : "none";
  el.innerHTML = html;
}

function setFaseTag(f) {
  const el = document.getElementById("fase-tag");
  if (f === "descartar") {
    el.className = "fase-tag fase-descartar";
    el.textContent = "Fase: descartá de a 2";
  } else if (f === "resultado") {
    el.className = "fase-tag fase-resultado";
    el.textContent = "Resultado listo";
  } else {
    el.className = "fase-tag fase-inicio";
    el.textContent = "Fase: repartir";
  }
}
