import {
  Aperture,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  UploadCloud
} from "lucide-react";

const services = [
  {
    title: "Curtain cleaning",
    description: "Freshen heavy drapes, soft sheers, and delicate fabrics with careful cleaning guidance.",
    icon: Sparkles
  },
  {
    title: "Blind cleaning",
    description: "Assess Venetian, roller, wooden-look, and layered blinds from customer photos.",
    icon: Aperture
  },
  {
    title: "Deep dust removal",
    description: "Flag heavy dust, stains, and fabric concerns before the team confirms the quote.",
    icon: ShieldCheck
  }
];

const galleryItems = [
  {
    title: "White shutter-style blinds",
    tag: "Bright kitchen finish",
    className: "gallery-card--white"
  },
  {
    title: "Outdoor screen blinds",
    tag: "Large drop assessment",
    className: "gallery-card--screen"
  },
  {
    title: "Wooden-look blinds",
    tag: "Slat-by-slat care",
    className: "gallery-card--wood"
  },
  {
    title: "Grey blockout curtains",
    tag: "Fabric depth review",
    className: "gallery-card--grey"
  },
  {
    title: "Sheer curtains",
    tag: "Light fabric refresh",
    className: "gallery-card--sheer"
  },
  {
    title: "Roller blind system",
    tag: "Mechanism-friendly clean",
    className: "gallery-card--roller"
  }
];

const trustPoints = [
  "Photo-assisted cleaning quotes",
  "Helpful for customers who cannot measure",
  "Careful handling for delicate fabrics",
  "Residential and commercial cleaning",
  "Team review before final confirmation"
];

const processSteps = [
  {
    title: "Upload a photo",
    description: "The customer takes a straight, well-lit picture of the curtain or blind.",
    icon: UploadCloud
  },
  {
    title: "AI estimates size",
    description: "The assistant reads the photo, detects the covering type, and estimates width and drop.",
    icon: Ruler
  },
  {
    title: "Confidence rating",
    description: "The system marks the estimate as high, medium, or needs team review.",
    icon: Gauge
  },
  {
    title: "Team confirms quote",
    description: "The business receives the photo, condition notes, and estimate before booking.",
    icon: ClipboardCheck
  }
];

const faqs = [
  {
    question: "Do customers need exact measurements?",
    answer: "No. The AI photo estimate helps customers who cannot measure, then the team reviews the result."
  },
  {
    question: "What should the customer photograph?",
    answer: "The full curtain or blind, a close-up of stains or dust, and a reference object when possible."
  },
  {
    question: "How accurate is the AI estimate?",
    answer: "It provides a practical estimate with a confidence rating, not a final guarantee."
  }
];

export default function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Fab Curtains and Blinds cleaning home">
          <span className="brand-mark">fab</span>
          <span className="brand-divider" />
          <span className="brand-copy">
            Curtains
            <small>& Blinds Cleaning</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#photo-estimate">AI estimate</a>
          <a href="#gallery">Gallery</a>
          <a href="#book" className="nav-cta">Book</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Red & white premium cleaning experience</p>
          <h1>Expert Curtain & Blind Cleaning Made Simple</h1>
          <p className="hero-lead">
            Upload a photo, let our smart assistant estimate the size and condition,
            and request a professional cleaning quote without struggling to measure.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#photo-estimate">
              Get Photo Estimate
              <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#gallery">
              View Cleaning Gallery
            </a>
          </div>
          <div className="hero-proof" aria-label="Service highlights">
            <span>
              <BadgeCheck size={18} aria-hidden="true" /> Cleaning specialists
            </span>
            <span>
              <Camera size={18} aria-hidden="true" /> Photo-first quoting
            </span>
            <span>
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp-ready flow
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Curtain and blind cleaning preview">
          <div className="hero-window-card">
            <div className="window-frame">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-image-caption">
              <strong>Can’t measure?</strong>
              <small>Send the photo. The assistant does the first estimate.</small>
            </div>
          </div>
          <div className="floating-card">
            <span className="pulse-dot" />
            AI scan ready
          </div>
        </div>
      </section>

      <section id="services" className="section section-light">
        <div className="section-heading">
          <p className="eyebrow">Cleaning services</p>
          <h2>Focused only on curtains and blinds</h2>
          <p>
            The website stays clear and direct: customers quickly understand what can
            be cleaned, then move into the photo estimate flow.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-bubble">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="photo-estimate" className="section photo-estimate-section">
        <div className="estimate-panel">
          <div>
            <p className="eyebrow">AI Photo Estimate</p>
            <h2>Customers who cannot measure can still request help</h2>
            <p>
              The booking assistant asks for a full photo, checks the type of
              curtain or blind, estimates the width and drop, reviews visible
              condition, and sends everything to the team.
            </p>
            <div className="estimate-tags" aria-label="AI estimate output">
              <span>Width estimate</span>
              <span>Drop estimate</span>
              <span>Item type</span>
              <span>Condition level</span>
              <span>Confidence rating</span>
            </div>
          </div>
          <div className="phone-mockup" aria-label="Photo estimate form preview">
            <div className="phone-top" />
            <div className="upload-zone">
              <Camera size={34} aria-hidden="true" />
              <strong>Take or upload photo</strong>
              <small>Full curtain/blind in frame</small>
            </div>
            <div className="scan-result">
              <span>Estimated size</span>
              <strong>2.4m W x 2.1m H</strong>
              <small>Medium confidence - team review</small>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Visual proof</p>
            <h2>Gallery built for high-quality business images</h2>
          </div>
          <p>
            These six image slots match the photos you shared: shutters, screens,
            wooden blinds, grey curtains, sheer curtains, and roller systems.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article
              className={`gallery-card ${item.className}`}
              data-testid="gallery-card"
              key={item.title}
            >
              <div className="gallery-lines" aria-hidden="true" />
              <div className="gallery-overlay">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-light process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A cleaner booking journey than the competition</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="process-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <Icon size={25} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section trust-section">
        <div className="trust-card">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Premium look, simple customer action</h2>
            <p>
              The red-and-white theme keeps the website bold and memorable, while
              the image-led layout builds trust before the customer books.
            </p>
          </div>
          <ul>
            {trustPoints.map((point) => (
              <li key={point}>
                <CheckCircle2 size={19} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">Questions answered early</p>
          <h2>Remove friction before they book</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="book" className="booking-cta">
        <div>
          <p className="eyebrow">Ready for the next build phase</p>
          <h2>Book with a photo estimate</h2>
          <p>
            This preview shows the full direction. The next step is connecting the
            form to real photo uploads, AI estimation, and team notifications.
          </p>
        </div>
        <a className="button button-primary button-inverted" href="#photo-estimate">
          Start Photo Estimate
        </a>
      </section>
    </main>
  );
}
