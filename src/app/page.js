import Grilla from "./componentes/Grilla";
import Portada from "./componentes/Portada";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";

  const endpoints = {
    tendencias: `${baseUrl}/trending/movie/day?api_key=${apiKey}&language=es-ES`,
    populares: `${baseUrl}/movie/popular?api_key=${apiKey}&language=es-ES`,
    cartelera: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=es-ES`,
  };
  return (
    <div>
      <main>
        <Portada endpoint={endpoints.tendencias} />

        <Grilla
          titulo="Películas en Tendencia"
          endpoint={endpoints.tendencias}
          limite={12}
        />

        <Grilla
          titulo="Películas Populares"
          endpoint={endpoints.populares}
          limite={12}
        />

        <Grilla
          titulo="En Cartelera"
          endpoint={endpoints.cartelera}
          limite={12}
        />
      </main>
    </div>
  );
}
