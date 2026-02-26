import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Section {
  label: string;
}

interface ProgressTrackerProps {
  sections: Section[];
}

export function ProgressTracker({ sections }: ProgressTrackerProps) {
  // Index 0 = Hero, 1..n = case studies
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      const footerEl = document.querySelector("footer");

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollCenter = scrollY + windowHeight / 2;

      // Hide when footer is in view
      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top + scrollY;
        if (scrollCenter >= footerTop) {
          setIsVisible(false);
          return;
        }
      }

      setIsVisible(true);

      // Determine active dot
      if (!workSection) {
        // No work section yet — must be hero
        setActiveIndex(0);
        return;
      }

      const workTop = workSection.getBoundingClientRect().top + scrollY;

      // If scroll center is above the work section → hero dot
      if (scrollCenter < workTop) {
        setActiveIndex(0);
        return;
      }

      // Otherwise check each case study (dots 1..n)
      const caseSections = workSection.querySelectorAll("[data-case-study-index]");

      let newActiveIndex = 1; // Default to first case study if in work section
      caseSections.forEach((section) => {
        const el = section as HTMLElement;
        const idx = parseInt(el.getAttribute("data-case-study-index") || "0");
        const top = el.getBoundingClientRect().top + scrollY;
        const bottom = top + el.offsetHeight;

        if (scrollCenter >= top && scrollCenter < bottom) {
          newActiveIndex = idx + 1; // +1 because index 0 is hero
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === 0) {
      // Hero — scroll to top
      const start = window.pageYOffset;
      const duration = 1200;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      const animate = (now: number) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start * (1 - easeInOutCubic(progress)));
        if (elapsed < duration) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      return;
    }

    // Case study dot — index 1 maps to case study 0, etc.
    const workSection = document.getElementById("work");
    if (!workSection) return;

    const caseSections = workSection.querySelectorAll("[data-case-study-index]");
    const targetEl = caseSections[index - 1] as HTMLElement;
    if (!targetEl) return;

    const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {sections.map((section, index) => (
        <motion.button
          key={index}
          onClick={() => handleDotClick(index)}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#F5F5DC] border-[#F5F5DC]"
                : "bg-transparent border-[#F5F5DC]/40 hover:border-[#F5F5DC]/70"
            }`}
            animate={{ scale: activeIndex === index ? 1.25 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tooltip */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <div className="bg-[#F5F5DC] text-[#123524] px-3 py-1 rounded text-sm font-['Source_Sans_Pro']">
              {section.label}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
