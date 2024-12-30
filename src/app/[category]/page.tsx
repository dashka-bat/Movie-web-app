"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, use } from "react";
import { Movie } from "../constants/types";
import { Pagination1 } from "../_components/pagination";

import { Body } from "../_components/Body";
type Props = {
  endpoint: string;

  category: string;
};

export default function Home({ category, endpoint }: Props) {
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get(`page`);
  const [movies, setmovie] = useState<Movie[]>();
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
      setmovie(data.results);
    };
    fetchMovies();
  }, [params]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((movie: Movie) => (
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
        ))}
      </div>
      {/* <Body category={params.category} endpoint={params.category} /> */}
      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
            <PaginationLink href="#">2</PaginationLink>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
      <Pagination1 />
    </div>
  );
}
