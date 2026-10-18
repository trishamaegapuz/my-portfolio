import {
  FiBookOpen,
  FiCode,
  FiTarget,
  FiArrowUpRight,
  FiUser,
  FiLayers,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Web Development",
    description:
      "Exploring frontend and backend technologies while developing my understanding of how web applications work.",
  },
  {
    icon: FiBookOpen,
    title: "Project-Based Learning",
    description:
      "Practicing my skills through personal and academic projects, with a focus on learning by doing.",
  },
  {
    icon: FiTarget,
    title: "Continuous Growth",
    description:
      "Working toward an OJT opportunity where I can learn from professionals and gain practical experience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full max-w-none scroll-mt-20 overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <style>{`
        @keyframes portfolio-title-enter {
          from { opacity: 0; transform: translateY(22px) scale(.985); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes portfolio-subtitle-enter {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .title-entrance { animation: portfolio-title-enter .85s cubic-bezier(.2,.75,.25,1) both; }
        .title-subtitle-entrance { animation: portfolio-subtitle-enter .8s ease-out .16s both; }
        @media (prefers-reduced-motion: reduce) {
          .title-entrance, .title-subtitle-entrance { animation: none !important; }
        }
      `}</style>
      {/* Ambient theme accents */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-violet-500/[0.09] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-3xl" />

      <div className="mx-auto w-full max-w-none px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto mb-12 w-full max-w-5xl text-center" data-aos="fade-up" data-aos-duration="750" data-aos-easing="ease-out-cubic">
          <span className="section-kicker mx-auto">
            <FiUser aria-hidden="true" />
            Get to Know Me
          </span>
          <h2 id="about-heading" className="section-heading title-entrance mt-4 text-4xl sm:text-5xl lg:text-6xl">
            A Little About{" "}
            <span className="gradient-text bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="title-subtitle-entrance mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            A little about my journey, what I enjoy learning, and where I hope to grow next.
          </p>
        </div>

        <div className="grid w-full items-stretch gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-9 xl:gap-12">
          {/* Profile visual */}
          <div
            className="relative mx-auto w-full max-w-[490px] lg:mx-0 lg:max-w-none"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-violet-300/10 sm:-inset-4" />
            <div aria-hidden="true" className="ambient-float absolute -left-3 -top-4 z-10 h-20 w-20 rounded-3xl border border-violet-300/25 bg-violet-400/[0.07] shadow-lg shadow-violet-950/20 sm:-left-5 sm:-top-5 sm:h-24 sm:w-24" />
            <div aria-hidden="true" className="ambient-float absolute -bottom-4 -right-3 z-10 h-24 w-24 rounded-3xl border border-cyan-300/25 bg-cyan-300/[0.06] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" style={{ animationDelay: "1.3s" }} />

            <div className="soft-card hover-glow group relative h-full overflow-hidden rounded-[1.8rem] p-3 transition-all duration-500 hover:-translate-y-1 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <img
                  src="/photo.jpg"
                  alt="Trisha Mae Gapuz"
                  loading="lazy"
                  decoding="async"
                  className="image-zoom aspect-[4/4.5] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <div className="mb-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-500 group-hover:w-24" />
                  <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">Trisha Mae Gapuz</p>
                  <p className="mt-1 text-sm font-medium text-cyan-100 sm:text-base">IT Student · Aspiring Web Developer</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-violet-300/15 bg-violet-400/[0.06] p-3 transition-colors duration-300 hover:border-violet-300/35 hover:bg-violet-400/[0.1]">
                  <FiCode className="mb-2 text-lg text-violet-300" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white">Learn by Building</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">Practice through projects</p>
                </div>
                <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-3 transition-colors duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.09]">
                  <FiTarget className="mb-2 text-lg text-cyan-200" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white">Keep Growing</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">Build practical experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story and focus areas */}
          <div className="flex min-w-0 flex-col justify-center" data-aos="fade-left" data-aos-duration="850" data-aos-easing="ease-out-cubic">
            <div className="soft-card rounded-3xl p-5 sm:p-7 lg:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                  <FiBookOpen aria-hidden="true" className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">My Story</p>
                  <p className="mt-1 text-sm text-slate-400">Learning, building, improving</p>
                </div>
              </div>

              <div className="space-y-4 text-base leading-7 text-slate-300 sm:text-[1.02rem] sm:leading-8">
                <p data-aos="fade-up" data-aos-delay="80" data-aos-duration="650">
                  Hello! I&apos;m Trisha Mae Gapuz, an Information Technology student interested in web development and creating useful digital experiences.
                </p>
                <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="650">
                  Through my studies and projects, I&apos;m developing my technical knowledge, exploring different technologies, and learning how to turn ideas into working web applications.
                </p>
                <p data-aos="fade-up" data-aos-delay="220" data-aos-duration="650">
                  I&apos;m looking forward to an OJT opportunity where I can apply what I&apos;ve learned, collaborate with a team, receive guidance, and continue growing as a developer.
                </p>
              </div>

              <div className="my-7 h-px w-full bg-gradient-to-r from-violet-300/40 via-white/10 to-cyan-300/40" />

              <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">What I Focus On</p>
                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">My Growth Areas</h3>
                </div>
                <FiLayers aria-hidden="true" className="mb-1 text-2xl text-cyan-200" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      data-aos="fade-up"
                      data-aos-delay={index * 110}
                      data-aos-duration="700"
                      data-aos-easing="ease-out-cubic"
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080d1b]/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-400/[0.06] hover:shadow-lg hover:shadow-violet-950/20 sm:p-4"
                    >
                      <div aria-hidden="true" className="absolute right-0 top-0 h-16 w-16 rounded-bl-[2rem] bg-gradient-to-bl from-violet-400/[0.12] to-transparent transition-all duration-300 group-hover:from-cyan-300/[0.14]" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-lg text-violet-200 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 group-hover:text-cyan-100">
                        <Icon aria-hidden="true" />
                      </div>
                      <h4 className="relative mt-4 text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-100">
                        {item.title}
                      </h4>
                      <p className="relative mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                      <div aria-hidden="true" className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-500 group-hover:w-14" />
                    </article>
                  );
                })}
              </div>

              <div className="mt-7">
                <a
                  href="#experience"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-violet-300/25 bg-violet-400/[0.07] px-4 py-2.5 text-sm font-bold text-violet-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Explore My Journey
                  <FiArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
