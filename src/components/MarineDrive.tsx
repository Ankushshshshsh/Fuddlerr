import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const WaveLayer = ({ color, delay, y }: { color: string; delay: number; y: number }) => (
  <motion.div
    className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
    style={{ height: 200 + y * 20 }}
    animate={{
      x: [0, 20, 0, -20, 0],
    }}
    transition={{
      duration: 8 + delay * 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      viewBox="0 0 1440 200"
      className="absolute bottom-0 w-[200%] h-full"
      style={{ left: '-50%' }}
      preserveAspectRatio="none"
    >
      <path
        d={`M0,${120 + y * 10} C${360 + y * 5},${80 + y * 8} ${720},${150 - y * 5} ${1080},${100 + y * 8} C1260,${60 + y * 10} ${1440},${140 - y * 5} ${2000},${110 + y * 5} L2000,200 L0,200 Z`}
        fill={color}
        opacity={0.3 + y * 0.1}
      />
    </svg>
  </motion.div>
);

const CityLight = ({ x, y }: { x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-brand-gold"
    style={{ left: x, top: y }}
    animate={{ opacity: [0.3, 1, 0.3] }}
    transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
  />
);

const Couple = ({ x, flip }: { x: string; flip?: boolean }) => (
  <motion.div
    className="absolute bottom-20 z-10"
    style={{ left: x, transform: flip ? 'scaleX(-1)' : 'none' }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <div className="flex items-end gap-1">
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-brand-espresso" />
        <div className="w-4 h-10 bg-brand-blueDark rounded-b-lg" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-brand-taupe" />
        <div className="w-3 h-8 bg-brand-stone rounded-b-lg" />
      </div>
      <div className="w-6 h-10 relative ml-1">
        <div className="w-6 h-8 bg-gradient-to-b from-brand-gold to-brand-honey rounded-t-full rounded-b-sm" />
        <div className="absolute top-1 left-1 right-1 h-0.5 bg-white/40 rounded-full" />
        <span className="absolute inset-x-1 top-2 text-[4px] text-brand-espresso font-bold text-center">FUDDLER</span>
      </div>
    </div>
  </motion.div>
);

const FlyingBird = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute"
    style={{ top: `${15 + Math.random() * 20}%` }}
    initial={{ x: '-10%' }}
    animate={{ x: '110vw' }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <motion.span
      className="text-sm opacity-40"
      animate={{ rotate: [0, 10, 0, -10, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      🕊️
    </motion.span>
  </motion.div>
);

const StreetLamp = ({ x }: { x: string }) => (
  <motion.div
    className="absolute bottom-12 pointer-events-none"
    style={{ left: x }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    <div className="relative">
      <div className="w-1 h-24 bg-brand-stone" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-brand-gold/80 rounded-t-full" />
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  </motion.div>
);

const PalmTree = ({ x, flip }: { x: string; flip?: boolean }) => (
  <motion.div
    className="absolute bottom-8 pointer-events-none"
    style={{ left: x }}
    animate={{ rotate: flip ? [0, 2, 0] : [0, -2, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
      <div className="w-2 h-40 bg-gradient-to-t from-brand-stone to-brand-taupe rounded-t-full" />
      <div className="absolute -top-8 -left-8 w-20 h-12">
        <div className="absolute bottom-0 left-0 w-16 h-2 bg-brand-forest rotate-[-30deg] rounded-full origin-bottom-right" />
        <div className="absolute bottom-0 left-4 w-16 h-2 bg-brand-forestLight rotate-[-15deg] rounded-full origin-bottom-right" />
        <div className="absolute bottom-0 left-8 w-16 h-2 bg-brand-forest rotate-[0deg] rounded-full origin-bottom" />
      </div>
    </div>
  </motion.div>
);

export default function MarineDrive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const skyOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const sunScale = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1]);

  const cityLights = Array.from({ length: 30 }, (_, i) => ({
    x: `${5 + Math.random() * 90}%`,
    y: `${10 + Math.random() * 40}%`,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FCD34D 0%, #FBBF24 15%, #F59E0B 30%, #60A5FA 50%, #3B82F6 70%, #1E40AF 100%)' }}
    >
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full glow"
        style={{
          background: 'radial-gradient(circle, #FFEB3B 0%, #FFC107 50%, transparent 70%)',
          scale: sunScale,
        }}
      />

      <motion.div
        className="absolute top-8 left-0 right-0 h-48"
        style={{ opacity: skyOpacity }}
      >
        {cityLights.map((light, i) => (
          <CityLight key={i} {...light} />
        ))}
      </motion.div>

      <div className="absolute left-0 right-0 top-20 h-20 opacity-20">
        <div className="absolute bottom-0 left-[10%] w-12 h-32 bg-brand-blueDark" />
        <div className="absolute bottom-0 left-[15%] w-16 h-40 bg-brand-blueDark" />
        <div className="absolute bottom-0 left-[20%] w-10 h-28 bg-brand-blueDark" />
        <div className="absolute bottom-0 left-[75%] w-14 h-36 bg-brand-blueDark" />
        <div className="absolute bottom-0 left-[80%] w-12 h-32 bg-brand-blueDark" />
        <div className="absolute bottom-0 left-[85%] w-18 h-44 bg-brand-blueDark" />
      </div>

      <FlyingBird delay={0} />
      <FlyingBird delay={5} />
      <FlyingBird delay={10} />

      <div className="absolute left-0 right-0 pointer-events-none">
        <PalmTree x="5%" />
        <PalmTree x="15%" flip />
        <PalmTree x="85%" />
        <PalmTree x="92%" flip />
      </div>

      <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
        <StreetLamp x="20%" />
        <StreetLamp x="40%" />
        <StreetLamp x="60%" />
        <StreetLamp x="80%" />
      </div>

      <WaveLayer color="#1E40AF" delay={3} y={0} />
      <WaveLayer color="#3B82F6" delay={2} y={1} />
      <WaveLayer color="#60A5FA" delay={1} y={2} />
      <WaveLayer color="#FCD34D33" delay={0} y={3} />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-80"
        style={{
          background: 'linear-gradient(180deg, rgba(252,211,77,0.3) 0%, rgba(251,191,36,0.4) 30%, #60A5FA 100%)',
        }}
      >
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" style={{ top: '30%' }} />
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" style={{ top: '50%' }} />
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" style={{ top: '65%' }} />
      </motion.div>

      <Couple x="15%" />
      <Couple x="35%" flip />
      <Couple x="55%" />
      <Couple x="75%" flip />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <FadeIn>
          <motion.div
            className="text-center mb-8"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-6xl">🌊</span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-4 text-shadow-lg">
            Marine Drive Magic
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-serif text-2xl md:text-3xl text-brand-gold italic text-center max-w-2xl mb-8">
            Where the sea meets the city
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="glass rounded-2xl px-8 py-6 max-w-2xl text-center">
            <p className="text-white/90 text-lg leading-relaxed">
              Picture this: The sun setting over the Arabian Sea, friends gathered by the Queen's Necklace, and a cold FUDDLER in your hand. This isn't just a beer — it's a memory in the making.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              { label: 'Sunset Sessions', icon: '🌅' },
              { label: 'Friends & Conversations', icon: '👥' },
              { label: 'Perfect Evenings', icon: '✨' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-light rounded-full px-5 py-3 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>{item.icon}</span>
                <span className="text-brand-espresso font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-espresso to-transparent pointer-events-none"
      />
    </section>
  );
}
