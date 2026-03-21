import { useState, useEffect } from "react";
import "./DecryptedText.css";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function DecryptedText({ 
  text, 
  delay = 0,
  speed = 40,
  maxIterations = 15,
  className = ""
}) {
  const [displayText, setDisplayText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return char;
            if (index < iterations) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      iterations += 1; // Reveal 1 character per tick

      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, isStarted]);

  return (
    <span className={`decrypted-text ${className}`}>
      {isStarted ? displayText : " "}
    </span>
  );
}
