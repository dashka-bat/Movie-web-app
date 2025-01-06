"use client";
import { options } from "../constants/types";
import { useEffect, useState } from "react";
import { Movie } from "../constants/types";
import Link from "next/link";
import { title } from "process";

type SearchResultProps = {
  searchValue: string;
};
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
  return (
    <div className="absolute top-16 md:top-14 w-full max-w-[577px] bg-background rounded-lg shadow-lg z-10">
      {!movies ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="p-3">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div>{movie.title}</div>
              </Link>
            ))}
          </div>

          <div className="p-3 pt-0">
            <Link
              href={`/searchPage?query=${searchValue}`}
              className="py-2.5 px-4 text-foreground"
            >
              see all results for{searchValue}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
