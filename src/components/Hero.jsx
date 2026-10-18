
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FiArrowDown,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiX,
  FiMaximize2,
} from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/trishamaegapuz/trishamaegapuz",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trisha-mae-gapuz-614649357/",
    icon: FiLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/trishamae.gapuz/",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gapuztrishamae/",
    icon: FiInstagram,
  },
];

const roles = [
  "Aspiring Frontend Developer",
  "IT Student",
  "Aspiring Web Developer",
];

export default function Hero() {
  const [imageOpen, setImageOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeType, setResumeType] = useState("creative");
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTypedRole(roles[0]);
      return undefined;
    }

    const currentRole = roles[roleIndex];
    let delay = deleting ? 35 : 75;

    if (!deleting && typedRole === currentRole) {
      delay = 1500;
    } else if (deleting && typedRole === "") {
      delay = 300;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && typedRole === currentRole) {
        setDeleting(true);
      } else if (deleting && typedRole === "") {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else {
        setTypedRole(
          currentRole.substring(
            0,
            typedRole.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [typedRole, deleting, roleIndex]);

  useEffect(() => {
    if (!imageOpen && !resumeOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setImageOpen(false);
        setResumeOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageOpen, resumeOpen]);

  return (
    <>
      <style>{`
        @keyframes heroRise {
          from { opacity: 0; transform: translate3d(0, 28px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes heroGlow {
          0%, 100% { opacity: .45; transform: scale(.95); }
          50% { opacity: .85; transform: scale(1.08); }
        }

        @keyframes heroOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes heroBlink {
          0%, 48% { opacity: 1; }
          49%, 100% { opacity: 0; }
        }

        @keyframes heroGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes heroShimmer {
          0% { background-position: -220% center; }
          100% { background-position: 220% center; }
        }

        @keyframes heroSoftPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, .12), 0 0 30px rgba(34, 211, 238, .03); }
          50% { box-shadow: 0 0 0 8px rgba(139, 92, 246, .025), 0 0 42px rgba(34, 211, 238, .10); }
        }

        .hero-name-gradient {
          background-size: 220% auto;
          animation: heroGradient 8s ease-in-out infinite;
          filter: drop-shadow(0 8px 28px rgba(139, 92, 246, .12));
        }

        .hero-name-main {
          text-shadow: 0 0 34px rgba(255, 255, 255, .055);
        }

        .hero-status {
          animation: heroSoftPulse 5s ease-in-out infinite;
        }

        .hero-shimmer {
          background-image: linear-gradient(110deg, transparent 20%, rgba(255,255,255,.12) 45%, transparent 70%);
          background-size: 220% 100%;
          animation: heroShimmer 7s ease-in-out infinite;
        }

        .hero-enter {
          opacity: 0;
          animation: heroRise .8s cubic-bezier(.2,.7,.2,1) forwards;
        }

        .hero-photo-enter {
          opacity: 0;
          animation: heroRise 1s cubic-bezier(.2,.7,.2,1) .25s forwards;
        }

        .hero-float {
          animation: heroFloat 6s ease-in-out infinite;
        }

        .hero-glow {
          animation: heroGlow 5s ease-in-out infinite;
        }

        .hero-orbit {
          animation: heroOrbit 28s linear infinite;
        }

        .hero-cursor {
          animation: heroBlink .9s steps(1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter, .hero-photo-enter {
            opacity: 1;
            animation: none;
          }
          .hero-float, .hero-glow, .hero-orbit, .hero-cursor,
          .hero-name-gradient, .hero-status, .hero-shimmer {
            animation: none;
          }
        }
      `}</style>

      <section
        id="home"
        className="relative isolate flex min-h-[90svh] items-center overflow-hidden pb-12 pt-32 sm:pb-14 sm:pt-36 lg:min-h-screen lg:pb-20 lg:pt-32 xl:pb-16 xl:pt-28 scroll-mt-24"
      >
        {/* Ambient background lights */}
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px] sm:h-[28rem] sm:w-[28rem]"
        />
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px] sm:h-[28rem] sm:w-[28rem]"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/10 to-transparent"
        />

        <div className="mx-auto grid w-full max-w-none items-center gap-10 px-5 sm:px-8 md:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-10 xl:gap-14 xl:px-14 2xl:px-16">
          {/* Intro */}
          <div>
            <div
              className="hero-enter hero-status mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-4 py-2.5 backdrop-blur-md shadow-lg shadow-cyan-950/10"
              style={{ animationDelay: "0.05s" }}
            >
              <span
                aria-hidden="true"
                className="relative flex h-2.5 w-2.5"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-200 sm:text-sm">
                IT Student · Aspiring Frontend Developer
              </span>
            </div>

            <p
              className="hero-enter mb-3 text-base font-medium text-slate-400 sm:text-lg"
              style={{ animationDelay: "0.15s" }}
            >
              Hello, welcome to my portfolio. I&apos;m
            </p>

            <h1
              className="hero-enter hero-name-main max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl xl:text-[5.75rem]"
              style={{ animationDelay: "0.25s" }}
            >
              Trisha Mae
              <span className="hero-name-gradient mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
                Gapuz
              </span>
            </h1>

            <div
              className="hero-enter mt-5 flex min-h-9 items-center gap-3"
              style={{ animationDelay: "0.4s" }}
            >
              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-gradient-to-r from-violet-400 to-cyan-300"
              />
              <p
                className="text-base font-semibold tracking-wide text-slate-100 sm:text-lg"
                aria-label={roles[roleIndex]}
              >
                <span aria-hidden="true">{typedRole}</span>
                <span
                  aria-hidden="true"
                  className="hero-cursor ml-0.5 text-cyan-300"
                >
                  |
                </span>
              </p>
            </div>

            <p
              className="hero-enter mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
              style={{ animationDelay: "0.5s" }}
            >
              I&apos;m an Information Technology student who enjoys learning
              about web development and building practical projects. I&apos;m
              looking forward to applying my knowledge, learning from
              experienced professionals, and growing through an OJT opportunity.
            </p>

            <div
              className="hero-enter mt-6 flex flex-col gap-3 min-[420px]:flex-row"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="#projects"
                className="group hero-shimmer relative isolate overflow-hidden inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore My Projects
                <FiArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/30 bg-slate-900/70 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-950/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-cyan-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                View Resume
                <FiArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div
              className="hero-enter mt-7"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Find me online
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.label} profile`}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/30 bg-slate-900/90 text-[22px] text-white shadow-md shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/70 hover:bg-violet-500/20 hover:text-cyan-200 hover:shadow-lg hover:shadow-violet-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      style={{ transitionDelay: `${index * 25}ms` }}
                    >
                      <Icon
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Animated portrait */}
          <div
            className="hero-photo-enter relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] xl:max-w-[470px]"
          >
            <div
              aria-hidden="true"
              className="hero-glow absolute inset-5 rounded-full bg-violet-500/20 blur-[65px]"
            />

            <div
              aria-hidden="true"
              className="hero-orbit pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-dashed border-violet-300/20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] sm:-right-6 sm:-top-6"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 h-28 w-28 rounded-3xl border border-violet-300/20 bg-violet-400/[0.05]"
            />

            <div className="hero-float relative">
              <div className="soft-card relative overflow-hidden rounded-[1.75rem] p-3 shadow-[0_25px_90px_rgba(4,8,25,0.38)] ring-1 ring-white/[0.04] sm:p-4">
                <button
                  type="button"
                  onClick={() => setImageOpen(true)}
                  aria-label="View profile photo in full size"
                  className="group relative block w-full overflow-hidden rounded-[1.25rem] bg-[#10182b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  <img
                    src="/photo2.jpg"
                    alt="Portrait of Trisha Mae Gapuz"
                    fetchPriority="high"
                    className="aspect-[4/5] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d1b]/85 via-[#080d1b]/5 to-transparent"
                  />

                  <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-left sm:bottom-5 sm:left-5 sm:right-5">
                    <span>
                      <span className="block text-lg font-bold text-white sm:text-xl">
                        Trisha Mae Gapuz
                      </span>
                      <span className="mt-1 block text-sm text-slate-200 sm:text-base">
                        Information Technology Student
                      </span>
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/20 text-white backdrop-blur-md transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
                      <FiMaximize2 aria-hidden="true" />
                    </span>
                  </span>
                </button>

                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-100 sm:text-base">
                      Learning by building
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Projects · Practice · Growth
                    </p>
                  </div>

                  <a
                    href="#about"
                    aria-label="Scroll to About section"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300 transition duration-300 hover:rotate-12 hover:bg-cyan-300/10 hover:text-cyan-200"
                  >
                    <FiArrowDown
                      className="transition-transform duration-300 group-hover:translate-y-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating decorative badge */}
            <div
              className="hero-enter absolute -left-5 top-1/4 hidden rounded-2xl border border-violet-300/20 bg-[#10182b]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:block"
              style={{ animationDelay: "0.9s" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-violet-200">
                Web Development
              </p>
            </div>

            <div
              className="hero-enter absolute -bottom-4 right-2 hidden rounded-2xl border border-cyan-300/20 bg-[#10182b]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:block"
              style={{ animationDelay: "1.05s" }}
            >
              <p className="text-sm font-semibold text-cyan-100">
                Always learning
              </p>
            </div>
          </div>
        </div>

        {/* Compact resume modal — same portfolio theme */}
        {resumeOpen && createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-[#030611]/85 p-3 pt-20 backdrop-blur-sm sm:p-6 sm:pt-20"
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
            onClick={() => setResumeOpen(false)}
          >
            <div
              className="flex max-h-[calc(100dvh-6rem)] min-h-0 w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-violet-300/25 bg-[#0b1020] shadow-2xl shadow-violet-950/40"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-4 sm:px-5">
                <h2 className="text-lg font-bold text-white">Resume</h2>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close resume"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>

              <div className="mx-4 mb-3 grid grid-cols-2 rounded-lg bg-white/[0.05] p-1 sm:mx-5">
                <button
                  type="button"
                  onClick={() => setResumeType("creative")}
                  aria-pressed={resumeType === "creative"}
                  className={`rounded-md px-3 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    resumeType === "creative"
                      ? "bg-violet-500 text-white shadow"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  Creative
                </button>
                <button
                  type="button"
                  onClick={() => setResumeType("ats")}
                  aria-pressed={resumeType === "ats"}
                  className={`rounded-md px-3 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    resumeType === "ats"
                      ? "bg-violet-500 text-white shadow"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  ATS
                </button>
              </div>

              <div className="mx-4 min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10 bg-white sm:mx-5">
                <iframe
                  key={resumeType}
                  src={resumeType === "creative" ? "/creative.pdf" : "/ATS.pdf"}
                  title={resumeType === "creative" ? "Creative resume preview" : "ATS resume sample preview"}
                  className="h-[min(52vh,520px)] min-h-[260px] w-full bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-2 px-4 pb-4 pt-3 sm:grid-cols-2 sm:px-5">
                <a
                  href={resumeType === "creative" ? "/creative.pdf" : "/ATS.pdf"}
                  download={resumeType === "creative" ? "creative.pdf" : "ATS.pdf"}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <FiDownload aria-hidden="true" />
                  Download PDF
                </a>
                {resumeType === "creative" ? (
                  <a
                    href="/creative.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-violet-300/25 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    <FiArrowRight aria-hidden="true" />
                    Open in New Tab
                  </a>
                ) : (
                  <a
                    href="/ATS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-violet-300/25 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    <FiArrowRight aria-hidden="true" />
                    Open in New Tab
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}

                {/* Photo preview modal */}
        {imageOpen && createPortal(
          <div
            className="fixed inset-0 z-[40] flex items-center justify-center bg-[#030611]/95 p-4 pt-24 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Profile photo preview"
            onClick={() => setImageOpen(false)}
          >
            <button
              type="button"
              onClick={() => setImageOpen(false)}
              aria-label="Close photo preview"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-xl text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:right-8 sm:top-8"
            >
              <FiX aria-hidden="true" />
            </button>

            <img
              src="/photo2.jpg"
              alt="Full-size portrait of Trisha Mae Gapuz"
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85dvh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>,
          document.body
        )}
      </section>
    </>
  );
}
