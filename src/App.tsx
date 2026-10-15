const researchAreas = [
  {
    index: "01",
    title: "Market Microstructure",
    description:
      "Decoding onchain order flow and volume to map crypto liquidity.",
  },
  {
    index: "02",
    title: "Machine Learning",
    description:
      "Training in-house proprietary ML systems for continuous, real-time execution.",
  },
  {
    index: "03",
    title: "Scalable infrastructure",
    description:
      "Building our own private servers that are scalable when needed.",
  },
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#f1f0eb] text-[#11110f] selection:bg-[#e84b1a] selection:text-white">
      <nav className="flex h-20 items-center justify-between border-b border-[#11110f] px-5 md:px-10">
        <a
          className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em]"
          href="#top"
          aria-label="Oxide Labs home"
        >
          <span className="block size-3 bg-[#e84b1a]" aria-hidden="true" />
          Oxide Labs
        </a>
        <div className="flex items-center gap-6 md:gap-10">
          <a className="nav-link hidden sm:block" href="#research">
            WHAT WE do
          </a>
          <a
            className="nav-link"
            href="https://instagram.com/breading.co"
            rel="noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </div>
      </nav>

      <header
        id="top"
        className="grid min-h-[calc(100vh-5rem)] border-b border-[#11110f] lg:grid-cols-[minmax(0,1fr)_22rem]"
      >
        <div className="flex flex-col justify-between px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <p className="mb-20 max-w-md text-xs font-semibold uppercase leading-5 tracking-[0.18em]">
            Independent research for on-chain finance
            <br />
            fully private.
          </p>
          <div>
            <h1 className="max-w-5xl text-[clamp(4.2rem,11.5vw,10.5rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
              Clear thinking.
              <br />
              <span className="text-[#e84b1a]">Hard questions.</span>
            </h1>
            <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-[#11110f] pt-6 md:flex-row md:items-end">
              <p className="max-w-xl text-lg leading-7 md:text-xl md:leading-8">
                Oxide Labs is an independent research firm investigating
                machine learning, infrastructure, and the systems shaping what comes
                next in the financial landscape.
              </p>
              <a className="solid-link shrink-0" href="#research">
                Check out our missions
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <aside className="hidden border-l border-[#11110f] bg-[#161614] p-8 text-[#f1f0eb] lg:flex lg:flex-col lg:justify-between">
          <div className="grid grid-cols-2 gap-px bg-[#4a4a46]">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`aspect-square ${
                  index === 5 || index === 8 ? "bg-[#e84b1a]" : "bg-[#161614]"
                }`}
              />
            ))}
          </div>
          <div>
            <p className="mb-3 font-mono text-xs text-[#999991]">
              CURRENT SIGNAL
            </p>
            <p className="text-2xl leading-8">
              The gap between invention and adoption is where the real story
              lives.
            </p>
          </div>
        </aside>
      </header>

      <section id="research" className="border-b border-[#11110f]">
        <div className="grid md:grid-cols-[18rem_1fr]">
          <div className="border-b border-[#11110f] px-5 py-8 md:border-b-0 md:border-r md:px-10 md:py-14">
            <p className="section-label">What we do</p>
          </div>
          <div>
            {researchAreas.map((area) => (
              <article
                className="group grid border-b border-[#11110f] px-5 py-8 last:border-b-0 md:grid-cols-[5rem_1fr_1fr] md:gap-8 md:px-10 md:py-11"
                key={area.index}
              >
                <span className="mb-6 font-mono text-xs text-[#777770] md:mb-0">
                  {area.index}
                </span>
                <h2 className="mb-4 text-3xl font-medium tracking-[-0.04em] md:mb-0 md:text-4xl">
                  {area.title}
                </h2>
                <p className="max-w-md text-base leading-7 text-[#51514d]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid border-b border-[#11110f] bg-[#e84b1a] lg:grid-cols-[1fr_22rem]">
        <div className="px-5 py-16 md:px-10 md:py-24">
          <p className="section-label mb-24">Our position</p>
          <blockquote className="max-w-5xl text-[clamp(2.8rem,6.5vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            “random bullshit GOOOO.”
          </blockquote>
        </div>
        <div className="flex min-h-64 items-end border-t border-[#11110f] p-8 lg:border-l lg:border-t-0">
          <p className="max-w-xs text-sm leading-6">
            Our work is fun i guess.
          </p>
        </div>
      </section>

      <footer className="bg-[#161614] px-5 pb-8 pt-16 text-[#f1f0eb] md:px-10 md:pt-24">
        <div className="mb-32 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.06em]">
            Need a clearer
            <br />
            point of view?
          </h2>
          <a className="light-link shrink-0" href="instagram.com/breading.co">
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="grid gap-6 border-t border-[#4a4a46] pt-6 text-xs font-semibold uppercase tracking-[0.14em] md:grid-cols-3">
          <p>Oxide Labs</p>
          <a
            className="w-fit transition-colors hover:text-[#e84b1a]"
            href="https://instagram.com/breading.co"
            rel="noreferrer"
            target="_blank"
          >
            @breading.co
          </a>
          <p className="md:text-right">Independent / Private / est.2026</p>
        </div>
      </footer>
    </main>
  )
}
