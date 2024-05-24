"use client";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";

export const Subscribe = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeSearchValue = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div data-testid="searchbar" className="flex flex-row items-center gap-6">
      <form
        data-testid="searchForm"
        onSubmit={(e: any) => handleSearch(e)}
        className="flex flex-row gap-3 justify-between bg-transparent items-center border-white border border-lg pl-5 pr-3 py-3 rounded-md w-64 "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="shadow-none p-0 rounded-none border-none focus-visible:ring-0 text-base bg-transparent outline-none placeholder:text-xs w-4/5"
          value={searchValue}
          onChange={(e) => handleChangeSearchValue(e)}
        />
        <button type="submit">
          <SendHorizonal />
        </button>
      </form>
    </div>
  );
};
