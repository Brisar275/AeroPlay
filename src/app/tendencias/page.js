import React from 'react'
import Grilla from "../componentes/Grilla";

export default function TendenciasPage() {
  const tendencias = "https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32&language=es-ES";

  return (
    <main>
      <Grilla titulo="Tendencias" endpoint={tendencias} />
    </main>
  );
}