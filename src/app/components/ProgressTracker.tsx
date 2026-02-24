import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ProgressTrackerProps {
  totalStudies: number;
}

export function ProgressTracker({ totalStudies }: ProgressTrackerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById('work');
      if (!workSection) return;

      // Check if work section is in view to show/hide tracker
      const workSectionTop = workSection.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show tracker when user scrolls to work section
      setIsVisible(scrollPosition + windowHeight / 2 > workSectionTop);

      // Find all case study sections using data attribute
      const sections = workSection.querySelectorAll('[data-case-study-index]');
      const scrollCenter = scrollPosition + windowHeight / 2;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const index = parseInt(element.getAttribute('data-case-study-index') || '0');
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollCenter >= sectionTop && scrollCenter < sectionBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (index: number) => {
    const workSection = document.getElementById('work');
    if (!workSection) return;

    const sections = workSection.querySelectorAll('[data-case-study-index]');
    const targetSection = sections[index] as HTMLElement;
    
    if (targetSection) {
      const targetPosition = targetSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {Array.from({ length: totalStudies }).map((_, index) => (
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
                ? 'bg-[#F5F5DC] border-[#F5F5DC] scale-125'
                : 'bg-transparent border-[#F5F5DC]/40 hover:border-[#F5F5DC]/70'
            }`}
            animate={{
              scale: activeIndex === index ? 1.25 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Tooltip on hover */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <div className="bg-[#F5F5DC] text-[#123524] px-3 py-1 rounded text-sm">
              Case Study {index + 1}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}