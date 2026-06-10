import { useEffect, type SyntheticEvent } from "react";
import {
  BadgeCheck,
  Camera,
  ChevronRight,
  ClipboardCheck,
  ImageOff,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  WandSparkles,
  Zap
} from "lucide-react";

type GalleryItem = {
  title: string;
  tag: string;
  image: string;
};

const styleCards = [
  {
    title: "Roller blinds",
    detail: "Flat fabric surfaces, dust build-up, stain checks, and mechanism-safe care."
  },
  {
    title: "Venetian blinds",
    detail: "Slat-by-slat cleaning assessment for aluminium, faux wood, and wooden-look finishes."
  },
  {
    title: "Day and night blinds",
    detail: "Layered fabric review for dust, handling marks, and delicate cassette areas."
  },
  {
    title: "Wide format blinds",
    detail: "Large patio or stacking-door coverings with AI-assisted width and drop estimates."
  },
  {
    title: "Sheer curtains",
    detail: "Soft fabric refresh for light-filtering curtains where gentle handling matters."
  },
  {
    title: "Blockout curtains",
    detail: "Heavier fabric review for deep dust, odour, stains, and room-darkening material."
  }
];

const galleryItems: GalleryItem[] = [
  { title: "White shutter blinds", tag: "Kitchen brightness", image: "/images/blinds-white.svg" },
  { title: "Outdoor screen blinds", tag: "Large drop review", image: "/images/screen-blinds.svg" },
  { title: "Wooden-look blinds", tag: "Warm slat finish", image: "/images/wood-blinds.svg" },
  { title: "Grey blockout curtains", tag: "Heavy fabric check", image: "/images/curtains-grey.svg" },
  { title: "Soft sheer curtains", tag: "Light fabric care", image: "/images/sheers-linen.svg" },
  { title: "Roller blind mechanism", tag: "Close-up assessment", image: "/images/roller-mechanism.svg" },
  { title: "Layered day-night blind", tag: "Striped privacy fabric", image: "/images/day-night-blinds.svg" },
  { title: "Large lounge curtains", tag: "Full wall estimate", image: "/images/lounge-curtains.svg" },
  { title: "Deep-clean request", tag: "Dust and stain notes", image: "/images/deep-clean.svg" },
  { title: "Commercial blind panels", tag: "Multiple-window quote", image: "/images/commercial-panels.svg" }
];

const processSteps = [
  {
    title: "Choose the covering type",
    description: "The flow starts with curtain, blind, sheer, roller, or wide-format selection.",
    icon: WandSparkles
  },
  {
    title: "Upload clear photos",
    description: "Customers add a full image and optional close-ups of stains, dust, or damage.",
    icon: UploadCloud
  },
  {
    title: "AI estimates measurements",
    description: "The assistant estimates width, drop, condition, and a confidence rating.",
    icon: Ruler
  },
  {
    title: "Team reviews the quote",
    description: "The business receives the images, AI notes, and customer contact details.",
    icon: ClipboardCheck
  }
];

const trustCards = [
  "Fast static preview ready",
  "Smooth scroll preview",
  "Real image elements with fallbacks",
  "Photo-assisted estimates",
  "Cleaning-only service message",
  "WhatsApp-friendly quote path"
];

const fallbackImage = "/images/fallback.svg";

