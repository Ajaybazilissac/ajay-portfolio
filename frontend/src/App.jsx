import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight,
  Award,
} from "lucide-react";
import { THEME, PROFILE_PHOTO_URL } from "./config/theme";
import {
  PROJECTS,
  SKILL_GROUPS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "./models/portfolioModel";
import Navbar from "./components/Navbar";
import NeuronBackground from "./components/NeuronBackground";
import FadeUp from "./components/FadeUp";
import ProjectModal from "./components/ProjectModal";
import ResumeChatbot from "./components/ResumeChatbot";

export default function App() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [photoLoadError, setPhotoLoadError] = useState(false);
  const [copied, setCopied] = useState(false);

  const filteredProjects =
    projectFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === projectFilter);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("ajaybazilissac93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: THEME.bg,
        color: THEME.text,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <NeuronBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-72 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0, 130, 251, 0.10), rgba(0, 194, 255, 0.03) 60%, transparent 100%)",
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20 space-y-24 sm:space-y-28">
        {/* HERO SECTION */}
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center scroll-mt-24"
        >
          <div className="md:col-span-7 space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: THEME.gradientSoft,
                color: THEME.accent,
                border: "1px solid rgba(0, 100, 224, 0.16)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI/ML Engineer &amp; Full-Stack Web Developer</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Building intelligent AI systems &amp; scalable{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: THEME.gradient }}
              >
                full-stack web apps.
              </span>
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: THEME.textMuted }}
            >
              Hi, I&apos;m <strong>Ajay Bazil Issac</strong>—an{" "}
              <strong>AI/ML Engineer</strong> and{" "}
              <strong>Full-Stack MERN Developer</strong> with{" "}
              <strong>2 years and 8 months</strong> of professional experience.
              I build autonomous multi-agent AI workflows, Hybrid RAG pipelines,
              and Computer Vision models alongside responsive, production-ready
              React &amp; Node.js applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 shadow-sm"
                style={{ background: THEME.gradient, color: THEME.accentText }}
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-[#F5F8FC]"
                style={{
                  backgroundColor: THEME.card,
                  color: THEME.text,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                Get In Touch
              </a>
            </div>

            <div
              className="flex flex-wrap items-center gap-4 pt-2"
              style={{ color: THEME.textMuted }}
            >
              <a
                href="https://github.com/Ajaybazilissac"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span style={{ color: THEME.border }}>•</span>
              <a
                href="https://www.linkedin.com/in/ajay-bazil-issac-dataanalyst-aiengineer/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: THEME.border }}>•</span>
              <a
                href="mailto:ajaybazilissac93@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div
              className="rounded-2xl p-4 shadow-xs"
              style={{
                backgroundColor: THEME.card,
                border: `1px solid ${THEME.border}`,
              }}
            >
              <div
                className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: THEME.bgSubtle }}
              >
                {PROFILE_PHOTO_URL && !photoLoadError ? (
                  <img
                    src={PROFILE_PHOTO_URL}
                    alt="Ajay Bazil Issac — AI/ML Engineer & Full-Stack Developer"
                    onError={() => setPhotoLoadError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full"
                    fill="none"
                  >
                    <rect width="300" height="300" fill={THEME.bgSubtle} />
                    <circle cx="150" cy="135" r="88" fill={THEME.accentSoft} />
                    <circle
                      cx="150"
                      cy="116"
                      r="42"
                      fill={THEME.accent}
                      fillOpacity="0.16"
                      stroke={THEME.accent}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M78 262C78 216 108 188 150 188C192 188 222 216 222 262"
                      fill={THEME.accent}
                      fillOpacity="0.12"
                      stroke={THEME.accent}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="212" cy="84" r="6" fill={THEME.accent} />
                    <circle
                      cx="88"
                      cy="96"
                      r="4"
                      fill={THEME.accent}
                      fillOpacity="0.5"
                    />
                  </svg>
                )}

                <div
                  className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 shadow-xs backdrop-blur-sm"
                  style={{
                    backgroundColor: `${THEME.card}F0`,
                    color: THEME.text,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Open to AI/ML &amp; Full-Stack Roles</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: THEME.card,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div
                  className="font-bold text-sm"
                  style={{ color: THEME.accent }}
                >
                  2 Yrs 8 Mos
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: THEME.textMuted }}
                >
                  Experience
                </div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: THEME.card,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div
                  className="font-bold text-sm"
                  style={{ color: THEME.accent }}
                >
                  AI + MERN
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: THEME.textMuted }}
                >
                  Dual Stack
                </div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: THEME.card,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div
                  className="font-bold text-sm"
                  style={{ color: THEME.accent }}
                >
                  1 IJRTE
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: THEME.textMuted }}
                >
                  Publication
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <FadeUp>
          <section id="projects" className="space-y-8 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: THEME.accent }}
                >
                  Selected Work
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AI/ML &amp; Full-Stack Web Projects
                </h2>
              </div>

              <div
                className="inline-flex items-center gap-1 p-1 rounded-xl"
                style={{
                  backgroundColor: THEME.bgSubtle,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                {["All", "AI & ML", "Web Dev"].map((tab) => {
                  const isActive = projectFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setProjectFilter(tab)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                      style={{
                        backgroundColor: isActive
                          ? THEME.accent
                          : "transparent",
                        color: isActive ? THEME.accentText : THEME.textMuted,
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs"
                  style={{
                    backgroundColor: THEME.card,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: THEME.accentSoft,
                          color: THEME.accent,
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: THEME.textLight }}
                      >
                        {project.highlight}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold pt-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: THEME.textMuted }}
                    >
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md font-medium"
                          style={{
                            backgroundColor: THEME.bgSubtle,
                            color: THEME.textMuted,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-75 cursor-pointer"
                      style={{ color: THEME.accent }}
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* SKILLS SECTION */}
        <FadeUp>
          <section id="skills" className="space-y-8 scroll-mt-24">
            <div className="space-y-2">
              <p
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: THEME.accent }}
              >
                Capabilities
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Technical Skills &amp; Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl p-6 space-y-4"
                  style={{
                    backgroundColor: THEME.bgSubtle,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Layers
                      className="w-4 h-4"
                      style={{ color: THEME.accent }}
                    />
                    <h3
                      className="font-bold text-base"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg"
                        style={{
                          backgroundColor: THEME.card,
                          color: THEME.text,
                          border: `1px solid ${THEME.border}`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <FadeUp>
          <section id="experience" className="space-y-10 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: THEME.accent }}
                >
                  Background
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Work Experience
                </h2>
              </div>

              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: THEME.accentSoft,
                  color: THEME.accent,
                }}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>2 Years, 8 Months Total Experience</span>
              </span>
            </div>

            <div className="space-y-5">
              {EXPERIENCE.map((item) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="rounded-2xl p-6 transition-colors"
                  style={{
                    backgroundColor: THEME.card,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="text-lg font-bold"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {item.role}
                        </h3>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: THEME.bgSubtle,
                            color: THEME.textMuted,
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: THEME.textMuted }}
                      >
                        {item.company}
                      </p>
                    </div>

                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: item.current
                          ? THEME.accentSoft
                          : THEME.bgSubtle,
                        color: item.current ? THEME.accent : THEME.textMuted,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <ul
                    className="space-y-1.5 text-sm leading-relaxed"
                    style={{ color: THEME.textMuted }}
                  >
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: THEME.accent }}>•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{
                  backgroundColor: THEME.bgSubtle,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap
                    className="w-5 h-5"
                    style={{ color: THEME.accent }}
                  />
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Education
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {EDUCATION.map((edu) => (
                    <div key={edu.title}>
                      <div className="text-sm font-semibold">{edu.title}</div>
                      <div
                        className="text-xs"
                        style={{ color: THEME.textMuted }}
                      >
                        {edu.institution} • {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 space-y-5"
                style={{
                  backgroundColor: THEME.bgSubtle,
                  border: `1px solid ${THEME.border}`,
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen
                      className="w-5 h-5"
                      style={{ color: THEME.accent }}
                    />
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Published Research
                    </h3>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    &ldquo;Segmentation of Complex Background Images Using Deep
                    Learning&rdquo;
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: THEME.textMuted }}
                  >
                    Issac, A. B. et al. — International Journal of Recent
                    Technology and Engineering (IJRTE), 2019.
                  </p>
                </div>

                <div
                  className="space-y-2 pt-2"
                  style={{ borderTop: `1px solid ${THEME.border}` }}
                >
                  <div className="flex items-center gap-2">
                    <Award
                      className="w-4 h-4"
                      style={{ color: THEME.accent }}
                    />
                    <h4
                      className="text-sm font-bold"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Certifications
                    </h4>
                  </div>
                  <ul
                    className="space-y-1 text-xs"
                    style={{ color: THEME.textMuted }}
                  >
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert} className="flex items-start gap-1.5">
                        <span style={{ color: THEME.accent }}>•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* CONTACT SECTION */}
        <FadeUp>
          <section id="contact" className="scroll-mt-24">
            <div
              className="rounded-3xl p-8 sm:p-10 text-center space-y-6"
              style={{
                backgroundColor: THEME.bgSubtle,
                border: `1px solid ${THEME.border}`,
              }}
            >
              <div className="space-y-2 max-w-xl mx-auto">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: THEME.accent }}
                >
                  Get In Touch
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Open to AI/ML Engineer &amp; Full-Stack Opportunities
                </h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: THEME.textMuted }}
                >
                  Based in Kochi, Kerala, India — available for full-time roles,
                  remote positions, and AI/web engineering collaborations.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:ajaybazilissac93@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{
                    background: THEME.gradient,
                    color: THEME.accentText,
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>ajaybazilissac93@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: THEME.card,
                    color: THEME.text,
                    border: `1px solid ${THEME.border}`,
                  }}
                >
                  {copied ? (
                    <Check
                      className="w-4 h-4"
                      style={{ color: THEME.accent }}
                    />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>

              <div
                className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-medium"
                style={{ color: THEME.textMuted }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-4 h-4" style={{ color: THEME.accent }} />
                  +91 7012792566
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" style={{ color: THEME.accent }} />
                  Kochi, Kerala, India
                </span>
                <a
                  href="https://www.linkedin.com/in/ajay-bazil-issac-dataanalyst-aiengineer/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                  style={{ color: THEME.accent }}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Ajaybazilissac"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                  style={{ color: THEME.accent }}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>

      <footer
        className="relative z-10 py-8 px-5 text-center text-xs bg-white/80 backdrop-blur-xs"
        style={{
          borderTop: `1px solid ${THEME.border}`,
          color: THEME.textLight,
        }}
      >
        © 2026 Ajay Bazil Issac • AI/ML Engineer &amp; Full-Stack Web Developer
      </footer>

      <ResumeChatbot />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
