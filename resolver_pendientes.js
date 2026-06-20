// Segundo pase: solo para las películas que fallaron en la primera corrida.
// Estrategia por película, en orden:
//   1) título tal cual + año (español)
//   2) título tal cual SIN año (español)
//   3) título alternativo (si lo definimos abajo) + año
//   4) en inglés, sin año

const API_KEY = "f3c49dc19a903b3d5cdf975b4da8ddd6"; // pegá tu key nueva (la que ya funciona)
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

import { readFile, writeFile } from "fs/promises";

// Las 7 que fallaron, con un título alternativo a mano donde tiene sentido.
// Para "Pan's Labyrinth adaptación" usamos el título real de la película que
// claramente se quiso representar: El laberinto del fauno (2006).
const PENDIENTES = [
  { titulo: "Indiana Jones y los cazadores del arca perdida", anio: 1981, alternativo: "Raiders of the Lost Ark" },
  { titulo: "La gran escapada", anio: 1986, alternativo: null },
  { titulo: "Muerto de risa", anio: 1999, alternativo: null },
  { titulo: "Parasite", anio: 2019, alternativo: "Parasite" }, // mismo título, solo cambia el idioma de búsqueda
  { titulo: "Pan's Labyrinth adaptación", anio: 2021, alternativo: "El laberinto del fauno" }, // título real de la película original
  { titulo: "Tiburón blanco: El rey de los mares", anio: 2013, alternativo: null },
  { titulo: "El planeta de los océanos", anio: 2012, alternativo: null },
];

async function buscar(query, { anio, lang } = {}) {
  let url = `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
  if (anio) url += `&year=${anio}`;
  url += `&language=${lang || "es-ES"}`;

  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (data.results && data.results.length > 0 && data.results[0].poster_path) {
    return data.results[0];
  }
  return null;
}

async function resolver(item) {
  // 1) título + año, español
  let r = await buscar(item.titulo, { anio: item.anio });
  if (r) return { ...r, metodo: "titulo+año (es)" };

  // 2) título sin año, español
  r = await buscar(item.titulo);
  if (r) return { ...r, metodo: "titulo sin año (es)" };

  // 3) alternativo + año, español
  if (item.alternativo && item.alternativo !== item.titulo) {
    r = await buscar(item.alternativo, { anio: item.anio });
    if (r) return { ...r, metodo: "alternativo+año (es)" };
  }

  // 4) alternativo sin año, inglés
  if (item.alternativo) {
    r = await buscar(item.alternativo, { lang: "en-US" });
    if (r) return { ...r, metodo: "alternativo (en)" };
  }

  // 5) título original sin año, inglés
  r = await buscar(item.titulo, { lang: "en-US" });
  if (r) return { ...r, metodo: "titulo (en)" };

  return null;
}

console.log("Resolviendo pendientes...\n");
const resultados = [];

for (const item of PENDIENTES) {
  const encontrado = await resolver(item);
  if (encontrado) {
    const imagen = `${IMG_BASE_URL}${encontrado.poster_path}`;
    console.log(`✅ ${item.titulo}`);
    console.log(`   → encontrado como "${encontrado.title}" (${encontrado.release_date?.slice(0,4) || "?"}) vía [${encontrado.metodo}]`);
    console.log(`   → ${imagen}\n`);
    resultados.push({ titulo: item.titulo, imagen, encontradoComo: encontrado.title, metodo: encontrado.metodo });
  } else {
    console.log(`❌ ${item.titulo} — sin suerte en ningún intento\n`);
    resultados.push({ titulo: item.titulo, imagen: null });
  }
}

await writeFile("pendientes_resueltos.json", JSON.stringify(resultados, null, 2), "utf-8");
console.log("Guardado en pendientes_resueltos.json (revisalo antes de aplicar nada).");