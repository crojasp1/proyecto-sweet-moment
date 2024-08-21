import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

import App from "./App";

test("Should show the app title", () => {
  render(<App />);

  screen.queryAllByText("Sweet Moment");
});
