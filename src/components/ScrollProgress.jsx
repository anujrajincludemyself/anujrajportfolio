import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9990]"
      style={{ scaleX, background: 'linear-gradient(to right, #00ffff, #0080ff)' }}
    />
  );
};

export default ScrollProgress;
