import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { ConfirmModalProps } from './types/interfaces';
import useModalOptions from '5_features/modal/hooks/useModalOptions';

const ConfirmModal = ({
  isShow,
  setIsShow,
  message,
  confirmHandler,
}: ConfirmModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { closeModalHandler, animationClose, listClass } = useModalOptions({
    isShow,
    setIsShow,
    ref,
    isConfirm: true,
    confirmHandler,
  });
  return createPortal(
    <div
      ref={ref}
      className={listClass.join(' ')}
      onClick={closeModalHandler}
      onAnimationEnd={animationClose}
    >
      <div className="modal__content modal__content_confirm">
        <span className="cross-close"></span>
        <h2 className="modal__question">{message}</h2>
        <div className="modal__buttons">
          <button className="button button_confirm" data-ok>
            Ok
          </button>
          <button className="button button_cancel">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('root') as Element
  );
};

export default ConfirmModal;