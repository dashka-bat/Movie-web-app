"use client"
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight, Film } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { Search } from "lucide-react";
import { Play } from 'lucide-react';
import { type CarouselApi } from "@/components/ui/carousel"
import { Moon } from "lucide-react";import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input";
export const Header = () => {
  const [api, setApi] =useState<CarouselApi>()
  const [current, setCurrent] =useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
 
    
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  const search=()=>{
    return(alert("hiiiii"))
  }
  return (
    <div>
      <div className="flex gap-5 justify-between">
        <div className="flex text-purple-500 ml-5 gap-3 mt-5">
          <Film />
          Movie Z
        </div>
        <div className="flex">
          <button onClick={search} className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-3 mt-3">
            <Search className="w-[16px] h-[16px]" />
          </button>
          <button className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-5 mt-3">
            <Moon className="w-[16px] h-[16px] " />
          </button>
        </div>
      </div>
      <div>
      <Carousel setApi={setApi} opts={{loop:true}}>
  <CarouselContent>
    <CarouselItem><img className="sm:min-w-[375px] 2xl:w-[1536px]" src="pic1.png" alt="" />
    <div className="text-[14px]">Now playing:
      <div className="flex justify-between"><p className="text-[24px] ">Wicked</p>
      <p className="text-[18px]">⭐6.9/10</p></div>
      <p className="text-[14px]">Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. </p>
     <Button className="w-[145px] h-[40px]"> <Play/>watch trailer</Button> </div></CarouselItem>
    <CarouselItem><img className="h-[246px]" src="pic2.png" alt="" />
    <div className="text-[14px]" >Now playing:
      <div className="flex justify-between"><p className="text-[24px] ">Gladiator II</p>
      <p className="text-[18px]">⭐6.9/10</p></div>
<p className="text-[14px]">After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.</p>     
<Button className="w-[145px] h-[40px]"><Play/>watch trailer</Button> </div></CarouselItem>
    <CarouselItem><img className="h-[246px]" src="pic3.png" alt="" />
    <div className="text-[14px]">Now playing:
      <div className="flex justify-between"><p className="text-[24px] ">Moana 2</p>
      <p className="text-[18px]">⭐6.9/10</p></div>
<p className="text-[14px]">After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.</p>     
<Button className="w-[145px] h-[40px]"><Play/>watch trailer</Button> </div></CarouselItem>
  </CarouselContent>
</Carousel>
<div className="flex gap-5">
<Button onClick={()=>{api?.scrollTo(current+1)}}><ArrowBigRight/></Button></div>


      </div>
      {/* <Button onClick={()=>{api?.scrollTo(current-1)}}><ArrowBigLeft/></Button> */}
    </div>
  );
};
