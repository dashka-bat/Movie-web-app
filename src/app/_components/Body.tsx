// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Movie } from "../constants/types";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

// import { useEffect } from "react";
const Tdb = "https://image.tmdb.org/t/p/w500";
type Props = {
  category: string;
  endpoint: string;
};

export const Body = async ({ category, endpoint }: Props) => {
  const url = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const movies = data.results;
  console.log(movies);

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-[24px] text-pretty">{category}</div>
        <Link href={`/${endpoint}`}>
          <Button>
            see more
            <ArrowBigRight />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies
          ?.map((movie: Movie) => (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <img
                  className="rounded-t-lg ml-8"
                  src={`${Tdb}${movie.poster_path}`}
                  width={160}
                  height={240}
                ></img>
                <div className="bg-[#F4F4F5] w-[160px] h-[76px] ml-8 ">
                  <div>⭐{movie.vote_average.toFixed(1)}/1000</div>
                  <h3 className="text-[14px]">{movie.title}</h3>
                  <h3 className="text-[14px]">{movie.id}</h3>
                </div>
              </Link>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </div>
  );
};
