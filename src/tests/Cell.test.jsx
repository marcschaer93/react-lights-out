import { render } from "@testing-library/react";
import Cell from "../Cell";

// rendering a cell Cell properly: this is a straightforward test, and could even be a snapshot test

// smoke Test
it("should render without crashing", () => {
  render(<Cell />);
});

// snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(
    <Cell isLit={false} flipCellsAroundMe={10 - 7} />
  );
  expect(asFragment()).toMatchSnapshot();
});
