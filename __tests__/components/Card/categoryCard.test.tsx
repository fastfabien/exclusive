import { CategoryCard } from "@/components/Card";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("Category card", () => {
  it("should render correctly", () => {
    render(<CategoryCard lien="/1" logo="/logo.png" name="logo" />, {
      wrapper: MemoryRouterProvider,
    });
    const container = screen.getByTestId("logoCard");
    expect(container).toBeInTheDocument();
    fireEvent.click(container);
    expect(mockRouter.asPath).toEqual("/category/1");
  });
});
