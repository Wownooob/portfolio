import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

interface CaseStudyDetailProps {
  onBack: () => void;
}

export function CaseStudyDetail({ onBack }: CaseStudyDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#123524] min-h-screen relative">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-[#F5F5DC]/10 backdrop-blur-md border border-[#F5F5DC]/20 text-[#F5F5DC] rounded-full hover:bg-[#F5F5DC]/20 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </motion.button>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[80vh] flex items-center justify-center px-8 pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#F5F5DC]/70 uppercase tracking-wider mb-6"
          >
            Case Study
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl mb-6 text-[#F5F5DC] font-['Playfair_Display']"
          >
            Mint Insurance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-[#F5F5DC]/80 mb-12 leading-relaxed"
          >
            Enabling self-service insurance purchase and reducing operational cost
          </motion.p>

          {/* Project Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-8 justify-center text-[#F5F5DC]/70"
          >
            <div>
              <p className="text-sm uppercase tracking-wider mb-1">Role</p>
              <p className="text-lg text-[#F5F5DC]">UX Designer</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-1">Scope</p>
              <p className="text-lg text-[#F5F5DC]">End-to-end UX</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-1">Platform</p>
              <p className="text-lg text-[#F5F5DC]">Web</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Outcome Section - Full Width Highlight */}
      <section className="relative py-20 bg-[#F5F5DC] text-[#123524]">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-12 font-['Playfair_Display'] text-center">
              🚀 Outcome
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 bg-[#123524]/5 rounded-2xl"
              >
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">7×</p>
                <p className="text-xl">increase in policies sold</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 bg-[#123524]/5 rounded-2xl"
              >
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">80%</p>
                <p className="text-xl">of policies purchased online without agent assistance</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-8 bg-[#123524]/5 rounded-2xl"
              >
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">~$60k</p>
                <p className="text-xl">operational cost savings</p>
              </motion.div>
            </div>

            <p className="text-xl text-center leading-relaxed max-w-4xl mx-auto">
              This project shifted insurance purchase from agent-led to customer-led, improving conversion while reducing manual processing effort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <Section title="The Challenge" backgroundColor="#123524">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-[#F5F5DC]/90 mb-8 leading-relaxed">
              Mint Insurance wanted customers to purchase insurance directly online. However, the existing experience was:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-lg text-[#F5F5DC]/80">Difficult to understand for first-time buyers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-lg text-[#F5F5DC]/80">Heavily dependent on agents for clarification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-lg text-[#F5F5DC]/80">Costly to operate due to manual follow-ups</span>
              </li>
            </ul>

            <p className="text-lg text-[#F5F5DC]/70 mb-6">
              As a result, customers frequently dropped off or relied on agents instead of completing purchases independently.
            </p>

            <div className="bg-[#F5F5DC]/10 border-l-4 border-[#F5F5DC] p-6 rounded">
              <p className="text-sm uppercase tracking-wider text-[#F5F5DC]/70 mb-2">Business goal</p>
              <p className="text-lg text-[#F5F5DC] mb-4">Increase online self-purchase</p>
              
              <p className="text-sm uppercase tracking-wider text-[#F5F5DC]/70 mb-2">User goal</p>
              <p className="text-lg text-[#F5F5DC]">Understand and complete insurance purchase confidently without assistance</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1592323401640-9c24ed330baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzk2NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Insurance interface"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </Section>

      {/* My Role */}
      <Section title="My Role" backgroundColor="#0d2318">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-[#F5F5DC]/90 mb-8 leading-relaxed">
            I was responsible for the end-to-end UX design, including:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "User interviews and research synthesis",
              "Journey mapping and persona creation",
              "Flow definition and wireframing",
              "Prototyping and usability testing",
              "Iteration based on user feedback"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-[#F5F5DC]/5 p-6 rounded-xl"
              >
                <span className="text-[#F5F5DC] text-2xl">✓</span>
                <span className="text-lg text-[#F5F5DC]/90">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-[#F5F5DC]/70 mt-8 italic">
            I worked closely with stakeholders to balance usability, compliance, and business constraints.
          </p>
        </div>
      </Section>

      {/* Research & Key Insights */}
      <Section title="Research & Key Insights" backgroundColor="#123524">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl mb-6 text-[#F5F5DC] font-['Playfair_Display']">Methods</h3>
            <div className="space-y-4">
              {["User interviews", "Competitive analysis", "Customer journey mapping"].map((method, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F5F5DC] rounded-full" />
                  <span className="text-lg text-[#F5F5DC]/90">{method}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXclMjBub3Rlc3xlbnwxfHx8fDE3NzAzODQ3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="User research"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <h3 className="text-3xl mb-8 text-[#F5F5DC] font-['Playfair_Display']">Key Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard
            emoji="😰"
            title="Insurance jargon created anxiety"
            description="Users felt unsure whether they were making the 'right' choice and hesitated to proceed."
          />
          <InsightCard
            emoji="📋"
            title="Long, opaque forms reduced confidence"
            description="Users couldn't tell how long the process would take or what was required next."
          />
          <InsightCard
            emoji="🤝"
            title="Users wanted reassurance, not more options"
            description="Too many choices increased hesitation instead of clarity."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#F5F5DC]/10 border-l-4 border-[#F5F5DC] p-6 rounded"
        >
          <p className="text-lg text-[#F5F5DC]/90">
            💡 <strong>These insights guided the decision to</strong> simplify language, break the flow into clear steps, and provide reassurance at key moments.
          </p>
        </motion.div>
      </Section>

      {/* UX Strategy */}
      <Section title="Defining the UX Strategy" backgroundColor="#0d2318">
        <p className="text-xl text-[#F5F5DC]/90 mb-8 leading-relaxed">
          Based on research, the design focused on:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "🎯", text: "Reducing cognitive load" },
            { icon: "📊", text: "Making progress visible and predictable" },
            { icon: "💬", text: "Replacing insurance jargon with plain language" },
            { icon: "✨", text: "Designing for confidence, not speed" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-[#F5F5DC]/5 p-6 rounded-xl"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="text-lg text-[#F5F5DC]/90">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#F5F5DC]/10 p-8 rounded-2xl text-center">
          <p className="text-sm uppercase tracking-wider text-[#F5F5DC]/70 mb-2">Success meant</p>
          <p className="text-2xl text-[#F5F5DC] font-['Playfair_Display']">
            Users could complete a purchase independently and feel confident in their decision.
          </p>
        </div>
      </Section>

      {/* Design & Iteration */}
      <Section title="Design & Iteration" backgroundColor="#123524">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl mb-6 text-[#F5F5DC] font-['Playfair_Display']">Key design decisions</h3>
            <div className="space-y-6">
              {[
                "Step-by-step flow instead of a single long form",
                "Clear progress indicators to reduce uncertainty",
                "Simplified language with contextual explanations",
                "Progressive disclosure to avoid overwhelming users"
              ].map((decision, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 bg-[#F5F5DC]/5 p-5 rounded-xl"
                >
                  <span className="text-[#F5F5DC] text-xl mt-1">→</span>
                  <span className="text-lg text-[#F5F5DC]/90">{decision}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2hlc3xlbnwxfHx8fDE3NzAzODA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design wireframes"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="bg-[#F5F5DC]/10 p-8 rounded-2xl">
          <h3 className="text-3xl mb-6 text-[#F5F5DC] font-['Playfair_Display']">Prototyping & Testing</h3>
          <p className="text-lg text-[#F5F5DC]/90 mb-6 leading-relaxed">
            Low- and mid-fidelity prototypes were tested with users to validate:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Comprehension of questions",
              "Confidence at decision points",
              "Willingness to proceed without agent support"
            ].map((item, idx) => (
              <div key={idx} className="bg-[#123524]/30 p-4 rounded-lg text-center">
                <p className="text-[#F5F5DC]/90">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-[#F5F5DC]/70 mt-6 italic">
            Feedback from testing directly informed refinements to wording, layout, and flow order.
          </p>
        </div>
      </Section>

      {/* Solution Highlights */}
      <Section title="Solution Highlights" backgroundColor="#0d2318">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1647510283848-1884fb01e887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZGlnaXRhbCUyMGZvcm0lMjBtb2Rlcm58ZW58MXx8fHwxNzcwMzk2NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Solution interface"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <div className="space-y-6">
            {[
              "A guided purchase journey that mirrors how users think, not how insurance is structured internally",
              "Clear reassurance messaging at critical steps",
              "Reduced dependency on agent intervention"
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F5DC]/5 p-6 rounded-xl border-l-4 border-[#F5F5DC]"
              >
                <p className="text-lg text-[#F5F5DC]/90">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results & Impact */}
      <section className="relative py-20 bg-[#F5F5DC] text-[#123524]">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-12 font-['Playfair_Display'] text-center">
              Results & Impact
            </h2>

            <p className="text-xl text-center mb-12 leading-relaxed">After launch:</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-[#123524] text-[#F5F5DC] rounded-2xl">
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">80%</p>
                <p className="text-lg">of policies were purchased online without agent involvement</p>
              </div>

              <div className="text-center p-8 bg-[#123524] text-[#F5F5DC] rounded-2xl">
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">7×</p>
                <p className="text-lg">increase in total policies sold</p>
              </div>

              <div className="text-center p-8 bg-[#123524] text-[#F5F5DC] rounded-2xl">
                <p className="text-6xl font-bold mb-4 font-['Playfair_Display']">~$60k</p>
                <p className="text-lg">in cost savings from reduced manual processing</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcwMzk2NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Results dashboard"
                className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
              />
            </motion.div>

            <p className="text-2xl text-center font-['Playfair_Display'] leading-relaxed">
              The redesign successfully aligned user confidence with business efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reflection & Learnings */}
      <Section title="Reflection & Learnings" backgroundColor="#123524">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {[
              "Simplification is more powerful than feature addition",
              "Confidence is a UX outcome, not just task completion",
              "Early usability testing prevented costly late-stage changes"
            ].map((learning, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-[#F5F5DC]/5 p-6 rounded-xl"
              >
                <span className="text-3xl">💡</span>
                <span className="text-xl text-[#F5F5DC]/90">{learning}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#F5F5DC]/10 p-8 rounded-2xl border-2 border-[#F5F5DC]/20">
            <p className="text-sm uppercase tracking-wider text-[#F5F5DC]/70 mb-4">If I had more time</p>
            <p className="text-xl text-[#F5F5DC]/90 leading-relaxed">
              I would explore personalization based on user intent and test microcopy variations to further improve conversion.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl mb-8 text-[#F5F5DC] font-['Playfair_Display']"
          >
            Interested in learning more?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#F5F5DC]/70 mb-12"
          >
            Let's discuss how I can help solve your design challenges
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#F5F5DC] text-[#123524] rounded-full hover:bg-white transition-colors text-lg"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}

// Helper Components
interface SectionProps {
  title: string;
  backgroundColor: string;
  children: React.ReactNode;
}

function Section({ title, backgroundColor, children }: SectionProps) {
  return (
    <section className="relative py-20 px-8" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl mb-12 text-[#F5F5DC] font-['Playfair_Display']"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

interface InsightCardProps {
  emoji: string;
  title: string;
  description: string;
}

function InsightCard({ emoji, title, description }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#F5F5DC]/5 p-6 rounded-xl border border-[#F5F5DC]/10"
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h4 className="text-xl mb-3 text-[#F5F5DC] font-['Playfair_Display']">{title}</h4>
      <p className="text-[#F5F5DC]/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}
