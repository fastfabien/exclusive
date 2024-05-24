import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <div
      className="flex flex-row justify-between items-center py-10 px-32"
      data-testid="header"
    >
      <Logo />
      <Navbar />
      <SearchBar />
    </div>
  );
};
