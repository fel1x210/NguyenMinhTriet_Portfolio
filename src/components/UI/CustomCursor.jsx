import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("project-card--clickable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(142, 255, 250, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(142, 255, 250, 0)" : "rgba(142, 255, 250, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
