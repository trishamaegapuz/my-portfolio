import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiVercel,
  SiRender,
  SiGit,
  SiArduino,
  SiComposer,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building clean, responsive user interfaces.",
    icon: FiMonitor,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-400" },
      { name: "CSS", icon: SiCss3, color: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-300" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-300" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side development and application logic.",
    icon: FiServer,
    skills: [
      { name: "PHP", icon: SiPhp, color: "text-indigo-300" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-200" },
      { name: "Flask", icon: SiFlask, color: "text-slate-200" },
    ],
  },
  {
    title: "Database",
    description: "Working with relational databases and stored data.",
    icon: FiDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-sky-300" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    ],
  },
  {
    title: "Tools & Others",
    description: "Platforms and tools used for version control, deployment, and development.",
    icon: FiTool,
    skills: [
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Render", icon: SiRender, color: "text-violet-300" },
      { name: "Neon", icon: FiDatabase, color: "text-emerald-300" },
      { name: "Git", icon: SiGit, color: "text-orange-400" },
      { name: "Arduino", icon: SiArduino, color: "text-teal-300" },
      { name: "Composer", icon: SiComposer, color: "text-amber-200" },
    ],
  },
];

function SkillChip({ skill }) {
  const SkillIcon = skill.icon;

  return (
    <span className="skill-chip group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2.5 text-base font-semibold text-slate-100 shadow-sm shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-400/15 hover:text-white sm:px-5 sm:py-3 sm:text-lg">
      <SkillIcon
        aria-hidden="true"
        className={`text-lg sm:text-xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
      />
      {skill.name}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-12 sm:py-14 lg:py-16"
      aria-labelledby="skills-heading"
    >
      <style>{`
        @keyframes skills-title-enter {
          from { opacity: 0; transform: translateY(22px) scale(.985); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes skills-subtitle-enter {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .skills-title-entrance { animation: skills-title-enter .85s cubic-bezier(.2,.75,.25,1) both; }
        .skills-subtitle-entrance { animation: skills-subtitle-enter .8s ease-out .16s both; }
        @keyframes skill-card-float-a {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes skill-card-float-b {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(4px); }
        }
        @keyframes skill-glow-drift {
          0%, 100% { opacity: .45; transform: translate3d(-50%, 0, 0) scale(.92); }
          50% { opacity: .95; transform: translate3d(-50%, -18px, 0) scale(1.12); }
        }
        @keyframes skill-border-pulse {
          0%, 100% { border-color: rgba(255,255,255,.08); box-shadow: 0 12px 28px rgba(0,0,0,.10); }
          50% { border-color: rgba(167,139,250,.24); box-shadow: 0 16px 34px rgba(76,29,149,.14); }
        }
        @keyframes skill-chip-shimmer {
          0%, 100% { box-shadow: 0 0 0 rgba(139,92,246,0); }
          50% { box-shadow: 0 0 16px rgba(139,92,246,.10); }
        }
        .skill-float-a { animation: skill-card-float-a 5.8s ease-in-out infinite, skill-border-pulse 6s ease-in-out infinite; }
        .skill-float-b { animation: skill-card-float-b 6.4s ease-in-out infinite, skill-border-pulse 6s ease-in-out infinite; animation-delay: -.8s, -2s; }
        .skills-orb { animation: skill-glow-drift 6s ease-in-out infinite; }
        .skills-glow { transition: opacity .4s ease; }
        .skill-chip { animation: skill-chip-shimmer 4.5s ease-in-out infinite; }
        .skill-chip:nth-child(2n) { animation-delay: -1.5s; }
        .skill-chip:nth-child(3n) { animation-delay: -2.5s; }
        .skill-category-card { will-change: transform; }
        @media (prefers-reduced-motion: reduce) { .skills-title-entrance, .skills-subtitle-entrance { animation: none !important; } }
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .skill-category-card:hover { animation-play-state: paused; transform: translateY(-5px) scale(1.008); }
          .skill-chip:hover { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-float-a, .skill-float-b, .skills-orb, .skill-chip { animation: none !important; }
          .skill-category-card { transition: none !important; will-change: auto; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="skills-glow pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="skills-orb pointer-events-none absolute left-1/2 top-36 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-3xl"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <header className="mx-auto w-full max-w-5xl text-center" data-aos="fade-up">
          <span className="section-kicker">
            <FiCode aria-hidden="true" />
            Technical Skills
          </span>

          <h2 id="skills-heading" className="skills-title-entrance section-heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="skills-subtitle-entrance mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            Technologies I have used in my learning and project work, grouped
            by the area where I use them.
          </p>
        </header>

        <div className="mx-auto mt-10 grid w-full max-w-none grid-cols-1 gap-6 sm:mt-12 sm:gap-7 lg:grid-cols-2 lg:items-stretch">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <section
                key={group.title}
                aria-labelledby={`skill-group-${index}`}
                className={`skill-category-card h-full rounded-2xl border border-white/[0.08] bg-slate-950/40 px-5 py-5 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-violet-300/35 hover:bg-slate-900/60 sm:px-7 sm:py-7 lg:px-8 lg:py-8 ${index % 2 === 0 ? "skill-float-a" : "skill-float-b"}`}
                data-aos="fade-up"
                data-aos-delay={index * 75}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-xl text-violet-200 sm:h-14 sm:w-14 sm:text-2xl">
                    <GroupIcon aria-hidden="true" />
                  </span>
                  <div>
                    <h3
                      id={`skill-group-${index}`}
                      className="text-xl font-bold text-white sm:text-2xl lg:text-3xl"
                    >
                      {group.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div
          className="mx-auto mt-8 flex w-full max-w-none flex-col items-start justify-between gap-4 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-violet-400/[0.08] to-cyan-300/[0.04] p-5 sm:mt-9 sm:flex-row sm:items-center sm:px-7 sm:py-6"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-xl text-cyan-200 sm:h-14 sm:w-14 sm:text-2xl">
              <FiTool aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Always learning, always building
              </h3>
              <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I continue to strengthen these skills through practice,
                coursework, and hands-on projects.
              </p>
            </div>
          </div>
          <span className="ml-[60px] rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2 text-sm font-semibold text-violet-100 sm:ml-0 sm:text-base">
            Learning in progress
          </span>
        </div>
      </div>
    </section>
  );
}
