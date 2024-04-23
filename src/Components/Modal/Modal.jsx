import ReactDOM from "react-dom";
import Card from "../Card/Card";
import { useModal } from "../../context/modal-context";
import "./Modal.scss";

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModal();

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <div className="modal">
            <div id="backdrop" onClick={closeModalHandler}></div>
            <Card className={className}>{children}</Card>
          </div>,
          document.querySelector("#overlays")
        )}
    </>
  );
};

export default Modal;
