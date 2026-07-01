import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-espresso overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-brand-gold/20 rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="relative w-32 h-48 md:w-40 md:h-56"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-white/90 rounded-b-lg overflow-hidden shadow-2xl">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-gold via-brand-honey to-white/50"
                initial={{ height: '0%' }}
                animate={{ height: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-6"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <div className="w-full h-full beer-foam" />
                </motion.div>

                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/50 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      bottom: `${Math.min(progress - 20 + Math.random() * 10, 60)}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-brand-taupe/80 rounded-t-lg" />

            <motion.div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-3 h-24 liquid-gradient rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: progress < 100 ? [0, 1, 0] : 0,
                opacity: progress < 100 ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ transformOrigin: 'bottom' }}
            />
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="font-display text-3xl md:text-4xl font-bold text-brand-cream mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FUDDLER
            </motion.div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-32 h-1 bg-brand-blueDark rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-honey rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="text-brand-gold text-sm font-medium w-10">{progress}%</span>
            </div>

            <motion.p
              className="text-brand-stone text-sm tracking-wider uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Pouring the experience...
            </motion.p>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-brand-gold"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
