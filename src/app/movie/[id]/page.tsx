import { notFound } from "next/navigation";
import { TopIcon } from "@/app/_components/topicon";
import { options } from "@/app/constants/types";

// Type definitions outside the function
type Genre = {
  id: number;
  name: string;
};

type CrewMember = {
  job: string;
  name: string;
};

type CastMember = {
  id: number;
  name: string;
  popularity: number;
};

type MovieDetails = {
  id: string;
  title: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
};

type CreditsResponse = {
  crew: CrewMember[];
  cast: CastMember[];
};

type PageProps = {
  params: Promise<{
    id: string | number;
  }>;
};
export default async function Page({ params }: PageProps) {
  try {
    const { id: movieId } = await params; // Await the params to get the movieId

    // Fetch credits data
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const res = await fetch(creditsUrl, options);
    const resJsonn: CreditsResponse = await res.json();

    // Fetch movie details
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    const response = await fetch(movieUrl, options);
    const resJson: MovieDetails = await response.json();

    if (!res.ok || !response.ok) {
      throw new Error("Failed to fetch data");
    }

    const Tdb = "https://image.tmdb.org/t/p/w500";

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
          alt={resJson.title}
        />
        <div className="flex mt-6">
          <div className="ml-5">
            <img
              className="rounded-lg"
              src={`${Tdb}${resJson.poster_path}`}
              alt={resJson.title}
            />
          </div>
          <div className="ml-14">
            <div className="flex">
              {resJson.genres.map((genre: Genre) => (
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
          Найруулагч
          <div className="mr-16">
            {resJsonn.crew
              .filter((director: CrewMember) => director.job === "Director")
              .map((director: CrewMember) => (
                <h1 key={director.name}>{director.name}</h1>
              ))
              .slice(0, 3)}
          </div>
        </div>
        <div className="border-b-2 flex justify-between mt-10">
          Зохиолч
          <div>
            {resJsonn.crew
              .filter((writer: CrewMember) => writer.job === "Story")
              .map((writer: CrewMember) => (
                <h1 key={writer.name}>{writer.name},</h1>
              ))
              .slice(0, 3)}
          </div>
        </div>
        <div className="border-b-2 flex justify-between mt-10">
          Одод
          <div>
            {resJsonn.cast
              .filter((star: CastMember) => star.popularity)
              .map((star: CastMember) => <h1 key={star.id}>{star.name}</h1>)
              .slice(0, 3)}
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
