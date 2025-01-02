"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
export const Pagination1 = ({}) => {
  const pathName = usePathname();
  const SearchParams = useSearchParams();
  const router = useRouter();

  const onChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(SearchParams.toString());
    newSearchParams.set(`page`, newPage.toString());
    const newURL = pathName + `?` + newSearchParams.toString();
    router.push(newURL);
  };
  return (
    <div className="flex gap-5 mt-5">
      <div
        className="border-[2px] w-5 items-center"
        onClick={() => {
          onChangePage(1);
        }}
      >
        1
      </div>
      <div
        className="border-[2px] w-5 items-center"
        onClick={() => {
          onChangePage(2);
        }}
      >
        2
      </div>
      <div
        className="border-[2px] w-5 items-center"
        onClick={() => {
          onChangePage(3);
        }}
      >
        3
      </div>
    </div>
  );
};
