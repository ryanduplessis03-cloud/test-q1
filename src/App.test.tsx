import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Fab Curtains & Blinds cleaning landing page", () => {
  it("presents the redesigned cleaning site with fast visuals and AI estimates", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /curtain & blind cleaning that starts with a photo/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /request a cleaning quote/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/choose the covering type/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/smooth scroll preview/i)).toBeInTheDocument();
    expect(screen.getAllByText(/fast static preview ready/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/confidence rating/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByTestId("style-card")).toHaveLength(6);
    expect(screen.getAllByTestId("gallery-card")).toHaveLength(10);
    expect(screen.queryByText(/supply/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/installation/i)).not.toBeInTheDocument();
  });

  it("loads visual cards lazily with image fallbacks for faster hosting", () => {
    render(<App />);

    const galleryImages = screen.getAllByTestId("gallery-image");
    expect(galleryImages).toHaveLength(10);

    galleryImages.forEach((image) => {
      expect(image).toHaveAttribute("loading", "lazy");
      expect(image).toHaveAttribute("decoding", "async");
      expect(image).toHaveAttribute("src");
      expect(image.getAttribute("src")).not.toMatch(/^data:/);
      expect(image).toHaveAttribute("alt");
    });
  });

  it("switches broken gallery images to the static fallback preview", () => {
    render(<App />);

    const firstGalleryImage = screen.getAllByTestId("gallery-image")[0];
    fireEvent.error(firstGalleryImage);

    expect(firstGalleryImage).toHaveAttribute("src", "/images/fallback.svg");
    expect(firstGalleryImage.closest(".gallery-card")).toHaveClass("image-fallback");
  });

  it("also protects hero images with the static fallback preview", () => {
    render(<App />);

    const heroImage = screen.getByAltText(/bright white blinds preview/i);
    fireEvent.error(heroImage);

    expect(heroImage).toHaveAttribute("src", "/images/fallback.svg");
    expect(heroImage.closest(".hero-showcase")).toHaveClass("image-fallback");
  });
});
