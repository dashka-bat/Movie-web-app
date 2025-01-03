"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, use } from "react";
import { Movie } from "../constants/types";
import { Pagination1 } from "../_components/pagination";
import { TopIcon } from "../_components/topicon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageInfo } from "next/dist/build/utils";

type Props = {
  endpoint: string;

  category: string;
};

export default function Home({ category, endpoint }: Props) {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get(`page`);
  const [movies, setmovie] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState<any>({
    totalPages: 0,
    currentPage: 0,
  });
  const Tdb = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=1${page}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      };
      let movies: Movie[] = [];
      const res = await fetch(url, options);
      const data = await res.json();
      setmovie(data?.results?.slice(0, 5));

      setPageInfo({ currentPage: Number(page), totalPages: data.total_pages });
    };
    fetchMovies();
  }, [params]);

  return (
    <div>
      <TopIcon />
      <div className="flex justify-between">
        <div className="text-[24px] text-pretty ml-5 mt-2">
          {params.category}
        </div>
        <Button>see more</Button>
      </div>

      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((movie: Movie) => (
          <Link href={`/movie/${movie.id}`}>
            {" "}
            <div key={movie.id}>
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
          </Link>
        ))}
      </div>
      <Pagination1 pageInfo={pageInfo} />
    </div>
  );
}
