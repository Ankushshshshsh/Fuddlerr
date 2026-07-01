import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const beers = [
  {
    id: 'mumbai-morning',
    name: 'Mumbai Morning',
    tagline: 'Mango & Wheat Ale',
    abv: '4.5%',
    description: 'Inspired by the golden hues of a Mumbai sunrise. Light, refreshing, with a gentle tropical embrace.',
    color1: '#FEF3C7',
    color2: '#FCD34D',
    colorAccent: '#FBBF24',
    ingredients: ['🥭', '🌿', '🍊', '🍯'],
    flavors: ['Mango', 'Wheat', 'Citrus', 'Honey'],
    foodPairings: ['Street Food', 'Spicy Curry', 'Coastal Cuisine'],
    story: 'Every sip is a walk through Mumbai at dawn.',
    rotation: 0,
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon',
    tagline: 'Crisp Blueberry Lager',
    abv: '5.2%',
    description: 'Clean, crisp, and refreshing. Inspired by cool ocean breezes and midnight sky.',
    color1: '#DBEAFE',
    color2: '#60A5FA',
    colorAccent: '#3B82F6',
    ingredients: ['🫐', '🌊', '❄️', '🌿'],
    flavors: ['Blueberry', 'Lime', 'Mint', 'Sea Salt'],
    foodPairings: ['Grilled Seafood', 'Salads', 'Cheese'],
    story: 'Where ocean meets sky on a summer night.',
    rotation: 72,
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Honey & Citrus Wheat',
    abv: '6.0%',
    description: 'Warm, golden, and sun-kissed. A tribute to Mumbai\'s beautiful sunset hours.',
    color1: '#FEF9C3',
    color2: '#FCD34D',
    colorAccent: '#F59E0B',
    ingredients: ['🍯', '🌇', '🍊', '☀️'],
    flavors: ['Honey', 'Orange Zest', 'Wheat', 'Ginger'],
    foodPairings: ['Seafood Curry', 'Tandoori', 'Cheese'],
    story: 'The taste of magic hour by the sea.',
    rotation: 144,
  },
  {
    id: 'tropical-bay',
    name: 'Tropical Bay',
    tagline: 'Pineapple & Coconut Ale',
    abv: '5.5%',
    description: 'Paradise in a glass. Inspired by Mumbai\'s vibrant tropical spirit.',
    color1: '#FFEDD5',
    color2: '#FDBA74',
    colorAccent: '#FB923C',
    ingredients: ['🍍', '🥥', '🌴', '🌺'],
    flavors: ['Pineapple', 'Coconut', 'Citrus', 'Vanilla'],
    foodPairings: ['Thai', 'Seafood', 'Light Desserts'],
    story: 'A tropical escape in every sip.',
    rotation: 216,
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    tagline: 'Bold IPA',
    abv: '6.5%',
    description: 'High-voltage IPA with bold hop character. Bright, bracing, and unforgettable.',
    color1: '#BFDBFE',
    color2: '#3B82F6',
    colorAccent: '#1D4ED8',
    ingredients: ['⚡', '🌿', '🍇', '🍸'],
    flavors: ['Citrus Hops', 'Pine', 'Grapefruit', 'Tropical'],
    foodPairings: ['Spicy Food', 'BBQ', 'Bold Cheeses'],
    story: 'The energy of Mumbai nights in every glass.',
    rotation: 288,
  },
];

