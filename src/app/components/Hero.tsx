import { motion, useScroll, useTransform } from "motion/react";
import dbsLogo from "../../assets/986bd69e2ded8ce9884dcdf5ad54fc68e89b288d.png";
import grabLogo from "../../assets/b73c3129b3edbaba500d75ea9064151fc393a62b.png";
import chubbLogo from "../../assets/5b3c04f1bb037738e9bd7cf8706a9508580467df.png";
import techcombankLogo from "../../assets/c5b42687f57b0a8b8237b4a66178683f34099de7.png";
import krungthaiBankLogo from "../../assets/9925eff1fe574bc48a41eee64a05ed6d37102c60.png";
import sparkNZLogo from "../../assets/f5bb81503adf5122c455bc470daa0f743fed41f0.png";



const companies = [
  {
    name: "DBS",
    logo: dbsLogo,
    width: 80,
  },
  {
    name: "Grab",
    logo: grabLogo,
    width: 100,
  },
  {
    name: "Krungthai Bank",
    logo: krungthaiBankLogo,
    width: 140,
  },
  {
    name: "Techcombank",
    logo: techcombankLogo,
    width: 120,
  },
  {
    name: "Chubb",
    logo: chubbLogo,
    width: 100,
  },
  {
    name: "Spark NZ",
    logo: sparkNZLogo,
    width: 120,
  },
];

export function Hero() {
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pb-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#F5F5DC] rounded-full blur-3xl opacity-5"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#F5F5DC] rounded-full blur-3xl opacity-10"
        />
      </div>

      <div className="text-center px-8 max-w-5xl flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#F5F5DC]/70 uppercase tracking-wider mb-8">
            UX Designer & Researcher
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl mb-8 text-[#F5F5DC] font-['Playfair_Display']"
        >
          Hello, I'm DS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#F5F5DC]/80 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          I simplify complex finance challenges. Turning user friction into business growth.
        </motion.p>

        {/* Company Logos Scrolling Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#F5F5DC]/50 text-sm mb-6 uppercase tracking-wider">
            Collaborated with
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#123524] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#123524] to-transparent z-10" />
            
            <div className="flex">
              {/* First set of logos */}
              <motion.div
                animate={{
                  x: [0, -1400],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-16 items-center px-8"
              >
                {companies.map((company, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                    style={{ minWidth: `${company.width}px` }}
                  >
                    <img src={company.logo} alt={company.name} width={company.width} className="h-auto" />
                  </div>
                ))}
              </motion.div>
              
              {/* Duplicate set for seamless loop */}
              <motion.div
                animate={{
                  x: [0, -1400],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-16 items-center px-8"
              >
                {companies.map((company, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                    style={{ minWidth: `${company.width}px` }}
                  >
                    <img src={company.logo} alt={company.name} width={company.width} className="h-auto" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const workSection = document.getElementById('work');
              if (workSection) {
                const targetPosition = workSection.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 2000; // 2 seconds for slower, smoother scroll
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
            }}
            className="px-8 py-4 bg-[#F5F5DC] text-[#123524] rounded-full hover:bg-white transition-colors"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#F5F5DC] text-[#F5F5DC] rounded-full hover:bg-[#F5F5DC] hover:text-[#123524] transition-colors"
          >
            About Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-[#F5F5DC]/50"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}