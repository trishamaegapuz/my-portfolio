
import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  {
    label: "Certificates",
    href: "#certificates",
    id: "certificates",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const contactSection = document.getElementById("contact");

    if (contactSection) sections.push(contactSection);

    const updateActiveSection = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";
      const activationLine = 120;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const observer = new IntersectionObserver(
      () => updateActiveSection(),
      {
        root: null,
        rootMargin: "-100px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const getLinkClass = (id) =>
    `relative whitespace-nowrap py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
      activeSection === id
        ? "text-cyan-200"
        : "text-slate-300 hover:text-white"
    }`;

  const getMobileLinkClass = (id) =>
    `flex min-h-11 items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors duration-200 ${
      activeSection === id
        ? "border-violet-300/30 bg-violet-400/10 text-cyan-200"
        : "border-transparent text-slate-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-[#080d1b]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-[#080d1b]/65 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-[68px] w-full max-w-none items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={() => {
            closeMenu();
            setActiveSection("home");
          }}
          className="group inline-flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="Trisha Mae Gapuz — Home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-300/30 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-sm font-extrabold transition-colors duration-300 group-hover:border-cyan-300/60 sm:h-10 sm:w-10">
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              TM
            </span>
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-white sm:text-base">
              Trisha Mae Gapuz
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveSection(link.id)}
              aria-current={
                activeSection === link.id ? "location" : undefined
              }
              className={getLinkClass(link.id)}
            >
              {link.label}

              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-[1px] h-0.5 origin-left rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-transform duration-300 ${
                  activeSection === link.id
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            aria-current={
              activeSection === "contact" ? "location" : undefined
            }
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-[13px] font-semibold transition-all duration-200 ${
              activeSection === "contact"
                ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-200"
                : "border-violet-300/25 bg-violet-400/[0.08] text-violet-200 hover:border-cyan-300/40 hover:text-cyan-200"
            }`}
          >
            Contact
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-100 transition hover:border-violet-300/40 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 bg-[#080d1b]/95 backdrop-blur-xl sm:top-[72px] lg:hidden"
          onClick={closeMenu}
        >
          <div
            id="mobile-navigation"
            className="mx-auto w-full max-w-none max-h-[calc(100dvh-68px)] overflow-y-auto px-4 py-5 sm:max-h-[calc(100dvh-72px)] sm:px-6 lg:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 rounded-xl border border-violet-300/15 bg-violet-400/[0.05] p-4">
              <p className="text-sm font-semibold text-white">
                Explore my portfolio
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Explore my skills, projects, and career goals.
              </p>
            </div>

            <div className="space-y-1.5">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    closeMenu();
                    setActiveSection(link.id);
                  }}
                  aria-current={
                    activeSection === link.id ? "location" : undefined
                  }
                  className={getMobileLinkClass(link.id)}
                >
                  <span>{link.label}</span>
                  <span
                    className={`text-xs ${
                      activeSection === link.id
                        ? "text-cyan-200"
                        : "text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => {
                  closeMenu();
                  setActiveSection("contact");
                }}
                className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-sm font-bold text-white transition hover:from-violet-400 hover:to-indigo-400"
              >
                Contact Me
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
