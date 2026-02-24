import { motion, useScroll, useTransform } from "motion/react";

export function BackgroundIllustrations() {
  const { scrollYProgress } = useScroll();

  // Create different scroll-based transforms for various elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated circle 1 */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-20 left-10 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#F5F5DC" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="#F5F5DC" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Animated triangle */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 right-20 w-40 h-40"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <motion.polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#F5F5DC"
            strokeWidth="2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.polygon
            points="50,30 70,70 30,70"
            fill="#F5F5DC"
            opacity="0.4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Animated square */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute bottom-1/4 left-1/4 w-28 h-28"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <motion.rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="#F5F5DC"
            strokeWidth="2"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <rect x="30" y="30" width="40" height="40" fill="#F5F5DC" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Wavy lines */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-1/2 left-1/3 w-64 h-32 opacity-10"
      >
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <motion.path
            d="M0,50 Q50,20 100,50 T200,50"
            fill="none"
            stroke="#F5F5DC"
            strokeWidth="2"
            animate={{ d: ["M0,50 Q50,20 100,50 T200,50", "M0,50 Q50,80 100,50 T200,50", "M0,50 Q50,20 100,50 T200,50"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,60 Q50,30 100,60 T200,60"
            fill="none"
            stroke="#F5F5DC"
            strokeWidth="2"
            opacity="0.5"
            animate={{ d: ["M0,60 Q50,30 100,60 T200,60", "M0,60 Q50,90 100,60 T200,60", "M0,60 Q50,30 100,60 T200,60"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Dotted pattern */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 right-1/4 opacity-10"
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          {[...Array(5)].map((_, row) =>
            [...Array(5)].map((_, col) => (
              <motion.circle
                key={`${row}-${col}`}
                cx={20 + col * 20}
                cy={20 + row * 20}
                r="3"
                fill="#F5F5DC"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.1,
                }}
              />
            ))
          )}
        </svg>
      </motion.div>

      {/* Abstract blob */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-3/4 left-10 w-48 h-48 opacity-10"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.path
            d="M100,20 Q150,40 170,80 Q180,120 150,150 Q110,180 70,150 Q30,120 40,80 Q50,40 100,20"
            fill="#F5F5DC"
            opacity="0.4"
            animate={{
              d: [
                "M100,20 Q150,40 170,80 Q180,120 150,150 Q110,180 70,150 Q30,120 40,80 Q50,40 100,20",
                "M100,30 Q140,50 160,90 Q170,130 140,160 Q100,190 60,160 Q20,130 30,90 Q40,50 100,30",
                "M100,20 Q150,40 170,80 Q180,120 150,150 Q110,180 70,150 Q30,120 40,80 Q50,40 100,20",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Hexagon */}
      <motion.div
        style={{ y: y3, rotate: rotate1 }}
        className="absolute top-1/3 right-1/3 w-36 h-36"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <motion.polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="#F5F5DC"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <polygon
            points="50,20 75,35 75,65 50,80 25,65 25,35"
            fill="#F5F5DC"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Star pattern */}
      <motion.div
        style={{ y: y4 }}
        className="absolute bottom-1/3 right-10 w-32 h-32 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
            fill="#F5F5DC"
            opacity="0.3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Concentric circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-2/3 left-2/3 w-40 h-40 opacity-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[30, 40, 50, 60].map((r, i) => (
            <motion.circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="#F5F5DC"
              strokeWidth="1"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}