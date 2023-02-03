import { useState, useEffect } from "react";
import Seo from "components/Seo";

export default function Home({ results }) {
  const [movies, setMovies] = useState();

  return (
    <>
      <Seo title={"home"} />
      {results?.map((movie) => (
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

//이 이름은 꼭 지켜져야 함!
//어떤 코드를 안에 집어 넣든 이 안의 코드는 그 코드는 server에서 돌아가게 될 것이다!!
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

//URL -> ABOUT.JS DEFAULT 컴포넌트 확인 -> _APP.js ->
