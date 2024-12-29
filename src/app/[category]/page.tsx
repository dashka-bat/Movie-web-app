"use client"
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
import { useState,useEffect, use } from "react";
import { movieDetails } from "../constants/types";

import { Body } from "../_components/Body";
// type Props = {
//   params: {
//     id: string;

//     category: string;
//   };
// };
export default function Home() {



  const params=useParams();
  const searchParams=useSearchParams();
  const page=searchParams.get(`page`);
  const [movies,setmovie]=useState<any[]>();
  const Tdb = "https://image.tmdb.org/t/p/w500/";
  useEffect(()=>{
    const fetchMovies=async()=>{
      const url =`https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=1${page}`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      };
let movies:movieDetails[]=[];
const res=await fetch(url,options);
const data=await res.json();
setmovie(data.results);

    }
    fetchMovies();
  },[params]);
  
  return (
    <>
     <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

   



     </div>
      {/* <Body category={params.category} endpoint={params.category} /> */}
      <Pagination>
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
      </Pagination>
    </>
  );
}
