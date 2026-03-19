import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section({ id, title, children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <motion.div
        className="section__inner"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}
