import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 28, stiffness: 260 },
  },
  exit: { opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.25 } },
};

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project || !project.details) return null;

  const d = project.details;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            &times;
          </button>

          <div className="modal-header">
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-body">
            <DetailBlock title="Project Summary">
              <p>{d.summary}</p>
            </DetailBlock>

            <DetailBlock title="Project Vision">
              <p>{d.vision}</p>
            </DetailBlock>

            <DetailBlock title="Project / Business Requirements">
              <ul className="detail-list">
                {d.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Project Plan">
              <ol className="detail-list detail-list--ordered">
                {d.plan.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </DetailBlock>

            <DetailBlock title="Requirements Analysis & Design">
              <p>{d.design}</p>
            </DetailBlock>

            <DetailBlock title="Wireframes / Mockups">
              <ul className="detail-list">
                {d.wireframes.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Status Reports">
              <ul className="detail-list detail-list--status">
                {d.statusReports.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="System Implementation">
              <p>{d.implementation}</p>
            </DetailBlock>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function DetailBlock({ title, children }) {
  return (
    <div className="detail-block">
      <h3 className="detail-block__title">{title}</h3>
      {children}
    </div>
  );
}
