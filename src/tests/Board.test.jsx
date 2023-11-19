import { render } from "@testing-library/react";
import Board from "../Board";

// - rendering the starter ***Board***: you could write this as a snapshot test, but you’d need to make sure the initial board configuration was predictable in the tests. How could you do that?
// - handling cell-clicking: this is harder test, but has the most value. You’ll need to do a non-shallow render of the ***Board***, then find a cell, and ensure that clicking it causes the right cells to flip.
// - checking for a win and showing a “You won!” message.

// smoke Test
it("should render without crashing", () => {
  render(<Board />);
});
