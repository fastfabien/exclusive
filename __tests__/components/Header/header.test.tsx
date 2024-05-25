import { Header, Logo, Navbar, SearchBar } from "@/components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("Header", () => {
  it("should render normaly", () => {
    render(<Header />);
    const header = screen.getByTestId("header");
    expect(header).toHaveClass("flex flex-row justify-between");
  });
  it("logo must be rendered", () => {
    render(<Logo />, {
      wrapper: MemoryRouterProvider,
    });
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);
    expect(mockRouter.asPath).toEqual("/");
  });
  it("logo image must appear", () => {
    render(<Logo />, {
      wrapper: MemoryRouterProvider,
    });
    const image = screen.getByTestId("imageLogo");
    expect(image).toBeInTheDocument();
  });
  it("should render navbar", () => {
    render(<Navbar />, {
      wrapper: MemoryRouterProvider,
    });
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
  it("should rend all link", () => {
    render(<Navbar />, {
      wrapper: MemoryRouterProvider,
    });
    const links = screen.getAllByTestId("navlink");
    fireEvent.click(links[0]);
    expect(mockRouter.asPath).toEqual("/");
  });
  it("search bar should normaly render and render form with a value input change when typing", () => {
    render(<SearchBar />);

    //Verify render
    const searchBarContainer = screen.getByTestId("searchbar");
    const form = screen.getByTestId("searchForm");
    expect(searchBarContainer).toBeInTheDocument();
    const input = screen.getByRole("searchbox");

    //verify on change function
    fireEvent.change(input, { target: { value: "test" } });
    expect((input as HTMLInputElement).value).toBe("test");

    //verify submit
    fireEvent.submit(form);
  });
});
