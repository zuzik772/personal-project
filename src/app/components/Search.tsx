"use client";

import { FaMagnifyingGlass as MagnifyingGlassIcon } from "react-icons/fa6";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
//You're updating the URL on every keystroke, and therefore querying your database on every keystroke! This isn't a problem as our application is small, but imagine if your application had thousands of users, each sending a new request to your database on each keystroke.

// Debouncing is a programming practice that limits the rate at which a function can fire. In our case, you only want to query the database when the user has stopped typing.
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  //useSearchParams does not take any parameters and returns a read-only version of the URLSearchParams interface, which includes utility methods for reading the URL's query string
  const pathname = usePathname();
  const { replace } = useRouter();

  //use debounce to ensure that a function doesn't run too often
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    //replace method from the router, which replaces the current entry in the history stack instead of adding a new one
  }, 300);
  // delay of 300 milliseconds, meaning it will only be invoked after the user has stopped typing for 300 milliseconds.

  return (
    <div className="relative flex">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        className=" border-gray-400 pl-10"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
}
