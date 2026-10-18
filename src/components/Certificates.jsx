
import { useEffect, useState } from "react";
import {
  FiAward,
  FiExternalLink,
  FiX,
  FiZoomIn,
} from "react-icons/fi";

const certificates = [
  {
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco Networking Academy",
    image: "/certificate1.png",
    description:
      "Certificate recognizing learning related to applying AI to analyze customer reviews.",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "/certificate2.png",
    description:
      "Certificate covering foundational concepts in artificial intelligence.",
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco Networking Academy in collaboration with IBM",
    image: "/certificate3.png",
    description:
      "Certificate for AI fundamentals learning through Cisco Networking Academy in collaboration with IBM.",
  },
  {
    title: "Cybersecurity and Cloud Fundamentals 1.0",
    issuer: "Fortinet Training Institute",
    image: "/certificate.png",
    description:
      "Certificate recognizing completion of the Cybersecurity and Cloud Fundamentals 1.0 course.",
  },
  {
    title: "Security Operations Fundamentals",
    issuer: "Palo Alto Networks",
    image: "/certificate4.jpg",
    description:
      "Certificate recognizing completion of Security Operations Fundamentals.",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <style>{`
        @keyframes portfolio-certificates-title {
          from { opacity: 0; transform: translateY(22px) scale(.985); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes portfolio-certificates-subtitle {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .certificates-title-entrance { animation: portfolio-certificates-title .85s cubic-bezier(.2,.75,.25,1) both; }
        .certificates-subtitle-entrance { animation: portfolio-certificates-subtitle .8s ease-out .16s both; }
        @media (prefers-reduced-motion: reduce) {
          .certificates-title-entrance, .certificates-subtitle-entrance { animation: none !important; }
        }
      `}</style>
      <section
        id="certificates"
        className="relative py-20 sm:py-24"
        aria-labelledby="certificates-heading"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
          <div
            className="mx-auto w-full max-w-5xl text-center"
            data-aos="fade-up"
          >
            <span className="section-kicker">
              <FiAward aria-hidden="true" />
              Certificates
            </span>

            <h2
              id="certificates-heading"
              className="certificates-title-entrance section-heading mt-4 text-4xl sm:text-5xl lg:text-6xl"
            >
              Learning That{" "}
              <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Keeps Growing
              </span>
            </h2>

            <p className="certificates-subtitle-entrance mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              A collection of certificates from my learning journey.
              Each one represents an opportunity to explore new concepts
              and continue developing my technical knowledge.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {certificates.slice(0, showAllCertificates ? certificates.length : 4).map((certificate, index) => (
              <article
                key={certificate.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="soft-card group flex h-full flex-col overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`Preview certificate: ${certificate.title}`}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-[#0b1222] text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain p-3 transition duration-500 group-hover:scale-[1.025] sm:p-4"
                  />

                  <span className="absolute inset-0 flex items-center justify-center bg-[#080d1b]/0 transition-colors duration-300 group-hover:bg-[#080d1b]/45">
                    <span className="flex items-center gap-2 rounded-full border border-white/15 bg-[#10182b]/90 px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      <FiZoomIn aria-hidden="true" />
                      View Certificate
                    </span>
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/[0.08] text-xl text-violet-200">
                      <FiAward aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-cyan-100 sm:text-base">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="flex-1 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                    {certificate.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-white/10 px-5 py-2.5 text-base font-semibold text-slate-100 transition hover:border-violet-300/40 hover:bg-violet-400/[0.06] hover:text-cyan-200"
                  >
                    View Details
                    <FiExternalLink aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {certificates.length > 4 && (
            <div className="mt-10 flex justify-center" data-aos="fade-up">
              <button
                type="button"
                onClick={() => setShowAllCertificates((current) => !current)}
                aria-expanded={showAllCertificates}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/35 hover:bg-violet-400/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {showAllCertificates ? "Show Less" : "Show More"}
                <span aria-hidden="true">{showAllCertificates ? "−" : "+"}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#050816]/90 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#10182b] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
                  Certificate Preview
                </p>

                <h3
                  id="certificate-modal-title"
                  className="mt-2 text-lg font-bold leading-6 text-white sm:text-xl"
                >
                  {selectedCertificate.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-400">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiX size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto bg-[#080d1b] p-3 sm:p-6">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} full preview`}
                className="mx-auto h-auto max-h-[68vh] w-full object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] p-4 sm:p-5">
              <p className="text-xs leading-5 text-slate-400 sm:text-sm">
                Press Escape or click outside the preview to close.
              </p>

              <a
                href={selectedCertificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Open Image
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
