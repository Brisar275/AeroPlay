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
      
    </main>
  );
}