// import { useState } from "react";

import { type } from "os";

// import { useEffect } from "react";
const Tdb = "https://image.tmdb.org/t/p/";

export const Body = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      let Data = data.results;
      console.log(Data);
      let Rating = Data.vote_average;
    });

  return (
    <div className="bg-gray-500 w-[157.5px] h-[309.1px]">
      <div>⭐️{}/10</div>
      <div></div>
      <img src={`${Tdb}`} alt="" />
    </div>
  );
};

// export const Card = () => {
//   return (
//     <div className="bg-gray-500 w-[157.5px] h-[309.1px]">
//       <div>⭐️</div>
//       <div>{Information.Title}</div>
//     </div>
//   );
// };
