import { MenuCategory } from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Menu category", () => {
  it("Should render normaly", () => {
    render(<MenuCategory />);
    const container = screen.getByTestId("menucategory");
    expect(container).toBeInTheDocument();
  });
});
