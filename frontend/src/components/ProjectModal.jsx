import React from 'react';
import { X, Github } from 'lucide-react';
import { THEME } from '../config/theme';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl"
        style={{
          backgroundColor: THEME.card,
          border: `1px solid ${THEME.border}`,
          color: THEME.text
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: THEME.accentSoft, color: THEME.accent }}
            >
              {project.category}
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold mt-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:opacity-70 cursor-pointer"
            style={{ backgroundColor: THEME.bgSubtle }}
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
          {project.overview}
        </p>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: THEME.textLight }}>
            How It Works
          </div>
          <ul className="space-y-2 text-sm" style={{ color: THEME.textMuted }}>
            {project.architecture.map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold" style={{ color: THEME.accent }}>
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{ backgroundColor: THEME.bgSubtle, color: THEME.text }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <a
            href="https://github.com/Ajaybazilissac"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold"
            style={{ backgroundColor: THEME.accent, color: THEME.accentText }}
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
