"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function GrillaSección({ titulo, endpoint }) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setLoading(true);
        const respuesta = await axios.get(endpoint);

        setPeliculas(respuesta.data.results);
        setLoading(false);
      } catch (err) {
        console.error("Error en la API:", err);
        setError("No se pudieron cargar los datos.");
      }
    };
    obtenerDatos();
  }, [endpoint]);

  if (loading) return <p className="text-white p-8">Cargando {titulo}...</p>;
  if (error) return <p className="text-red-500 p-8">{error}</p>;

  return (
    <section className="p-15 font-[IBM.ttf]">
      <h2 className="rounded-lg mb-4 font-bold text-xl text-white pt-2 pb-2 px-6 bg-gradient-to-b from-zinc-950 to-zinc-600 shadow-[inset_0_4px_5px_rgba(255,255,255,0.2)]">
        {titulo}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peliculas.map((pelicula) => (
          <article
            key={pelicula.id}
            className="tarjeta-pelicula bg-zinc-900 rounded-lg p-4 shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={`Póster de ${pelicula.title}`}
              className="w-full rounded-md mb-3"
            />

            <h3 className="text-lg font-bold text-white truncate">
              {pelicula.title}
            </h3>

            <p className="text-sm text-zinc-400 mb-1">
              Estreno: {pelicula.release_date}
            </p>

            <p className="text-sm text-zinc-400 mb-4">
              Puntuación: {pelicula.vote_average}
            </p>

            <Link
              href={`/movie/${pelicula.id}`}
              className="block w-full text-center bg-gradient-to-b from-zinc-300 to-zinc-600 text-black font-bold py-2 rounded-full"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
