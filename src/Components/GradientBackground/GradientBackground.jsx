import { useMemo } from "react";
import "./GradientBackground.scss";

/**
 * Animated gradient mesh background for hero section.
 * Pure CSS animations — no framer-motion — so the motion-vendor chunk is NOT
 * loaded as part of the initial bundle.
 * Respects prefers-reduced-motion via CSS media query in the stylesheet.
 */
const GradientBackground = ({ className = "" }) => {
  const reduceMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const particleCount =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 8 : 20;

  // Stable positions for the component's lifetime so a parent re-render
  // (e.g. theme toggle) doesn't regenerate them and cause a jump.
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
      {/* Primary animated gradient orbs — CSS keyframes, compositor-friendly */}
      <div className="gradient-bg__orb gradient-bg__orb--1" />
      <div className="gradient-bg__orb gradient-bg__orb--2" />
      <div className="gradient-bg__orb gradient-bg__orb--3" />
      <div className="gradient-bg__orb gradient-bg__orb--4" />
      <div className="gradient-bg__orb gradient-bg__orb--5" />

      {/* Floating particles */}
      {!reduceMotion && (
        <div className="gradient-bg__particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="gradient-bg__particle"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
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
