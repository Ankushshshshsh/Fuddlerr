import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const quickLinks = [
  { name: 'Our Beers', href: '#' },
  { name: 'Taproom', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Our Story', href: '#' },
  { name: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-espresso py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FFF9E6 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <FadeIn>
              <motion.div
                className="mb-6"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <h3 className="font-display text-4xl md:text-5xl font-bold text-brand-cream">
                  FUDD<span className="text-brand-gold">L</span>ER
                </h3>
                <p className="text-brand-taupe text-sm tracking-[0.35em] uppercase mt-2">
                  Crafted With Passion
                </p>
              </motion.div>

              <p className="text-brand-stone leading-relaxed max-w-md mb-6">
                Mumbai's premier craft beer brand. Three friends united by passion, driven by quality, inspired by the city we love.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </motion.a>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <h4 className="font-display text-lg text-brand-cream mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-brand-taupe hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-brand-gold/50 mr-1">→</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.3}>
              <h4 className="font-display text-lg text-brand-cream mb-4">Visit Us</h4>
              <ul className="space-y-3 text-brand-taupe">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                  <span>Mathuradas Mill Compound, Lower Parel, Mumbai 400013</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>+91 22 4567 8900</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span>hello@fuddler.beer</span>
                </li>
              </ul>

              <motion.div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-brand-gold">🍺</span>
                <span className="text-brand-taupe text-sm">Taproom Open Daily</span>
              </motion.div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="border-t border-brand-stone/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap justify-center gap-6 text-brand-stone text-sm">
                <span>Craft Beer</span>
                <span className="hidden md:block">·</span>
                <span>Mumbai Made</span>
                <span className="hidden md:block">·</span>
                <span>Premium Quality</span>
                <span className="hidden md:block">·</span>
                <span>Community First</span>
              </div>

              <div className="text-center md:text-right">
                <p className="text-brand-stone/60 text-xs">
                  {new Date().getFullYear()} FUDDLER. All rights reserved.
                </p>
                <p className="text-brand-stone/40 text-xs mt-1">
                  Please drink responsibly.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="font-serif text-lg md:text-xl text-brand-taupe/60 italic"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "Here's to nights we won't remember and friends we'll never forget."
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
      >
        <motion.div
          className="h-full w-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </footer>
  );
}
