import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudy } from "./components/CaseStudy";
import { CustomCursor } from "./components/CustomCursor";
import { BackgroundIllustrations } from "./components/BackgroundIllustrations";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { ProgressTracker } from "./components/ProgressTracker";

const caseStudies = [
  {
    id: "mint-insurance",
    title: "Mint Insurance",
    category: "Insurance Platform",
    description: "Enabling self-service insurance purchase and reducing operational cost. Achieved 7× increase in policies sold and 80% online purchase rate without agent assistance.",
    tags: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    imageUrl: "https://images.unsplash.com/photo-1592323401640-9c24ed330baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzk2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "fittrack-pro",
    title: "FitTrack Pro",
    category: "Mobile App Design",
    description: "Created a comprehensive fitness tracking app that motivates users to achieve their health goals. Integrated gamification elements that increased user retention by 65%.",
    tags: ["Mobile Design", "User Research", "Interaction Design", "Prototyping"],
    imageUrl: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaGVhbHRoJTIwdHJhY2tpbmd8ZW58MXx8fHwxNzcwMzA0NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "shopease",
    title: "ShopEase",
    category: "E-commerce Platform",
    description: "Designed an intuitive e-commerce experience that streamlined the checkout process and improved conversion rates by 55%. Focused on reducing cart abandonment through clear pricing and trust signals.",
    tags: ["E-commerce", "Conversion Optimization", "A/B Testing", "UX Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzAyODY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "mindfulapp",
    title: "MindfulApp",
    category: "Wellness Platform",
    description: "Developed a meditation and mindfulness app focused on accessibility and ease of use. Designed calming interfaces that support users' mental wellness journey with personalized content.",
    tags: ["Mobile UX", "Accessibility", "Content Strategy", "Visual Design"],
    imageUrl: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4fGVufDF8fHx8MTc3MDMwNDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  // Reset scroll position when navigating to case study detail
  useEffect(() => {
    if (selectedCaseStudy) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [selectedCaseStudy]);

  // Function to handle going back to portfolio
  const handleBackToPortfolio = () => {
    setSelectedCaseStudy(null);
    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

  // Show case study detail if one is selected
  if (selectedCaseStudy === "mint-insurance") {
    return <CaseStudyDetail onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="bg-[#123524] relative">
      <style>{`
        * {
          cursor: none !important;
        }
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
      
      <CustomCursor />
      <BackgroundIllustrations />
      <Navigation />
      <ProgressTracker
        sections={[
          { label: "Home" },
          ...caseStudies.map((s) => ({ label: s.title })),
        ]}
      />
      
      <Hero />
      
      <div id="work" className="relative">
        {caseStudies.map((study, index) => (
          <div 
            key={study.id}
            data-case-study-index={index}
            onClick={() => study.id === "mint-insurance" && setSelectedCaseStudy(study.id)}
            className={study.id === "mint-insurance" ? "cursor-pointer" : ""}
          >
            <CaseStudy
              {...study}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Footer section */}
      <footer className="bg-[#0d2318] text-[#F5F5DC] py-20 px-8 relative z-10 border-t border-[#F5F5DC]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-['Playfair_Display']">Let's Create Something Amazing</h2>
          <p className="text-[#F5F5DC]/70 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="px-8 py-4 bg-[#F5F5DC] text-[#123524] rounded-full hover:bg-white transition-colors">
            Get in Touch
          </button>
        </div>
      </footer>
    </div>
  );
}