import { useState, useEffect } from "react";
import BorderGlow from "./BorderGlow";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`top-nav ${scrolled ? "top-nav--scrolled" : ""}`}>
      <div className="top-nav__brand" onClick={() => scrollTo("home")}>
        <span className="top-nav__logo">&lt;TL /&gt;</span>
      </div>

      <button
        className={`top-nav__burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <BorderGlow
        className={`top-nav__links ${menuOpen ? "top-nav__links--open" : ""}`}
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={['#c084fc', '#f472b6', '#38bdf8']}
      >
        <ul className="top-nav__links-inner">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`top-nav__link ${active === item.id ? "top-nav__link--active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </BorderGlow>
    </nav>
  );
}
