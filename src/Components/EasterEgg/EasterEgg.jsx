import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

/**
 * EasterEgg - Konami code reveals a fun animation
 */
const EasterEgg = () => {
  // Rolling buffer of recent keypresses. It never needs to render, so it lives
  // in a ref — using state here would re-render the component on every keydown.
  const inputSequence = useRef([]);
  const [isActivated, setIsActivated] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleKeyDown = useCallback((event) => {
    const newSequence = [...inputSequence.current, event.code].slice(
      -KONAMI_CODE.length,
    );
    inputSequence.current = newSequence;

    // Check if the sequence matches
    if (
      newSequence.length === KONAMI_CODE.length &&
      newSequence.every((key, i) => key === KONAMI_CODE[i])
    ) {
      setIsActivated(true);

      // Generate confetti
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        size: Math.random() * 10 + 5,
      }));
      setConfetti(newConfetti);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsActivated(false);
        setConfetti([]);
      }, 4000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isActivated && (
        <>
          {/* Confetti */}
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: piece.x,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: Math.random() * 720 - 360,
                opacity: 0,
              }}
              transition={{
                duration: 3,
                delay: piece.delay,
                ease: "easeIn",
              }}
              style={{
                position: "fixed",
                width: piece.size,
                height: piece.size,
                background: piece.color,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                zIndex: 10000,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Message */}
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10001,
              padding: "2rem 4rem",
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              borderRadius: "20px",
              boxShadow: "0 25px 50px hsla(var(--primary-hue), 70%, 50%, 0.5)",
              textAlign: "center",
            }}
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              style={{ fontSize: "4rem", marginBottom: "1rem" }}
            >
              🎉
            </motion.div>
            <p
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              You found the secret!
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.4rem",
                margin: "1rem 0 0",
              }}
            >
              Thanks for exploring! 🚀
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
