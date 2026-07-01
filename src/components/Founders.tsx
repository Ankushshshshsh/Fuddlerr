import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from './FadeIn';

const founders = [
  {
    name: 'Ankush Shirsat',
    role: 'The Visionary',
    description: 'The dreamer with a plan. Ankush brings the creative fire and unstoppable energy that drives FUDDLER forward. His Mumbai roots and global outlook shape every decision.',
    quote: 'Great beer brings people together. That\'s the mission.',
    color: '#FCD34D',
    bgColor: '#FEF3C7',
    traits: ['Vision', 'Marketing', 'Strategy', 'Energy'],
    emoji: '🚀',
  },
  {
    name: 'Sharvil Patil',
    role: 'The Craftsman',
    description: 'The perfectionist behind every brew. Sharvil\'s obsession with quality and precision ensures every FUDDLER beer meets world-class standards.',
    quote: 'Quality is not negotiable. Every drop matters.',
    color: '#60A5FA',
    bgColor: '#DBEAFE',
    traits: ['Brewing', 'Quality', 'Operations', 'Precision'],
    emoji: '⚗️',
  },
  {
    name: 'Abhijeet',
    role: 'The Connector',
    description: 'The heart of the community. Abhijeet builds bridges between the brand and the people, turning customers into lifelong friends.',
    quote: 'We\'re not selling beer. We\'re creating memories.',
    color: '#FBBF24',
    bgColor: '#FEF9C3',
    traits: ['Community', 'Events', 'Experience', 'Growth'],
    emoji: '🤝',
  },
];

