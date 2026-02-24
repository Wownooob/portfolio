import { motion, useScroll, useTransform } from "motion/react";

export function Navigation() {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(18, 53, 36, 0)", "rgba(18, 53, 36, 0.95)"]
  );
  
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-[#F5F5DC] font-['Playfair_Display']"
        >
          Portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex gap-8"
        >
          {["Work", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-[#F5F5DC] hover:text-[#F5F5DC]/70 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}