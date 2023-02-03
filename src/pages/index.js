import { useState, useEffect } from "react";
import Seo from "components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title={"home"} />
      {!movies && <h4>Loading....</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
}
