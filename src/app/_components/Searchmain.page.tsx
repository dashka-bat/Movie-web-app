"use client"

import { ChangeEvent, useState } from "react"
import { SearchInput } from "./Searchinput";
import { SearchResult1 } from "./Searchresult";
   
export const SearchForMainPage=()=>{
    const [searchValue,setSearchValue]=useState<string>(``);
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(event.target.value)
    }
    return(
        <div className="relative">
          <SearchInput handleChange={handleChange} value={searchValue}/>
          {searchValue&&<SearchResult1 searchValue={searchValue}/>}
        </div>
    )
}