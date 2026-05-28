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
    <section className="py-15 px-40 font-[IBM.ttf]">
      <h2 className="rounded-lg font-[IBM.ttf] text-white font-bold text-xl py-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)] mb-6">
        {titulo}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peliculas.map((pelicula) => (
          <article
            key={pelicula.id}
            className="tarjeta-pelicula rounded-lg font-[IBM.ttf] font-bold text-xl px-6 py-4 bg-gradient-to-b from-gray-500 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={`Póster de ${pelicula.title}`}
              className="w-full rounded-md mb-3"
            />

            <h3 className="text-lg font-bold text-white truncate">
              {pelicula.title}
            </h3>

            <p className="text-sm text-zinc-300 mb-1">
              Estreno: {pelicula.release_date}
            </p>

            <p className="text-sm text-zinc-300 mb-4">
              Puntuación: {pelicula.vote_average}
            </p>

            <Link
              href={`/movie/${pelicula.id}`}
              className="block w-full text-center bg-red-900 bg-gradient-to-b from-red-400/60 to-red-900 shadow-[inset_0_0px_3px_rgba(0,0,01)] text-white font-light text-lg py-2 rounded-lg"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
