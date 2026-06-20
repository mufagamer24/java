// No usa import: lee movies.js como texto y lo evalúa,
// así no depende de que movies.js tenga (o no) un export.

const API_KEY = "f3c49dc19a903b3d5cdf975b4da8ddd6";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

import { readFile, writeFile } from "fs/promises";

// 1. Leemos movies.js como texto plano
const codigoFuente = await readFile("./movies.js", "utf-8");

// 2. Lo evaluamos en un módulo temporal para obtener el array PELICULAS
//    (funciona sin importar si movies.js tiene export o no)
const codigoEvaluable = codigoFuente.replace(
  /export\s+default\s+PELICULAS\s*;?/,
  ""
) + "\nexport default PELICULAS;";

await writeFile("./_movies_temp.mjs", codigoEvaluable, "utf-8");
const { default: PELICULAS } = await import("./_movies_temp.mjs");

async function obtenerPortadas(peliculas) {
  const peliculasActualizadas = [];
  let exitos = 0;
  let fallos = 0;

  for (const pelicula of peliculas) {
    try {
      const url = `${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(pelicula.titulo)}&year=${pelicula.anio}&language=es-ES`;
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`❌ HTTP ${response.status} para: ${pelicula.titulo}`);
        const errorBody = await response.text();
        console.error(`   Respuesta: ${errorBody}`);
        fallos++;
        peliculasActualizadas.push(pelicula);
        continue;
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const poster = data.results[0].poster_path;
        if (poster) {
          pelicula.imagen = `${IMG_BASE_URL}${poster}`;
          exitos++;
          console.log(`✅ ${pelicula.titulo}`);
        } else {
          console.warn(`⚠️  Sin poster para: ${pelicula.titulo}`);
          fallos++;
        }
      } else {
        console.warn(`⚠️  Sin resultados para: ${pelicula.titulo} (${pelicula.anio})`);
        fallos++;
      }
      peliculasActualizadas.push(pelicula);
    } catch (error) {
      console.error(`❌ Error de red para ${pelicula.titulo}:`, error.message);
      fallos++;
      peliculasActualizadas.push(pelicula);
    }
  }

  console.log(`\n--- Resumen: ${exitos} con portada, ${fallos} sin portada ---`);
  return peliculasActualizadas;
}

const peliculasConPortadas = await obtenerPortadas(PELICULAS);

// 3. Guardamos el resultado SIN export, listo para reemplazar movies.js en la web
const contenidoFinal = `const PELICULAS = ${JSON.stringify(peliculasConPortadas, null, 2)};\n`;
await writeFile("./movies_actualizado.js", contenidoFinal, "utf-8");

// 4. Limpiamos el archivo temporal
await import("fs/promises").then(fs => fs.unlink("./_movies_temp.mjs"));

console.log("\nListo! Revisá movies_actualizado.js");