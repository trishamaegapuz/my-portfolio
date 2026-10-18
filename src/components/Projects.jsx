import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";

const projects = [
  {
    title: "Budget Monitoring and Allocation System (BMAS)",
    category: "Capstone Project",
    description:
      "A web-based budget monitoring system designed to help organize budget proposals, fund allocations, registry records, monitoring, and reports in one place.",
    image: "/bmas.png",
    imageLabel: "BMAS",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Vercel"],
    liveUrl: "https://budget-monitoring-and-allocation-system-6wyuz5ccg.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    title: "ReUse Connect",
    category: "Web Application",
    description:
      "A platform concept focused on connecting people with reusable items and encouraging reuse instead of waste. Explore the deployed application to see its current features.",
    image: "/reuseconnect.png",
    imageLabel: "ReUse Connect",
    technologies: ["React", "Web Development", "Vercel"],
    liveUrl: "https://re-use-connect-5m4mc4m73-trishamaegapuzs-projects.vercel.app/login",
    githubUrl: "",
    featured: true,
  },
  {
    title: "E-Commerce Project",
    category: "Web Application",
    description:
      "An online food-ordering application built as a practical web development project, with a deployed login page and ordering experience.",
    image: "/ecommerce.png",
    imageLabel: "E-Commerce",
    technologies: ["Web Development", "Food Ordering", "Vercel"],
    liveUrl: "https://food-ordering-p8opp49ht-trishamaegapuzs-projects.vercel.app/login",
    githubUrl: "",
    featured: false,
  },
  {
    title: "To-Do List App",
    category: "Web Application",
    description:
      "A simple task management application for organizing everyday tasks through a clean, straightforward interface.",
    image: "/todolist.png",
    imageLabel: "To-Do List",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://trishamaegapuz.github.io/To-Do-List/",
    githubUrl: "",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 90}
      className="soft-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-[0_16px_45px_rgba(124,58,237,0.12)]"
    >
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#111a30] via-[#17122c] to-[#0c2030]">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <span className="select-none bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text px-6 text-center text-2xl font-black tracking-tight text-transparent sm:text-3xl">
            {project.imageLabel}
          </span>
        </div>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="relative aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d1b]/65 via-transparent to-transparent opacity-80" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#080d1b]/80 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md">
          <FiCode aria-hidden="true" />
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-violet-200 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-8 text-slate-300 sm:text-lg">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-violet-300/15 bg-violet-400/[0.06] px-3 py-2 text-sm font-semibold text-violet-100 sm:text-base"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-violet-500 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Live Demo
            <FiExternalLink aria-hidden="true" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <FiGithub aria-hidden="true" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <style>{`
        @keyframes portfolio-project-title {
          from { opacity: 0; transform: translateY(22px) scale(.985); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes portfolio-project-subtitle {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .projects-title-entrance { animation: portfolio-project-title .85s cubic-bezier(.2,.75,.25,1) both; }
        .projects-subtitle-entrance { animation: portfolio-project-subtitle .8s ease-out .16s both; }
        @media (prefers-reduced-motion: reduce) {
          .projects-title-entrance, .projects-subtitle-entrance { animation: none !important; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-400/[0.025] to-transparent"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="mx-auto w-full max-w-5xl text-center" data-aos="fade-up">
          <span className="section-kicker">
            <FiCode aria-hidden="true" />
            My Projects
          </span>

          <h2 id="projects-heading" className="projects-title-entrance section-heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="projects-subtitle-entrance mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            A selection of my web development projects, including my capstone
            system and other deployed applications.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 sm:mt-14 md:grid-cols-2 2xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center" data-aos="fade-up">
          <a
            href="https://github.com/trishamaegapuz/trishamaegapuz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-400/[0.05] hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Explore My GitHub
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
