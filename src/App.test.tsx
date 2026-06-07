import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Fab Curtains & Blinds cleaning landing page", () => {
  it("presents a cleaning-focused red and white website with AI photo estimates", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /expert curtain & blind cleaning made simple/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /get photo estimate/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/curtain cleaning/i)).toBeInTheDocument();
    expect(screen.getAllByText(/blind cleaning/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/ai photo estimate/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/confidence rating/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByTestId("gallery-card")).toHaveLength(6);
    expect(screen.queryByText(/supply/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/installation/i)).not.toBeInTheDocument();
  });
});
