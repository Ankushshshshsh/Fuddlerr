import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const FloatingIngredient = ({ emoji, delay, x, y, size }: { emoji: string; delay: number; x: string; y: string; size: string }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left: x, top: y, fontSize: size }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ duration: 1, delay }}
  >
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
    >
      {emoji}
    </motion.div>
  </motion.div>
);

const Bubble = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/30 border border-white/40"
    style={{
      left: `${x}%`,
      bottom: `${y}%`,
      width: size,
      height: size,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.8],
      y: [0, -200, -400],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

const MumbaiTaxi = () => (
  <motion.div
    className="absolute bottom-24 right-0 z-20"
    initial={{ x: '100vw' }}
    animate={{ x: '-120%' }}
    transition={{ duration: 15, delay: 2, ease: "linear", repeat: Infinity }}
  >
    <div className="relative">
      <svg width="180" height="80" viewBox="0 0 180 80" className="drop-shadow-lg">
        <rect x="20" y="30" width="140" height="35" rx="5" fill="#FCD34D" />
        <rect x="25" y="35" width="40" height="20" rx="3" fill="#93C5FD" opacity="0.7" />
        <rect x="70" y="35" width="40" height="20" rx="3" fill="#93C5FD" opacity="0.7" />
        <rect x="115" y="35" width="35" height="20" rx="3" fill="#93C5FD" opacity="0.7" />
        <rect x="10" y="40" width="10" height="15" fill="#1A3A5C" />
        <rect x="160" y="40" width="10" height="10" fill="#FFD93D" rx="2" />
        <text x="30" y="70" fill="#1A3A5C" fontSize="10" fontWeight="bold">TAXI</text>
        <circle cx="40" cy="68" r="10" fill="#1E40AF" />
        <circle cx="40" cy="68" r="6" fill="#3B82F6" />
        <circle cx="140" cy="68" r="10" fill="#1E40AF" />
        <circle cx="140" cy="68" r="6" fill="#3B82F6" />
        <rect x="70" y="25" width="30" height="3" fill="#1A3A5C" rx="1" />
      </svg>
    </div>
  </motion.div>
);

const Flamingo = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute top-20 z-10"
    style={{ left: '-10%' }}
    animate={{
      x: ['0vw', '110vw'],
      y: [0, -30, 0, -20, 0],
    }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
      <span className="text-4xl opacity-70">🦩</span>
    </motion.div>
  </motion.div>
);

const BeerCan3D = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative perspective"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <motion.div
        className="relative can-shadow preserve-3d"
        animate={{ rotateY: rotation }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-40 h-56 md:w-48 md:h-72 lg:w-56 lg:h-80">
          <div className="absolute inset-0 bg-gradient-to-b from-pastel-yellow via-brand-gold to-brand-honey rounded-t-3xl rounded-b-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-brand-espresso/30 to-transparent rounded-b-lg" />

            <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
              <motion.div
                className="font-display font-bold text-brand-espresso"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
              >
                FUDDLER
              </motion.div>
              <div className="text-brand-espresso/70 text-xs mt-1">CRAFT BEER</div>
              <div className="mt-4 w-12 h-px bg-brand-espresso/30" />
              <div className="mt-2 text-brand-espresso/60 text-[10px]">MUMBAI × BEYOND</div>
            </div>

            <div className="absolute top-6 left-0 right-0 flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-espresso/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-espresso/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-espresso/20" />
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-brand-taupe rounded-t-lg" />
        </div>
      </motion.div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-brand-espresso/30 rounded-full blur-xl" />
    </motion.div>
  );
};

