import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * useFocusTrap — accessibility helper for modal dialogs and drawers.
 *
 * When `active` is true it:
 *   1. Moves focus to the first focusable element inside `containerRef`
 *      (or to `initialFocusRef` if provided).
 *   2. Traps Tab / Shift+Tab so focus cycles within the container — required
 *      to honor `aria-modal="true"`.
 *   3. Calls `onClose` when Escape is pressed.
 *   4. Locks body scroll while active.
 *   5. Restores focus to whatever element was focused before activation
 *      (the trigger) when it deactivates.
 *
 * Every one of these behaviors was previously hand-rolled and duplicated in
 * Navbar, ProjectModal, and Experience; this centralizes them.
 *
 * @param {boolean} active            Whether the trap is engaged.
 * @param {object}  options
 * @param {React.RefObject} options.containerRef     Element to trap focus within.
 * @param {() => void}      options.onClose          Called on Escape.
 * @param {React.RefObject} [options.initialFocusRef] Element to focus first.
 * @param {boolean}         [options.lockScroll=true] Lock body scroll while active.
 */
export function useFocusTrap(
  active,
  { containerRef, onClose, initialFocusRef, lockScroll = true } = {},
) {
  // Remember the element focused before the trap engaged so we can restore it.
  const previouslyFocused = useRef(null);
  // Keep the latest onClose without re-running the effect on every render.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!active) return;

    const container = containerRef?.current;
    if (!container) return;

    previouslyFocused.current = document.activeElement;

    const getFocusable = () =>
      Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR));

    // Move focus in: prefer the explicit initial target, else the first
    // focusable element in the container.
    (initialFocusRef?.current || getFocusable()[0])?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current?.();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // Shift+Tab off the first element wraps to the last; Tab off the last
      // wraps back to the first.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (lockScroll) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (lockScroll) {
        document.body.style.overflow = "";
      }

      // Restore focus to the trigger that opened the dialog.
      previouslyFocused.current?.focus();
    };
    // initialFocusRef/containerRef are stable refs; onClose is read via ref.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, lockScroll]);
}
