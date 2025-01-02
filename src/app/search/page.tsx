"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function SearchResult() {
  const searchParams = useSearchParams();
  const genres = searchParams.get(`with_genres`);
  console.log(genres);
  useEffect(() => {});
  return <div>{genres}</div>;
}