const PouringBeer = () => (
  <motion.div
    className="absolute right-10 md:right-20 bottom-40 z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.5 }}
  >
    <div className="relative">
      <div className="w-16 h-40 relative">
        <motion.div
          className="absolute inset-0 bg-white/90 rounded-b-lg overflow-hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 0.3, 0.7, 1] }}
          transition={{ duration: 2, delay: 3, ease: "easeOut" }}
          style={{ transformOrigin: 'bottom' }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-brand-gold/60 via-brand-honey/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-brand-gold/80 rounded-b-lg" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-32 liquid-gradient rounded-full"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </div>
  </motion.div>
);

const Cloud = ({ style, delay }: { style: React.CSSProperties; delay: number }) => (
  <motion.div
    className="absolute opacity-60"
    style={style}
    animate={{ x: [0, 30, 0] }}
    transition={{ duration: 20, delay, repeat: Infinity, ease: "linear" }}
  >
    <div className="flex">
      <div className="w-16 h-8 bg-white/40 rounded-full" />
      <div className="w-12 h-10 bg-white/50 rounded-full -ml-4 -mt-2" />
      <div className="w-14 h-8 bg-white/40 rounded-full -ml-4" />
    </div>
  </motion.div>
);

const ArtDecoBuilding = ({ x, height }: { x: string; height: number }) => (
  <motion.div
    className="absolute bottom-0"
    style={{ left: x, height }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.4, y: 0 }}
    transition={{ duration: 1, delay: 1.5 }}
  >
    <div className="relative h-full w-12 md:w-16">
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-brand-blueDark to-brand-charcoal rounded-t-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-12 bg-brand-blueDark rounded-t-full" />
      <div className="absolute top-12 left-1 right-1 flex flex-col gap-1">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-full h-2 flex gap-0.5">
            <div className="flex-1 bg-brand-gold/30 rounded-sm" />
            <div className="flex-1 bg-brand-gold/15 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ingredients = [
    { emoji: '🌿', x: '5%', y: '30%', size: '2rem', delay: 0.2 },
    { emoji: '🍋', x: '90%', y: '25%', size: '2.5rem', delay: 0.4 },
    { emoji: '🌾', x: '15%', y: '60%', size: '2rem', delay: 0.6 },
    { emoji: '🌶️', x: '85%', y: '50%', size: '1.8rem', delay: 0.8 },
    { emoji: '🍊', x: '75%', y: '70%', size: '2.2rem', delay: 1.0 },
    { emoji: '🌿', x: '25%', y: '80%', size: '1.5rem', delay: 1.2 },
    { emoji: '🍃', x: '92%', y: '40%', size: '1.8rem', delay: 1.4 },
    { emoji: '🍋', x: '8%', y: '55%', size: '1.6rem', delay: 1.6 },
  ];

  const buildings = [
    { x: '5%', height: 150 },
    { x: '12%', height: 180 },
    { x: '80%', height: 160 },
    { x: '88%', height: 190 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-espresso via-brand-charcoal to-brand-navy"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-blue/5" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-brand-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y: y1, opacity }} className="absolute top-10 left-0 right-0 pointer-events-none">
        <Cloud style={{ top: '5%', left: '10%' }} delay={0} />
        <Cloud style={{ top: '8%', left: '70%' }} delay={5} />
        <Cloud style={{ top: '15%', left: '40%' }} delay={10} />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-brand-espresso to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-4 pointer-events-none">
        {buildings.map((b, i) => (
          <ArtDecoBuilding key={i} x={b.x} height={b.height} />
        ))}
      </div>

      <MumbaiTaxi />

      <Flamingo delay={0} />
      <Flamingo delay={15} />

      <motion.div
        className="absolute top-20 left-10 z-10"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-3xl md:text-4xl opacity-60">🕊️</span>
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 z-10"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-2xl md:text-3xl opacity-50">🕊️</span>
      </motion.div>

      {ingredients.map((ing, i) => (
        <FloatingIngredient key={i} {...ing} />
      ))}

      <div className="absolute left-1/2 bottom-40 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Bubble key={i} x={45 + Math.random() * 10} y={Math.random() * 30} size={4 + Math.random() * 8} delay={i * 0.5} />
        ))}
      </div>

      <PouringBeer />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-brand-gold text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-sunshine animate-pulse" />
            Mumbai's Premier Craft Beer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight mb-6"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <span className="text-brand-cream inline-block">FUDD</span>
          <motion.span
            className="gradient-text-vibrant inline-block"
            animate={{
              textShadow: [
                '0 0 20px rgba(251, 191, 36, 0.5)',
                '0 0 40px rgba(96, 165, 250, 0.6)',
                '0 0 20px rgba(251, 191, 36, 0.5)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            L
          </motion.span>
          <span className="text-brand-cream inline-block">ER</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-brand-gold/60" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            🍻
          </motion.div>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-brand-gold/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-taupe italic tracking-wide mb-12"
        >
          Crafted With Passion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-honey text-brand-espresso font-semibold tracking-wide shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/40 transition-shadow"
          >
            Explore Our Beers
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass flex items-center gap-2 text-brand-cream font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            <Play className="w-5 h-5" />
            Watch Our Story
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-brand-stone tracking-wider"
        >
          {[
            { label: 'Craft Beer', icon: '🍺' },
            { label: 'Mumbai Made', icon: '🏙️' },
            { label: 'Premium Quality', icon: '⭐' },
            { label: 'Community First', icon: '🤝' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs text-brand-stone tracking-wider uppercase">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 text-brand-gold animate-bounce" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream/10 to-transparent pointer-events-none" />
    </section>
  );
}
