"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DetallePelicula() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        setLoading(true);
        const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32&language=es-ES`;
        
        const respuesta = await axios.get(endpoint);
        setPelicula(respuesta.data);
        setLoading(false);
      } catch (err) {
        console.error("Error en la API:", err);
        setError("No se pudo cargar el detalle de la película.");
      }
    };

    if (id) {
      obtenerDetalle();
    }
  }, [id]);

  if (loading) return <div className="text-white p-8 min-h-screen bg-gray-900 font-[IBM.ttf]">Cargando detalles de la película...</div>;
  if (error) return <div className="text-red-500 p-8 min-h-screen bg-gray-900 font-[IBM.ttf]">{error}</div>;
  if (!pelicula) return null;

  return (
    <main className="mx-40 font-[IBM.ttf] text-white">
      <Link 
        href="/" 
        className="inline-block bg-gradient-to-b from-gray-500 to-gray-900 mb-8 text-gray-300 hover:text-white transition-colors border border-gray-600 px-4 py-2 rounded-lg"
      >
        ← Volver al inicio
      </Link>

      <section className="flex flex-col md:flex-row gap-10 bg-gradient-to-b from-gray-500 to-gray-900 p-8 rounded-xl shadow-[inset_0_0px_3px_rgba(0,0,01)]">
        
        <div className="w-full md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={`Póster de ${pelicula.title}`}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {pelicula.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {pelicula.genres.map((genero) => (
              <span className="bg-indigo-900 bg-gradient-to-b from-indigo-400/60 to-indigo-900 shadow-[inset_0_0px_3px_rgba(0,0,01)] px-4 py-2 rounded-md" >
                {genero.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-300 mb-6 bg-gray-800/50 p-4 rounded-lg">
            <p><strong>Estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Duración:</strong> {pelicula.runtime} minutos</p>
            <p><strong>Puntuación:</strong> {pelicula.vote_average}</p>
            <p><strong>Votos:</strong> {pelicula.vote_count}</p>
          </div>

          <h2 className="text-2xl font-bold mb-2">Sinopsis</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {pelicula.overview ? pelicula.overview : "No hay sinopsis disponible"}
          </p>
        </div>
      </section>
    </main>
  );
}