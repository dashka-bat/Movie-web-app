"use client";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useEffect, useState } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
type Genretype = {
  id: number;
  genres: string;
  name: string;
};
export const FilterG = () => {
  const [genres, setGenre] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        options
      );
      const data = await res.json();
      setGenre(data.genres);
      // console.log(data);
    };
    fetchGenre();
  }, [genres]);
  // const onclickGenre = (genreId: number) => {};
  return (
    <div className="border-[2px]">
      <Popover>
        <PopoverTrigger>⬇</PopoverTrigger>
        <PopoverContent>
          {genres?.map((genre: Genretype) => (
            <Link href={`/search?with_genres=${genre.id}`}>
              <Badge key={genre?.id}>{genre?.name}→</Badge>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};