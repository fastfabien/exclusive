"use client";
import { Heart, SearchIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
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
        className="flex flex-row gap-3 justify-between bg-input items-center border-lg pl-5 pr-3 py-3 rounded-md w-64 "
      >
        <input
          type="search"
          placeholder="What are you looking for?"
          className="shadow-none p-0 rounded-none border-none focus-visible:ring-0 text-base bg-transparent outline-none placeholder:text-xs w-4/5"
          value={searchValue}
          onChange={(e) => handleChangeSearchValue(e)}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <div className="flex flex-row gap-4">
        <Heart width={32} height={32} />
        <ShoppingCart width={32} height={32} />
      </div>
    </div>
  );
};
