"use client";

import { ChangeEvent } from "react";

type SearchInputprops = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};
export function SearchInput({ value, handleChange }: SearchInputprops) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="search.....?"
        onChange={handleChange}
        className="h-8 mt-2 ml-2 border-[2px] border-gray-300 mr-[900px] rounded-lg text-black"
      ></input>
    </div>
  );
}
