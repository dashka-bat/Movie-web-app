import { Film } from "lucide-react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
export const Header = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between">
        <div className="flex text-purple-500 ml-5 gap-3 mt-5">
          <Film />
          Movie Z
        </div>
        <div className="flex">
          <div className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-3 mt-3">
            <Search className="w-[16px] h-[16px]" />
          </div>
          <div className="w-[36px] h-[36px] border-[2px] rounded-lg flex justify-center items-center mr-5 mt-3">
            <Moon className="w-[16px] h-[16px] " />
          </div>
        </div>
      </div>
    </div>
  );
};
