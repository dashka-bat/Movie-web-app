"use client";

import { PageInfo } from "next/dist/build/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export const Pagination1 = ({ pageInfo }: { pageInfo: any }) => {
  const pathName = usePathname();
  const SearchParams = useSearchParams();
  const router = useRouter();

  const onChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(SearchParams.toString());
    newSearchParams.set(`page`, newPage.toString());
    const newURL = pathName + `?` + newSearchParams.toString();
    router.push(newURL);
  };
  const lastpage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalpages;
  return (
    <div className="flex gap-5 mt-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                onChangePage(1);
              }}
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                onChangePage(2);
              }}
              href="#"
              isActive
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                onChangePage(3);
              }}
              href="#"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
