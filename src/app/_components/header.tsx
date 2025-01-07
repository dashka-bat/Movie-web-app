"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight, Film } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { Search } from "lucide-react";
import { Play } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Moon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { TopIcon } from "./topicon";
export const Header = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const search = () => {
    return alert("hiiiii");
  };
  return (
    <div>
      <TopIcon />
      
      <div>
        <Carousel className="snap-normal" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <img src="pic1.png" alt="" />
              <div className="text-[14px] ml-5">
                Now playing:
                <div className="flex justify-between">
                  <p className="text-[24px] ">Wicked</p>
                  <p className="text-[18px] mr-5">⭐6.9/10</p>
                </div>
                <p className="text-[14px]">
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a
                  crossroads..
                </p>
                <Button className="w-[145px] h-[40px]">
                  <Play />
                  watch trailer
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src="pic2.png" alt="" />
              <div className="text-[14px] ml-5">
                Now playing:
                <div className="flex justify-between">
                  <p className="text-[24px] ">Gladiator II</p>
                  <p className="text-[18px] mr-5">⭐6.9 /010</p>
                </div>
                <p className="text-[14px]">
                  After his home is conquered by the tyrannical emperors who now
                  lead Rome, Lucius is forced to enter the Colosseum and must
                  look to his past to find strength to return the glory of Rome
                  to its people.
                </p>
                <Button className="w-[145px] h-[40px]">
                  <Play />
                  watch trailer
                </Button>{" "}
              </div>
            </CarouselItem>
            <CarouselItem>
              <img src="pic3.png" alt="" />
              <div className="text-[14px] ml-5">
                Now playing:
                <div className="flex justify-between">
                  <p className="text-[24px] ">Moana 2</p>
                  <p className="text-[18px] mr-5">⭐6.9/10</p>
                </div>
                <p className="text-[14px]">
                  After receiving an unexpected call from her wayfinding
                  ancestors, Moana must journey to the far seas of Oceania and
                  into dangerous, long-lost waters for an adventure unlike
                  anything she's ever faced.
                </p>
                <Button className="w-[145px] h-[40px]">
                  <Play />
                  watch trailer
                </Button>{" "}
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex gap-5">
          <Button
            className="ml-5"
            onClick={() => {
              api?.scrollTo(current + 1);
            }}
          >
            <ArrowBigRight />
          </Button>
        </div>
      </div>
      {/* <Button onClick={()=>{api?.scrollTo(current-1)}}><ArrowBigLeft/></Button> */}
    </div>
  );
};
