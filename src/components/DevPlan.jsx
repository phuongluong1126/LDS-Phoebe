import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Rocket, Sparkles } from 'lucide-react'

const milestones = [
  {
    period: '2026 — 2027',
    title: 'Transition & Foundation',
    status: 'now',
    color: 'violet',
    tagline: 'Make the PM move real.',
    items: [
      { done: true,  text: '50% through PM training at FPT — two months left to complete.' },
      { done: false, text: 'Finish the program and actively look for a PM role in a real project.' },
      { done: false, text: 'Reduce teaching hours to create more focus for the career transition.' },
      { done: false, text: 'Practise faster decisions: frame the problem, give myself two days max, act.' },
      { done: false, text: 'Speak up earlier in team settings instead of waiting until I feel certain.' },
    ],
  },
  {
    period: '2028 — 2030',
    title: 'MBA Done. Own Business.',
    status: 'next',
    color: 'blush',
    tagline: 'Complete MBA. Start something of my own.',
    items: [
      { done: false, text: 'Complete MBA — apply business thinking to real decisions, not just coursework.' },
      { done: false, text: 'Identify a real problem worth solving at the intersection of tech and people.' },
      { done: false, text: 'Build the network, confidence, and financial foundation to launch a business.' },
      { done: false, text: 'Develop conflict management and stakeholder skills — still my weakest area.' },
    ],
  },
  {
    period: '2031 and beyond',
    title: 'Build Something Meaningful',
    status: 'future',
    color: 'sage',
    tagline: 'Lead at the intersection of technology and people.',
    items: [
      { done: false, text: 'Run a business focused on technology, learning, or people development.' },
      { done: false, text: 'Build environments where people can grow and do their best work.' },
      { done: false, text: "The exact role matters less than the type of impact — that part is clear." },
    ],
  },
]

const colorMap = {
  violet: {
    dot:    'bg-lavender-500',
    ring:   'ring-lavender-200',
    text:   'text-lavender-500',
    border: 'border-lavender-200',
    bg:     'bg-lavender-50',
    check:  'text-lavender-500',
    line:   'bg-gradient-to-b from-lavender-300 via-blush-300 to-sage-300',
    tag:    'border-lavender-300 text-lavender-600 bg-lavender-50',
  },
  blush: {
    dot:    'bg-blush-500',
    ring:   'ring-blush-200',
    text:   'text-blush-500',
    border: 'border-blush-200',
    bg:     'bg-blush-50',
    check:  'text-blush-500',
    tag:    'border-blush-300 text-blush-600 bg-blush-50',
  },
  sage: {
    dot:    'bg-sage-500',
    ring:   'ring-sage-200',
    text:   'text-sage-500',
    border: 'border-sage-200',
    bg:     'bg-sage-50',
    check:  'text-sage-500',
    tag:    'border-sage-300 text-sage-600 bg-sage-50',
  },
}

export default function DevPlan() {
  return (
    <section
      id="plan"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff0f6 0%, #f5f0ff 50%, #f0f9ff 100%)' }}
    >
      {/* Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-lavender-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blush-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="chapter-label justify-center">Chapter Five</p>
          <h2 className="section-title mb-4">
            My Development{' '}
            <span className="text-gradient-violet">Plan</span>
          </h2>
          <p className="text-plum-700/60 max-w-md mx-auto text-base font-light leading-relaxed">
            A plan only means something if it is specific enough to hold you accountable.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-lavender-300 via-blush-300 to-sage-300 opacity-60" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const c = colorMap[m.color]
              return (
                <motion.div
                  key={m.period}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-6 top-1.5 w-5 h-5 rounded-full ${c.dot} ring-4 ${c.ring} bg-white flex items-center justify-center shadow-sm`}>
                    {m.status === 'now' && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                    {m.status === 'future' && (
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="card-light p-6 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
                        {m.period}
                      </span>
                      {m.status === 'now' && (
                        <span className={`tag-light ${c.tag} text-xs`}>
                          Current Focus
                        </span>
                      )}
                    </div>
                    <h3 className="text-plum-900 font-bold text-lg mb-1 font-display">{m.title}</h3>
                    <p className="text-plum-700/50 text-sm italic mb-5 font-light">{m.tagline}</p>

                    <ul className="space-y-2.5">
                      {m.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          {item.done ? (
                            <CheckCircle2 className={`w-4 h-4 ${c.check} shrink-0 mt-0.5`} />
                          ) : (
                            <Circle className="w-4 h-4 text-plum-900/20 shrink-0 mt-0.5" />
                          )}
                          <span className={item.done ? 'text-plum-800' : 'text-plum-700/60'}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
