import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Crystal3D from './Crystal3D'

const PROFILE_IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'

const roles = ['Frontend Developer', 'Programming Teacher', 'PM Trainee', 'MBA Student']

/* tiny sparkle */
const sparkles = [
  { top: '18%', left: '8%',   delay: '0s',    size: 5 },
  { top: '72%', left: '5%',   delay: '1.2s',  size: 4 },
  { top: '35%', right: '7%',  delay: '0.7s',  size: 6 },
  { top: '80%', right: '12%', delay: '2s',    size: 4 },
  { top: '55%', left: '15%',  delay: '1.6s',  size: 5 },
  { top: '15%', right: '18%', delay: '0.4s',  size: 4 },
  { top: '90%', left: '40%',  delay: '2.4s',  size: 3 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at 60% 40%, #f3e8ff 0%, #fdf4ff 40%, #fdfcff 100%)',
      }}
    >
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-lavender-100/60 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-blush-100/50 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Sparkle dots */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: s.top, left: s.left, right: s.right,
            width: s.size, height: s.size,
            background: 'radial-gradient(circle, #f0abfc, #a855f7)',
            animation: `sparkle 3s ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}

      {/* ── Layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 py-24 lg:py-0 min-h-screen">

        {/* Left — text */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Profile + LDS badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-lavender-300/60">
                <img src={PROFILE_IMG} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-sage-400 ring-2 ring-white" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-lavender-500 bg-lavender-50 border border-lavender-200/70 px-3 py-1.5 rounded-full">
              LDS · Leadership Portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4"
          >
            Building
            <br />
            <span className="text-gradient-violet">Bridges</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-plum-700/70 text-lg md:text-xl italic font-light mb-8 max-w-md"
          >
            From Developer to Human-Centered Leadership
          </motion.p>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="px-4 py-1.5 rounded-full border border-lavender-200 text-plum-700 text-sm bg-white/60 hover:bg-lavender-50 hover:border-lavender-400 transition-all duration-200 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll cue */}
          <motion.a
            href="#journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-2 text-lavender-500 hover:text-lavender-700 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-medium">Begin the journey</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Right — 3D orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[55%] h-[55vw] max-h-[600px] min-h-[320px] order-1 lg:order-2 flex items-center justify-center"
        >
          <Suspense fallback={<div className="w-48 h-48 rounded-full bg-lavender-100 animate-pulse-soft" />}>
            <Crystal3D className="w-full h-full" />
          </Suspense>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  )
}