const CartoonFounder = ({
  founder,
  index,
}: {
  founder: typeof founders[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl border-4 shadow-[8px_8px_0_rgba(0,0,0,0.1)]"
        style={{
          backgroundColor: founder.bgColor,
          borderColor: founder.color,
        }}
        whileHover={{
          y: -10,
          shadow: '12px 12px 0 rgba(0,0,0,0.15)',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -top-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center text-4xl z-10"
          style={{ backgroundColor: founder.color }}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        >
          {founder.emoji}
        </motion.div>

        <div className="pt-12 pb-8 px-6 text-center">
          <motion.div
            className="relative mx-auto mb-6"
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          >
            <svg
              viewBox="0 0 120 140"
              className="w-32 h-40 mx-auto"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
            >
              <ellipse cx="60" cy="75" rx="28" ry="35" fill="#FFD9B8" />
              <ellipse cx="60" cy="42" rx="25" ry="20" fill="#2B2825" />

              <circle cx="48" cy="70" r="4" fill="#2B2825" />
              <circle cx="72" cy="70" r="4" fill="#2B2825" />
              <ellipse cx="48" cy="68" rx="1.5" ry="1" fill="white" />
              <ellipse cx="72" cy="68" rx="1.5" ry="1" fill="white" />
              <ellipse cx="60" cy="78" rx="2" ry="1.5" fill="#E8B89D" />

              <path
                d={`M 52 88 Q 60 95 68 88`}
                stroke="#2B2825"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              <rect x="45" y="95" width="30" height="45" rx="5" fill={founder.color} />
              <rect x="48" y="100" width="24" height="3" rx="1" fill="white" opacity="0.4" />

              <g transform="translate(75, 105)">
                <rect x="0" y="15" width="18" height="25" rx="2" fill="white" stroke="#ddd" strokeWidth="1" />
                <rect x="2" y="18" width="14" height="15" rx="1" fill="#FFD93D" opacity="0.7" />
                <rect x="2" y="33" width="14" height="5" rx="1" fill="white" />
                <rect x="5" y="10" width="8" height="6" rx="1" fill="white" />
                <rect x="6" y="5" width="6" height="6" rx="1" fill="white" />

                <motion.rect
                  x="4"
                  y="20"
                  width="12"
                  height="12"
                  rx="1"
                  fill="#FFD93D"
                  opacity="0.5"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                />
              </g>

              <ellipse cx="40" cy="55" rx="2" ry="1" fill="#FFD9B8" />
              <ellipse cx="80" cy="55" rx="2" ry="1" fill="#FFD9B8" />
            </svg>

            <motion.div
              className="absolute"
              style={{
                left: '70%',
                top: '60%',
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <span className="text-2xl">✨</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{
              backgroundColor: founder.color,
              color: '#1A3A5C',
            }}
            whileHover={{ scale: 1.05 }}
          >
            {founder.role}
          </motion.div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-espresso mb-2">
            {founder.name}
          </h3>

          <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-4">
            {founder.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {founder.traits.map((trait) => (
              <motion.span
                key={trait}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${founder.color}30`,
                  color: '#1A3A5C',
                }}
                whileHover={{ scale: 1.1 }}
              >
                {trait}
              </motion.span>
            ))}
          </div>

          <div className="relative pt-4 border-t border-brand-charcoal/10">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{ backgroundColor: founder.color }}
              animate={{ scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
            <p className="font-serif text-base italic text-brand-charcoal/80 pl-4 text-left">
              "{founder.quote}"
            </p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: founder.color }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full opacity-20"
        style={{ backgroundColor: founder.color }}
        filter="blur(8px)"
      />
    </motion.div>
  );
};

const TimelineStep = ({
  year,
  title,
  description,
  index,
  total,
}: {
  year: string;
  title: string;
  description: string;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10"
        style={{ backgroundColor: '#3B82F6' }}
        whileHover={{ scale: 1.2 }}
      >
        {index + 1}
      </motion.div>

      <div className="mt-4 text-center max-w-xs">
        <span className="text-brand-gold font-bold">{year}</span>
        <h4 className="font-display text-lg text-brand-cream mt-1">{title}</h4>
        <p className="text-brand-taupe text-sm mt-2">{description}</p>
      </div>

      {index < total - 1 && (
        <motion.div
          className="absolute top-6 left-1/2 w-0.5 h-24 origin-top"
          style={{ backgroundColor: '#60A5FA' }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        />
      )}
    </motion.div>
  );
};

export default function Founders() {
  const timeline = [
    { year: '2021', title: 'The Beginning', description: 'Three friends united by a shared dream' },
    { year: '2022', title: 'First Batch', description: 'The first FUDDLER brew came to life' },
    { year: '2023', title: 'Growing', description: 'Community grew, flavors multiplied' },
    { year: '2024', title: 'Today', description: 'Premium craft beer for Mumbai' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-brand-espresso to-brand-charcoal py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-blue/20 to-transparent" />

      <motion.div
        className="absolute top-20 right-10 text-6xl opacity-10"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🍻
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-6xl opacity-10"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌟
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-4xl">🍺</span>
              <span className="text-brand-gold text-sm tracking-[0.3em] uppercase font-medium">
                Meet The Founders
              </span>
              <span className="text-4xl">🌟</span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-cream mb-4">
              Three Friends, One Vision
            </h2>

            <p className="font-serif text-xl md:text-2xl text-brand-taupe italic max-w-3xl mx-auto">
              United by passion, driven by quality, inspired by Mumbai
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {founders.map((founder, index) => (
            <CartoonFounder key={founder.name} founder={founder} index={index} />
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🤝
              </motion.div>

              <h3 className="font-display text-2xl md:text-3xl text-brand-cream mb-4">
                Together, They Built FUDDLER
              </h3>

              <p className="text-brand-taupe leading-relaxed max-w-2xl mx-auto">
                Three different backgrounds, one shared passion. Ankush brings the vision, Sharvil ensures the quality, and Abhijeet connects with the community. Together, they're redefining what craft beer means in Mumbai.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-20">
            <h3 className="font-display text-3xl md:text-4xl text-center text-brand-cream mb-12">
              The Journey
            </h3>

            <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8">
              {timeline.map((step, index) => (
                <TimelineStep
                  key={step.year}
                  {...step}
                  index={index}
                  total={timeline.length}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream/10 to-transparent" />
    </section>
  );
}
