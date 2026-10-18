
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Team Budget Monitoring — 2nd Place Award",
    category: "ACHIEVEMENT",
    date: "Team Budget Monitoring presentation",
    image: "/team-budget-award.jpg",
    description:
      "Our team received 2nd Place recognition for the Team Budget Monitoring project. This achievement highlights our teamwork, preparation, and project presentation.",
  },
  {
    id: 2,
    title: "Team Budget Monitoring Awarding",
    category: "TEAM ACHIEVEMENT",
    date: "Awarding ceremony",
    image: "/team-budget-awarding.jpg",
    description:
      "A team photo from the awarding ceremony, including the 2nd Place recognition and ₱3,000 prize.",
  },
  {
    id: 3,
    title: "Team Budget Monitoring Presentation",
    category: "PROJECT PRESENTATION",
    date: "Academic project presentation",
    image: "/team-budget-presentation.jpg",
    description:
      "Presenting our Team Budget Monitoring project to evaluators. The experience helped us practice explaining our system, its purpose, and its value.",
  },
  {
    id: 4,
    title: "Team Presentation and Evaluation",
    category: "PRESENTATION EXPERIENCE",
    date: "Project evaluation",
    image: "/team-budget-evaluation.jpg",
    description:
      "A moment from the presentation and evaluation session with our team and panel.",
  },
  {
    id: 5,
    title: "ICT Students Organization Activity",
    category: "ACADEMIC COMMUNITY",
    date: "ICT students activity",
    image: "/ict-organization-team.jpg",
    description:
      "A group photo with members of the Information and Communication Technology Students Organization.",
  },
  {
    id: 6,
    title: "Presenting as a Team",
    category: "TEAMWORK",
    date: "Presentation session",
    image: "/team-budget-panel.jpg",
    description:
      "Working together during the presentation session, coordinating with teammates and responding to the panel.",
  },
  {
    id: 7,
    title: "Live System Demonstration",
    category: "SYSTEM DEMO",
    date: "Project demonstration",
    image: "/team-budget-demo.jpg",
    description:
      "Demonstrating the project using a laptop during the evaluation. This reflects our practical work and teamwork beyond preparing slides.",
  },
];

function ExperienceImage({ src, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#252044] via-[#10182b] to-[#0b1222] p-6 text-center ${className}`}
      >
        <div>
          <FiMaximize2
            aria-hidden="true"
            className="mx-auto text-3xl text-violet-200"
          />
          <p className="mt-3 text-sm font-semibold text-white">
            Add your photo here
          </p>
          <p className="mt-1 break-all text-xs text-slate-400">
            {src}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

function ExperienceCard({ item, onOpen }) {
  return (
    <article className="group w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#10182b] shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/40 hover:shadow-xl hover:shadow-violet-950/20 sm:w-[310px] lg:w-[330px]">
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`Preview ${item.title}`}
        className="relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0b1222]">
          <ExperienceImage
            src={item.image}
            alt={`${item.title} sample image`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d1b] via-[#080d1b]/10 to-transparent"
          />

          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-[#080d1b]/80 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-cyan-100 backdrop-blur-md sm:text-xs">
            {item.category}
          </span>

          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#080d1b]/75 text-white transition duration-300 group-hover:border-violet-300/40 group-hover:bg-violet-500/30">
            <FiMaximize2 aria-hidden="true" />
          </span>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-medium text-cyan-100">
              Experience Gallery
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">
              {item.title}
            </h3>
          </div>
        </div>
      </button>

      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <FiCalendar
            aria-hidden="true"
            className="shrink-0 text-violet-300"
          />
          {item.date}
        </div>

        <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
          {item.description}
        </p>

        <button
          type="button"
          onClick={() => onOpen(item)}
          className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          View Details
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function Experience() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.firstElementChild;
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : 300;

    const gap = 24;

    carousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children);
    if (!cards.length) return;

    const containerLeft = carousel.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - containerLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const goToExperience = (index) => {
    const card = carouselRef.current?.children[index];

    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    if (!selectedExperience) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
        return;
      }

      const currentIndex = experiences.findIndex(
        (item) => item.id === selectedExperience.id
      );

      if (event.key === "ArrowLeft") {
        setSelectedExperience(
          experiences[
            (currentIndex - 1 + experiences.length) % experiences.length
          ]
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedExperience(
          experiences[(currentIndex + 1) % experiences.length]
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-100px] top-24 -z-10 h-72 w-72 rounded-full bg-violet-600/[0.10] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-100px] -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[110px]"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div
          className="flex flex-col items-center gap-6 text-center"
          data-aos="fade-up"
        >
          <div className="mx-auto w-full max-w-3xl">
            <span className="section-kicker">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Experience & Activities
            </span>

            <h2
              id="experience-heading"
              className="section-heading mt-3"
            >
              Moments That{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
                Matter
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              A visual journey through my academic projects,
              presentations, activities, and experiences as an IT
              student.
            </p>
          </div>

          {!showAll && (
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label="Previous experience"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiChevronLeft size={21} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label="Next experience"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/[0.10] text-violet-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiChevronRight size={21} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

                {!showAll ? (
          <>
            <div
              ref={carouselRef}
              onScroll={handleCarouselScroll}
              className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
              data-aos="fade-up"
            >
              {experiences.map((item) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  onOpen={setSelectedExperience}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {experiences.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToExperience(index)}
                    aria-label={`Go to experience ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-gradient-to-r from-violet-400 to-cyan-300"
                        : "w-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-slate-500">
                Swipe or use the arrows to explore
              </p>
            </div>
          </>
        ) : (
          <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {experiences.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <ExperienceCard
                  item={item}
                  onOpen={setSelectedExperience}
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-9 flex justify-center" data-aos="fade-up">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/35 hover:bg-violet-400/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            {showAll ? "Show Carousel" : "See All Experiences"}
            {showAll ? (
              <FiArrowLeft aria-hidden="true" />
            ) : (
              <FiArrowRight aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {selectedExperience && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#050816]/90 p-4 backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedExperience(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            className="my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#10182b] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-4 sm:p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-200">
                  Experience Preview
                </p>

                <h3
                  id="experience-modal-title"
                  className="mt-2 text-xl font-bold text-white"
                >
                  {selectedExperience.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {selectedExperience.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiX size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="bg-[#080d1b] p-3 sm:p-5">
              <ExperienceImage
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="mx-auto max-h-[60vh] w-full rounded-xl object-contain"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-300">
                {selectedExperience.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <FiCalendar aria-hidden="true" />
                {selectedExperience.date}
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = experiences.findIndex(
                      (item) => item.id === selectedExperience.id
                    );

                    setSelectedExperience(
                      experiences[
                        (currentIndex + 1) % experiences.length
                      ]
                    );
                  }}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  Next Experience
                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