function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  if (event.currentTarget.dataset.fallbackApplied === "true") {
    return;
  }

  event.currentTarget.dataset.fallbackApplied = "true";
  event.currentTarget.src = fallbackImage;
  event.currentTarget.closest(".gallery-card, .hero-showcase")?.classList.add("image-fallback");
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <main className="site-shell">
      <header className="hero" id="home">
        <nav className="topbar" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Fab Curtains and Blinds cleaning home">
            <span className="brand-mark">fab</span>
            <span className="brand-copy">
              Curtains & Blinds
              <small>Cleaning estimates</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#styles">Styles</a>
            <a href="#photo-estimate">AI estimate</a>
            <a href="#gallery">Gallery</a>
            <a href="#quote" className="nav-cta">Quote</a>
          </div>
        </nav>

        <section className="hero-grid section-wrap" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">Red / white cleaning website rebuild</p>
            <h1>Curtain & Blind Cleaning That Starts With a Photo</h1>
            <p className="hero-lead">
              A faster, image-rich booking page for customers who cannot measure.
              They choose the covering type, upload photos, and let the AI estimate
              size, condition, and cleaning difficulty before the team confirms.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quote">
                Request a Cleaning Quote
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#gallery">
                View gallery flow
              </a>
            </div>
            <div className="hero-stats" aria-label="Website improvements">
              <span><Zap size={18} aria-hidden="true" /> Fast static preview ready</span>
              <span><Camera size={18} aria-hidden="true" /> More picture cards</span>
              <span><BadgeCheck size={18} aria-hidden="true" /> Cleaning-only focus</span>
            </div>
          </div>

          <div className="hero-showcase" role="group" aria-label="AI photo estimate preview">
            <img
              src="/images/blinds-white.svg"
              alt="Bright white blinds preview"
              className="hero-image hero-image-main"
              decoding="async"
              onError={handleImageError}
            />
            <img
              src="/images/sheers-linen.svg"
              alt="Soft sheer curtain preview"
              className="hero-image hero-image-overlap"
              decoding="async"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="scan-card">
              <span className="scan-dot" />
              <strong>AI scan</strong>
              <small>2.4m W x 2.1m H · medium confidence</small>
            </div>
          </div>
        </section>
      </header>

      <section className="section section-soft" id="styles" data-reveal>
        <div className="section-wrap">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Galaxy-style category browsing</p>
              <h2>Choose the covering type before the quote starts</h2>
            </div>
            <p>
              The UI borrows the flexible category rhythm from blind product pages,
              but keeps the message focused on cleaning, photo review, and estimate confidence.
            </p>
          </div>
          <div className="style-grid">
            {styleCards.map((card) => (
              <article className="style-card" data-testid="style-card" key={card.title}>
                <span className="style-number">{String(styleCards.indexOf(card) + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section photo-section" id="photo-estimate" data-reveal>
        <div className="section-wrap estimate-grid">
          <div>
            <p className="eyebrow">AI Photo Estimate</p>
            <h2>Measure from the picture when the customer cannot</h2>
            <p>
              The assistant guides customers to take a straight, full-frame photo,
              then estimates width, drop, covering type, condition level, and confidence rating.
              Low-confidence requests are flagged for human review.
            </p>
            <div className="estimate-tags">
              <span>Width estimate</span>
              <span>Drop estimate</span>
              <span>Condition level</span>
              <span>Confidence rating</span>
              <span>Team review</span>
            </div>
          </div>
          <div className="estimate-device" role="group" aria-label="Photo estimate booking flow preview">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="estimate-step" key={step.title}>
                  <Icon size={20} aria-hidden="true" />
                  <div>
                    <strong>{index + 1}. {step.title}</strong>
                    <small>{step.description}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="gallery" data-reveal>
        <div className="section-wrap">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Picture-heavy proof</p>
              <h2>More visual options, with fallback images if files fail</h2>
            </div>
            <p>
              The image cards are real lazy-loaded images, not background-only placeholders.
              That makes the gallery easier to replace with final business photos later.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className="gallery-card" data-testid="gallery-card" key={item.title}>
                <img
                  data-testid="gallery-image"
                  src={item.image}
                  alt={`${item.title} cleaning preview`}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
                <div className="gallery-overlay">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" data-reveal>
        <div className="section-wrap trust-layout">
          <div>
            <p className="eyebrow">CNBW-inspired quote confidence</p>
            <h2>Cleaner path to trust, samples of work, and quote action</h2>
            <p>
              The layout keeps a strong call-to-action like a commerce site, but avoids
              product clutter. Every block pushes the customer toward a photo-based cleaning request.
            </p>
          </div>
          <div className="trust-grid">
            {trustCards.map((point) => (
              <div className="trust-pill" key={point}>
                <ShieldCheck size={18} aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section quote-section" id="quote" data-reveal>
        <div className="section-wrap quote-card">
          <div>
            <p className="eyebrow">Ready to review the program</p>
            <h2>Request a quote with photos, notes, and AI measurement help</h2>
            <p>
              Next build step: connect this visual flow to upload storage, AI measurement
              analysis, WhatsApp/email notifications, and an admin review inbox.
            </p>
          </div>
          <a
            className="button button-primary button-light"
            href="https://wa.me/27608123586?text=Hi%20Fab%20Curtains%20%26%20Blinds%2C%20I%20would%20like%20a%20cleaning%20photo%20estimate."
          >
            Start photo estimate
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Fab Curtains & Blinds cleaning preview</span>
        <span><MessageCircle size={16} aria-hidden="true" /> WhatsApp-ready booking concept</span>
        <span><ImageOff size={16} aria-hidden="true" /> Fallback-safe gallery</span>
      </footer>
    </main>
  );
}
