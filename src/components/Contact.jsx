import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

const contactDetails = [
  {
    label: "Email",
    value: "trishamaebobiles@gmail.com",
    icon: FiMail,
    href: "mailto:trishamaebobiles@gmail.com",
  },
  {
    label: "Phone",
    value: "09943303851",
    icon: FiPhone,
    href: "tel:09943303851",
  },
  {
    label: "Location",
    value: "Lagangilang, Abra",
    icon: FiMapPin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    // Opens the visitor's email app; this does not send email directly from the website.
    window.location.href = `mailto:trishamaebobiles@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden bg-[#080d1b] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-0"><div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-violet-600/[0.10] blur-[120px]" /><div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[110px]" /></div>
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="pt-1" data-aos="fade-up">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I&apos;m always open to new opportunities, projects, and
              connections. Feel free to reach out if you&apos;d like to connect
              or collaborate.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map(({ label, value, icon: Icon, href }) => {
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl text-violet-200">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold text-white">
                        {label}
                      </span>
                      <span className="mt-1 block break-words text-base text-slate-400">
                        {value}
                      </span>
                    </span>
                  </>
                );

                const className =
                  "group flex min-h-[98px] items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 shadow-sm transition hover:border-violet-300/25 hover:bg-violet-400/[0.05] hover:shadow-lg sm:px-6";

                return href ? (
                  <a key={label} href={href} className={className}>
                    {content}
                  </a>
                ) : (
                  <div key={label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-2xl border border-white/[0.10] bg-gradient-to-br from-[#10182b]/95 via-[#0d1528]/95 to-[#10182b]/90 p-6 shadow-2xl shadow-black/20 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-300/[0.08] text-xl text-violet-200">
                <FiMessageCircle aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Enter your name"
                  className="min-h-11 w-full rounded-lg border border border-white/10 bg-[#080d1b]/70 px-3 py-2.5 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  placeholder="Enter your email"
                  className="min-h-11 w-full rounded-lg border border border-white/10 bg-[#080d1b]/70 px-3 py-2.5 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-lg border border border-white/10 bg-[#080d1b]/70 px-3 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/25 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
