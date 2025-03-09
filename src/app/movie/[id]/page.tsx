import { Header } from "@/app/_components/header";
import { TopIcon } from "@/app/_components/topicon";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRight, Film } from "lucide-react";
import { movieDetails } from "@/app/constants/types";
import { options } from "@/app/constants/types";

type Genre = {
  id: number;
  name: string;
};
// console.log(ad);
export default async function Page({ params }: movieDetails) {
  const ad = `https://api.themoviedb.org/3/movie/${params.id}/credits`;
  const res = await fetch(ad, options);
  const resJsonn = await res.json();
  console.log(resJsonn, "------------+++++++");
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id},`,
    options
  );
  const Tdb = "https://image.tmdb.org/t/p/w500";
  const resJson = await response.json();

  // console.log(resJson);
  return (
    <div>
      <TopIcon />
      <div className="flex justify-between ml-5 mr-5 mt-4 mb-3">
        <div>
          <div>{resJson.title}</div>
          <div>{resJson.release_date}</div>
        </div>

        <div>⭐{resJson.vote_average.toFixed(1)}/10</div>
      </div>

      <img
        className="rounded-t-lg w-5/6"
        src={`${Tdb}${resJson.backdrop_path}`}
      ></img>
      <div className="flex mt-6">
        <div className="ml-5">
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${resJson.poster_path}`}
          ></img>
        </div>
        <div className="ml-14">
          <div className="flex">
            {resJson?.genres?.map((genre: Genre) => (
              <div
                className="border-[2px] w-fit rounded-lg mt-2 h-fit gap-4"
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}
          </div>
          <div>{resJson.overview}</div>
        </div>
      </div>
      <div className="border-b-2 flex justify-between mt-10">
        director
        <div className="mr-16">
          {resJsonn?.crew
            ?.filter((director: any) => {
              return director.job == "Director";
            })
            ?.map((director: any) => <h1>{director.name}</h1>)
            .slice(0, 3)}
        </div>
      </div>
      <div className="border-b-2 flex justify-between mt-10">
        writer
        <div>
          {resJsonn?.crew
            ?.filter((writer: any) => {
              return writer.job == "Story";
            })
            ?.map((director: any) => <h1>{director.name},</h1>)
            .slice(0, 3)}
        </div>
      </div>
      <div className="border-b-2 flex justify-between mt-10">
        Stars
        <div>
          {resJsonn?.cast
            ?.filter((Stars: any) => {
              return Stars.popularity;
            })
            ?.map((director: any) => <h1 key={director.id}>{director.name}</h1>)
            .slice(0, 3)}
        </div>
      </div>
      {/* <div>
        more like this
        <button className="border-2">see more</button>
      </div> */}
    </div>
  );
}
