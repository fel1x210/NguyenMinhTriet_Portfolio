import { motion } from "framer-motion";
import Scene from "./components/Scene/Scene";
import TopNav from "./components/Layout/TopNav";
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
} from "./components/Resume/ResumeSections";
import Projects from "./components/Projects/Projects";
import Section from "./components/Section/Section";
import GradientText from "./components/UI/GradientText";
import DecryptedText from "./components/UI/DecryptedText";
import SplashCursor from "./components/UI/SplashCursor";
import HangingAstronaut from "./components/UI/HangingAstronaut";
import { resume } from "./content/resume";

export default function App() {
  return (
    <>
      <SplashCursor />
      <Scene />
      <TopNav />

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero__content">
            <motion.div
              className="hero__greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <DecryptedText text="Hello, World! I'm" delay={100} speed={15} />
            </motion.div>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <HangingAstronaut />
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#5227FF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="custom-class"
                >
                  {resume.name}
                </GradientText>
              </div>
            </motion.h1>

            <motion.p
              className="hero__tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <DecryptedText 
                text="Full-stack developer & CS student crafting secure, user-centric applications at the intersection of code and creativity." 
                delay={400}
                speed={20}
              />
            </motion.p>

            <motion.div
              className="hero__cta-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn--outline">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <Projects />

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="contact-content">
            <p>
              I&apos;m currently open to new opportunities and would love to
              hear from you. Whether you have a question or just want to say
              hello, feel free to reach out!
            </p>
            <div className="contact-links">
              <a
                href={`tel:${resume.contact.phone}`}
                className="contact-link"
              >
                {resume.contact.phone}
              </a>
              <a
                href={resume.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
              <a
                href={resume.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        &lt;/&gt; Built by {resume.name} &middot; {new Date().getFullYear()}
      </footer>
    </>
  );
}
