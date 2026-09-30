import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import "./GradientBackground.scss";

/**
 * Animated gradient mesh background for hero section.
 * Creates depth and visual interest without being distracting.
 * Respects prefers-reduced-motion: orbs stay static for users who opt out.
 */
const GradientBackground = ({ className = "" }) => {
  const reduceMotion = useReducedMotion();

  // No looping drift when the user prefers reduced motion.
  const orb = (animate, duration) =>
    reduceMotion
      ? {}
      : {
          animate,
          transition: { duration, repeat: Infinity, ease: "easeInOut" },
        };

  // Fewer floating particles on small screens — each is an infinitely
  // animating layer, and phones have far less GPU fill-rate headroom than
  // desktops. Positions are stable for the component's lifetime (memoized) so a
  // parent re-render (e.g. theme toggle) doesn't regenerate them and cause a jump.
  const particleCount =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 8 : 20;
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      })),
    [particleCount],
  );

  return (
    <div className={`gradient-bg ${className}`}>
      {/* Primary animated gradient orbs */}
      <motion.div
        className="gradient-bg__orb gradient-bg__orb--1"
        {...orb(
          { x: [0, 50, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] },
          18,
        )}
      />
      <motion.div
        className="gradient-bg__orb gradient-bg__orb--2"
        {...orb(
          { x: [0, -60, 40, 0], y: [0, 30, -50, 0], scale: [1, 0.85, 1.15, 1] },
          22,
        )}
      />
      <motion.div
        className="gradient-bg__orb gradient-bg__orb--3"
        {...orb(
          { x: [0, 70, -50, 0], y: [0, -30, 40, 0], scale: [1, 1.2, 0.85, 1] },
          15,
        )}
      />

      {/* Accent orbs for more depth */}
      <motion.div
        className="gradient-bg__orb gradient-bg__orb--4"
        {...orb(
          { x: [0, -40, 60, 0], y: [0, 50, -30, 0], scale: [1, 1.1, 0.95, 1] },
          20,
        )}
      />
      <motion.div
        className="gradient-bg__orb gradient-bg__orb--5"
        {...orb(
          { x: [0, 30, -40, 0], y: [0, -60, 40, 0], scale: [1, 0.9, 1.1, 1] },
          25,
        )}
      />

      {/* Floating particles */}
      {!reduceMotion && (
        <div className="gradient-bg__particles">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="gradient-bg__particle"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Shimmer effect */}
      <div className="gradient-bg__shimmer" />

      {/* Grid pattern overlay */}
      <div className="gradient-bg__grid" />

      {/* Noise texture */}
      <div className="gradient-bg__noise" />
    </div>
  );
};

export default GradientBackground;
