import React, { useRef } from "react";

import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import "./Modal.scss";

const Modal = ({ children, handleClose, title, close }) => {
  const modalInnerRef = useRef();

  const handleClickBg = (e) => {
    if (modalInnerRef.current && !modalInnerRef.current.contains(e.target)) {
      handleClose();
      document.removeEventListener("click", handleClickBg);
    }
  };

  const handleClickClose = () => {
    handleClose();
    document.removeEventListener("click", handleClickBg);
  };

  document.addEventListener("click", handleClickBg);

  const showHeader = title || close;

  return (
    <div className="modal">
      <div ref={modalInnerRef} className="modal__inner">
        {showHeader && (
          <div className="modal__header">
            {title && <div className="modal__title">Добавить расход</div>}
            {close && (
              <div className="modal__close" onClick={handleClickClose}>
                <CloseIcon />
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
