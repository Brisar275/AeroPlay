import React from 'react'
import Grilla from "../componentes/Grilla";

export default function TendenciasPage() {
  const cartelera = "https://api.themoviedb.org/3//movie/popular?api_key=eb7e3fd7272143562cec959061b5eb32&language=es-ES";

  return (
    <main>
      <Grilla titulo="Populares" endpoint={cartelera} />
    </main>
  );
}