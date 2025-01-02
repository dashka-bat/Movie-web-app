import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight, Film } from "lucide-react";

import { Search } from "lucide-react";
import { Play } from "lucide-react";

import { Moon } from "lucide-react";
const search = () => {
  return alert("hiiiii");
};
const TopIcon = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between mb-4">
        <div className="flex text-purple-500 ml-5 gap-3 mt-5">
          <Film />
          Movie Z
        </div>
        <div className="flex">
          <button
            onClick={search}
            className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-3 mt-3"
          >
            <Search className="w-[16px] h-[16px]" />
          </button>
          <button className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-5 mt-3">
            <Moon className="w-[16px] h-[16px] " />
          </button>
        </div>
      </div>
    </div>
  );
};
export { TopIcon };
