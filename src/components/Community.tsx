import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, Music, Palette, Wine, ChefHat, Instagram } from 'lucide-react';

const events = [
  {
    id: 'brewery-tour',
    title: 'Brewery Tours',
    description: 'Step behind the scenes and discover how we craft our beers. Every Saturday, experience the magic firsthand.',
    icon: Wine,
    color: '#FCD34D',
    illustration: '🍺',
    schedule: 'Every Saturday',
    location: 'FUDDLER Taproom',
  },
  {
    id: 'music-nights',
    title: 'Music Nights',
    description: 'Live indie artists, acoustic sessions, and vinyl nights. Where Mumbai\'s music scene meets craft beer.',
    icon: Music,
    color: '#60A5FA',
    illustration: '🎸',
    schedule: 'Fridays & Saturdays',
    location: 'FUDDLER Taproom',
  },
  {
    id: 'art-workshops',
    title: 'Art Workshops',
    description: 'Creative sessions with local artists. Paint, sketch, and create while enjoying your favorite brew.',
    icon: Palette,
    color: '#34D399',
    illustration: '🎨',
    schedule: 'Monthly',
    location: 'Community Gallery',
  },
  {
    id: 'beer-tasting',
    title: 'Beer Tastings',
    description: 'Guided tastings by our brewers. Learn flavor profiles, pairings, and brewing techniques.',
    icon: Wine,
    color: '#FBBF24',
    illustration: '🍻',
    schedule: 'Every Thursday',
    location: 'The Reserve Room',
  },
  {
    id: 'food-festival',
    title: 'Food Festivals',
    description: 'Collaborative dinners with Mumbai\'s top chefs. Street food meets craft beer in the perfect pairing.',
    icon: ChefHat,
    color: '#FB923C',
    illustration: '🍽️',
    schedule: 'Monthly',
    location: 'FUDDLER Gardens',
  },
  {
    id: 'community-gatherings',
    title: 'Community Gatherings',
    description: 'Movie screenings, trivia nights, and spontaneous hangouts. This is your space.',
    icon: Users,
    color: '#93C5FD',
    illustration: '🎉',
    schedule: 'Weekly',
    location: 'FUDDLER Common Room',
  },
];

const testimonial = [
  {
    text: "FUDDLER isn't just a brewery. It's where I met my best friends.",
    author: "Priya S.",
    location: "Mumbai",
    avatar: "👩‍💼",
  },
  {
    text: "The best craft beer in Mumbai, hands down. And the vibe is unmatched.",
    author: "Rahul M.",
    location: "Bandra",
    avatar: "👨‍🎨",
  },
  {
    text: "Ankush, Sharvil, and Abhijeet have created something truly special here.",
    author: "Sofia L.",
    location: "Traveler",
    avatar: "👩‍✈️",
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border-2 border-transparent hover:border-brand-gold/30 transition-all duration-500"
        style={{ backgroundColor: `${event.color}15` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        <motion.div
          className="absolute -top-10 -right-10 text-8xl opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          animate={{ rotate: isHovered ? 20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {event.illustration}
        </motion.div>

        <div className="relative p-6 md:p-8">
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: event.color }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7 text-brand-espresso" />
          </motion.div>

          <h3 className="font-display text-xl md:text-2xl text-brand-cream mb-2">
            {event.title}
          </h3>

          <p className="text-brand-taupe leading-relaxed mb-4">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
              <Calendar className="w-3 h-3 text-brand-gold" />
              {event.schedule}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
              <MapPin className="w-3 h-3 text-brand-blue" />
              {event.location}
            </span>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: event.color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const TestimonialCard = ({ test, index }: { test: typeof testimonial[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="glass rounded-2xl p-6 relative overflow-hidden">
        <motion.div
          className="absolute top-4 right-4 text-4xl opacity-20"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          "
        </motion.div>

        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{ backgroundColor: '#FCD34D40' }}
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          >
            {test.avatar}
          </motion.div>

          <div>
            <p className="font-display font-semibold text-brand-cream">{test.author}</p>
            <p className="text-brand-taupe text-sm">{test.location}</p>
          </div>
        </div>

        <p className="font-serif text-lg italic text-brand-taupe">
          "{test.text}"
        </p>

        <motion.div
          className="flex gap-1 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-brand-gold"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              ★
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const FloatingElement = ({ emoji, x, y, delay }: { emoji: string; x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute pointer-events-none opacity-20"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    <span className="text-4xl">{emoji}</span>
  </motion.div>
);

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-brand-blueDark via-brand-espresso to-brand-espresso py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FFF9E6 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <FloatingElement emoji="🍻" x="5%" y="20%" delay={0} />
      <FloatingElement emoji="🎵" x="90%" y="15%" delay={1} />
      <FloatingElement emoji="🎨" x="85%" y="40%" delay={2} />
      <FloatingElement emoji="📸" x="10%" y="60%" delay={3} />
      <FloatingElement emoji="🎉" x="95%" y="70%" delay={4} />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-brand-gold" />
            <span className="text-brand-gold text-sm tracking-[0.3em] uppercase font-medium">
              Community & Events
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-brand-gold" />
          </motion.div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-cream mb-4">
            Join the Movement
          </h2>

          <p className="font-serif text-xl md:text-2xl text-brand-taupe italic max-w-3xl mx-auto">
            FUDDLER isn't just a brand. It's a community of creators, dreamers, and beer lovers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl text-brand-cream mb-8">
            What People Are Saying
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonial.map((test, index) => (
            <TestimonialCard key={test.author} test={test} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-5xl mb-4"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏙️
              </motion.div>

              <h4 className="font-display text-2xl md:text-3xl text-brand-cream mb-4">
                Become Part of the Story
              </h4>

              <p className="text-brand-taupe leading-relaxed mb-6 max-w-2xl mx-auto">
                Follow us @fuddler.beer for event updates, behind-the-scenes content, and to connect with fellow beer lovers across Mumbai.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-honey text-brand-espresso font-semibold tracking-wide shadow-lg flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full glass font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  View All Events
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream/10 to-transparent pointer-events-none" />
    </section>
  );
}
