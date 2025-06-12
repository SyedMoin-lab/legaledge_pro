// /home/ubuntu/app/legaledge_pro/src/utils/animations.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Fade in animation for elements
export const FadeIn = ({ children, delay = 0, duration = 0.5, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation from bottom
export const FadeInUp = ({ children, delay = 0, duration = 0.5, distance = 50, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation from left
export const FadeInLeft = ({ children, delay = 0, duration = 0.5, distance = 50, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation from right
export const FadeInRight = ({ children, delay = 0, duration = 0.5, distance = 50, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale animation
export const ScaleIn = ({ children, delay = 0, duration = 0.5, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scroll triggered animations
export const ScrollReveal = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered list animations
export const StaggeredList = ({ children, staggerDelay = 0.1, ...props }) => {
  return (
    <motion.div {...props}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Pulse animation for attention
export const Pulse = ({ children, ...props }) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Page transition for loading animation
export const PageTransition = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Loading spinner animation
export const LoadingSpinner = ({ size = 40, color = "#1B365D", ...props }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `3px solid rgba(0, 0, 0, 0.1)`,
        borderTopColor: color,
        display: 'inline-block',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      {...props}
    />
  );
};

export default {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  ScrollReveal,
  StaggeredList,
  Pulse,
  PageTransition,
  LoadingSpinner
};
