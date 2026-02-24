import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#F5F5DC] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.5,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#F5F5DC] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.8,
        }}
      />

      {/* Trail shape 1 - Triangle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.8,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-40">
          <polygon points="6,0 12,12 0,12" fill="#F5F5DC" />
        </svg>
      </motion.div>

      {/* Trail shape 2 - Square */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          rotate: mousePosition.x / 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 120,
          mass: 1.1,
        }}
      >
        <div className="w-[10px] h-[10px] bg-[#F5F5DC] opacity-30" />
      </motion.div>

      {/* Trail shape 3 - Star */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 7,
          y: mousePosition.y - 7,
          rotate: mousePosition.x / 5,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
          mass: 1.4,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-25">
          <path
            d="M7,0 L8.5,5 L14,5 L9.5,8 L11,13 L7,10 L3,13 L4.5,8 L0,5 L5.5,5 Z"
            fill="#F5F5DC"
          />
        </svg>
      </motion.div>

      {/* Trail shape 4 - Pentagon */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          rotate: -mousePosition.x / 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 80,
          mass: 1.7,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-20">
          <polygon points="6,0 12,4 10,12 2,12 0,4" fill="#F5F5DC" />
        </svg>
      </motion.div>

      {/* Trail shape 5 - Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 70,
          mass: 2.0,
        }}
      >
        <div className="w-2 h-2 bg-[#F5F5DC] rounded-full opacity-15" />
      </motion.div>
    </>
  );
}
