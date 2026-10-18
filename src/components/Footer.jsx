
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiHeart,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trisha-mae-gapuz-614649357/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/trishamaegapuz/trishamaegapuz",
    icon: FiGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gapuztrishamae/",
    icon: FiInstagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#070b16]">
      <div className="w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-12 xl:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.7fr]">
          <div>
            <a
              href="#home"
              aria-label="Trisha Mae Gapuz - Back to home"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-gradient-to-br from-violet-400/15 to-cyan-300/10 text-sm font-extrabold tracking-tight text-white">
                TM
              </span>

              <span>
                <span className="block font-bold tracking-tight text-white">
                  Trisha Mae Gapuz
                </span>
                <span className="mt-0.5 block text-xs text-slate-400">
                  IT Student · Aspiring Developer
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building my skills through hands-on projects, continuous
              learning, and new opportunities in web development.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.label} profile`}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-lg text-slate-400 transition hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-violet-400/[0.07] hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1.5 text-sm text-slate-400 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {link.label}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">
              Explore
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Interested in my projects or looking to connect about an
              OJT opportunity?
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg border border-violet-300/20 bg-violet-400/[0.06] px-3.5 py-2 text-sm font-semibold text-violet-200 transition hover:border-violet-300/40 hover:bg-violet-400/[0.12] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Get in Touch
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {currentYear} Trisha Mae Gapuz. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
            Made with
            <FiHeart
              aria-label="love"
              className="text-violet-300"
            />
            and continuous learning.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="inline-flex h-10 w-10 items-center justify-center self-start rounded-xl border border-white/10 text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06] hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:self-auto"
          >
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
