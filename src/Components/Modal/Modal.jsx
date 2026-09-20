import { useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import { useModal } from "../../context/modal-context";
import "./Modal.scss";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModal();

  // Close on Escape. Listen on document because the modal wrapper is not
  // focusable, so a JSX onKeyDown handler would never fire on its own.
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModalHandler();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal, closeModalHandler]);

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <div className="modal" role="dialog" aria-modal="true">
            <div id="backdrop" onClick={closeModalHandler} aria-hidden="true"></div>
            <Card className={className}>{children}</Card>
          </div>,
          document.querySelector("#overlays")
        )}
    </>
  );
};

export default Modal;
