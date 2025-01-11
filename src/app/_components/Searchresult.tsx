"use client";
import { options } from "../constants/types";
import { useEffect, useState } from "react";
import { Movie } from "../constants/types";
import Link from "next/link";
import { title } from "process";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
type SearchResultProps = {
  searchValue: string;
};
const Tdb = "https://image.tmdb.org/t/p/w500/";
export const SearchResult1 = ({ searchValue }: SearchResultProps) => {
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      setMovies(data.results?.slice(0, 5));
      console.log(movies);
    };

    fetchMovies();
  }, [searchValue]);
  console.log(movies, "ahhahahhahahhahahahahha");
  return (
    <div className="absolute top-16 md:top-14 w-full max-w-[577px] bg-background rounded-lg shadow-lg z-10">
      {!movies ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="p-3">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div className="flex mt-6">
                  <img
                    className="rounded-t-lg w-[67px] h-[100px] "
                    src={`${Tdb}${movie.poster_path}`}
                  ></img>
                  <div>
                    {movie.title}
                    <div>⭐{movie.vote_average.toFixed(1)}/10</div>
                    {/* <div>{movie.release_date}</div> */}
                    <button>see more -</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-3 pt-0">
            <Link
              href={`/searchPage?query=${searchValue}`}
              className="py-2.5 px-4  text-[14px]"
            >
              see all results for:"{searchValue}""
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
