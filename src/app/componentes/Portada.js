"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Portada({ endpoint }) {
  const [peliculaRandom, setPeliculaRandom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerPortada = async () => {
      try {
        setLoading(true);

        const respuesta = await axios.get(endpoint);
        const resultado = respuesta.data.results;

        const indiceRandom = Math.floor(Math.random() * resultado.length);
        setPeliculaRandom(resultado[indiceRandom]);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar la portada:", error);
      }
    };

    obtenerPortada();
  }, []);

  if (loading || !peliculaRandom) {
    return (
      <div className="flex items-center justify-center text-white">
        Cargando portada
      </div>
    );
  }

  return (
    <div className="px-40">
      {" "}
      <div className="bg-gradient-to-b from-gray-500 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)] p-2 rounded-2xl h-screen">
        <section className="relative w-full h-full flex items-end pb-10 px-8 overflow-hidden p-30 rounded-xl">
          <img
            src={`https://image.tmdb.org/t/p/original${peliculaRandom.backdrop_path}`}
            alt={`Fondo de ${peliculaRandom.title}`}
            className="absolute inset-0 w-full h-full object-cover -z-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

          <div className="relative z-20 max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {peliculaRandom.title}
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 mb-6 line-clamp-3">
              {peliculaRandom.overview}
            </p>

            <Link
              href={`/movie/${peliculaRandom.id}`}
              className="inline-block bg-red-900 bg-gradient-to-b from-red-400/60 to-red-900 shadow-[inset_0_0px_3px_rgba(0,0,01)] text-white px-8 py-3 rounded-lg text-lg"
            >
              Ver detalle
            </Link>
          </div>
        </section>{" "}
      </div>
    </div>
  );
}
