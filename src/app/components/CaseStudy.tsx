import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface CaseStudyProps {
  id?: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
}

export function CaseStudy({
  id,
  title,
  category,
  description,
  tags,
  imageUrl,
  index,
}: CaseStudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create parallax effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        y,
        position: "relative",
      }}
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={index % 2 === 0 ? "md:order-1" : "md:order-2"}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#F5F5DC] uppercase tracking-wider mb-4"
            >
              {category}
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl mb-6 text-[#F5F5DC] font-['Playfair_Display']"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-[#F5F5DC]/80 text-lg mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#F5F5DC]/10 border border-[#F5F5DC]/20 rounded-full text-sm text-[#F5F5DC]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-[#F5F5DC] text-[#123524] rounded-full hover:bg-white transition-colors"
            >
              View Case Study
            </motion.button>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`relative ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#F5F5DC] rounded-full blur-3xl opacity-10"
            />
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F5F5DC] rounded-full blur-3xl opacity-15"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}