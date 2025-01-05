import { Header } from "@/app/_components/header";
import { TopIcon } from "@/app/_components/topicon";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";

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
  // console.log(resJsonn.crew, "------------+++++++");
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
        className="rounded-t-lg"
        src={`${Tdb}${resJson.backdrop_path}`}
      ></img>
      <div className="flex mt-6">
        <div className="ml-5">
          <img
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
      <div>
        director
        {resJsonn?.crew?.map((cast: any) => <div>{cast.name}</div>).slice(0, 3)}
      </div>
      <div>writer</div>
      <div>stars</div>
      <div>more like this
        <div>kk</div>
      </div>
    </div>
  );
}