const BeerCan3D = ({ beer, isHovered }: { beer: typeof beers[0]; isHovered: boolean }) => {
  return (
    <motion.div
      className="relative perspective"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative preserve-3d can-shadow"
        animate={{ rotateY: isHovered ? [beer.rotation, beer.rotation + 360] : beer.rotation }}
        transition={{ duration: 2, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-32 h-48 md:w-40 md:h-56 lg:w-48 lg:h-64">
          <div
            className="absolute inset-0 rounded-t-3xl rounded-b-lg overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${beer.color1} 0%, ${beer.color2} 100%)`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-brand-espresso/30 to-transparent rounded-b-lg" />

            <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
              <motion.div
                className="font-display font-bold text-brand-espresso text-lg md:text-xl"
              >
                FUDDLER
              </motion.div>
              <div className="w-8 h-px bg-brand-espresso/30 my-1" />
              <div className="text-brand-espresso/80 text-[8px] md:text-[10px] font-medium tracking-wider uppercase">
                {beer.name}
              </div>
              <div className="text-brand-espresso/60 text-[8px] mt-2">{beer.abv}</div>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-brand-taupe/80 rounded-t-lg" />
        </div>
      </motion.div>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-brand-espresso/20 rounded-full blur-lg" />

      {isHovered && (
        <motion.div
          className="absolute -inset-4 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle, ${beer.colorAccent}33 0%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
};

const FloatingIngredient = ({ emoji, delay }: { emoji: string; delay: number }) => (
  <motion.div
    className="absolute text-2xl pointer-events-none"
    animate={{
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {emoji}
  </motion.div>
);

const FlavorCard = ({ flavor, index }: { flavor: string; index: number }) => (
  <motion.div
    className="glass rounded-full px-4 py-2 text-sm"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.1 + index * 0.1 }}
    whileHover={{
      scale: 1.1,
      boxShadow: '0 0 20px rgba(251,191,36,0.4)'
    }}
  >
    {flavor}
  </motion.div>
);

export default function ProductShowcase() {
  const [activeBeer, setActiveBeer] = useState(beers[0]);
  const [hoveredBeer, setHoveredBeer] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-brand-espresso via-brand-blueDark to-brand-espresso py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FFF9E6 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-brand-gold text-sm tracking-wider uppercase mb-6"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-lg">🍺</span>
            Our Collection
          </motion.span>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-cream mb-4">
            Explore Our Brews
          </h2>

          <p className="font-serif text-xl md:text-2xl text-brand-taupe italic max-w-2xl mx-auto">
            Each beer tells a story. Choose your adventure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div
              className="relative can-shadow"
              whileHover={{ scale: 1.05 }}
              layoutId={`can-${activeBeer.id}`}
            >
              <BeerCan3D beer={activeBeer} isHovered={hoveredBeer === activeBeer.id} />

              {activeBeer.ingredients.map((ing, i) => (
                <FloatingIngredient
                  key={i}
                  emoji={ing}
                  delay={i * 0.5}
                />
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBeer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-md"
              >
                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs tracking-wider uppercase text-brand-gold">{activeBeer.abv}</span>
                    <span className="text-brand-stone">·</span>
                    <span className="text-xs tracking-wider uppercase text-brand-taupe">Premium Craft</span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl text-brand-cream mb-1">
                    {activeBeer.name}
                  </h3>

                  <p className="text-brand-gold text-sm md:text-base italic mb-4">
                    {activeBeer.tagline}
                  </p>

                  <p className="text-brand-taupe leading-relaxed mb-6">
                    {activeBeer.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-brand-stone text-xs tracking-wider uppercase mb-3">Flavor Profile</p>
                    <div className="flex flex-wrap gap-2">
                      {activeBeer.flavors.map((flavor, i) => (
                        <FlavorCard key={flavor} flavor={flavor} index={i} />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-brand-stone text-xs tracking-wider uppercase mb-3">Food Pairings</p>
                    <div className="flex flex-wrap gap-2">
                      {activeBeer.foodPairings.map((food) => (
                        <span
                          key={food}
                          className="px-3 py-1 rounded-full border border-brand-stone/30 text-brand-taupe text-sm"
                        >
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-brand-stone/20 pt-4">
                    <p className="text-brand-gold/80 italic text-sm">
                      "{activeBeer.story}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <p className="text-brand-stone text-xs tracking-wider uppercase mb-4 text-center lg:text-left">
              Select a Brew
            </p>

            {beers.map((beer) => (
              <motion.button
                key={beer.id}
                onClick={() => setActiveBeer(beer)}
                onMouseEnter={() => setHoveredBeer(beer.id)}
                onMouseLeave={() => setHoveredBeer(null)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeBeer.id === beer.id
                    ? 'glass bg-white/10 border-brand-gold/30'
                    : 'border border-transparent hover:border-brand-stone/30'
                }`}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${beer.color1} 0%, ${beer.color2} 100%)`,
                    }}
                    animate={{ rotate: activeBeer.id === beer.id ? 360 : 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {beer.ingredients[0]}
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-brand-cream font-display font-semibold text-lg">
                      {beer.name}
                    </h4>
                    <p className="text-brand-taupe text-sm">{beer.tagline}</p>
                  </div>

                  <motion.div
                    animate={{ x: activeBeer.id === beer.id ? 5 : 0 }}
                  >
                    <ChevronRight className={`w-5 h-5 transition-colors ${
                      activeBeer.id === beer.id ? 'text-brand-gold' : 'text-brand-stone'
                    }`} />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream/10 to-transparent pointer-events-none" />
    </section>
  );
}
