import { Header } from "@/app/_components/header";
import { TopIcon } from "@/app/_components/topicon";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";

import { ArrowBigLeft, ArrowBigRight, Film } from "lucide-react";
import { movieDetails } from "@/app/constants/types";
import { options } from "@/app/constants/types";
// const ad = `https://api.themoviedb.org/3/movie/${params.id}/credits`;
type Genre = {
  id: number;
  name: string;
};
// console.log(ad);
export default async function Page({ params }: movieDetails) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id},`,
    options
  );
  const Tdb = "https://image.tmdb.org/t/p/w500";
  const resJson = await response.json();
  console.log(resJson);
  return (
    <div>
      <div>
        <div className="flex gap-5 justify-between">
          <div className="flex text-purple-500 ml-5 gap-3 mt-5">
            <Film />
            Movie Z
          </div>
          <div className="flex">
            <button className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-3 mt-3">
              <Search className="w-[16px] h-[16px]" />
            </button>
            <button className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-5 mt-3">
              <Moon className="w-[16px] h-[16px] " />
            </button>
          </div>
        </div>
      </div>
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
          <img src={`${Tdb}${resJson.poster_path}`}></img>
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
      <div>director</div>
      <div>writer</div>
      <div>director</div>
    </div>
  );
}
