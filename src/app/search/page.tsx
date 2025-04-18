"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "../constants/types";
import { pages } from "next/dist/build/templates/app-page";
import { Body } from "../_components/Body";
import { TopIcon } from "../_components/topicon";
const Tdb = "https://image.tmdb.org/t/p/w500/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export default function SearchResult() {
  const searchParams = useSearchParams();
  const genress = searchParams.get(`with_genres`);
  const [movies, setMOvies] = useState<Movie[]>();
  // console.log(genres);
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genress}?language=en-US&page=1`,
        options
      );
      const data = await response.json();
      console.log(data, "-------------------");
      setMOvies(data.results?.slice(0, 5));
    };
    fetchMovie();
  }, []);
  // console.log(movies);
  return (
    <div>
      {" "}
      <TopIcon />
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mr-8">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <div>
              <img
                className="rounded-t-lg "
                src={`${Tdb}${movie.poster_path}`}
                width={160}
                height={240}
              ></img>
              <div className="bg-[#F4F4F5] w-[160px] h-[76px] ">
                <div>⭐{movie.vote_average.toFixed(1)}/10</div>
                <h3 className="text-[14px]">{movie.title}</h3>
                <h3 className="text-[14px]">{movie.id}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
    </div>
  );
}
