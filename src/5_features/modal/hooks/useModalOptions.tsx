import { useEffect, useState, MouseEvent } from 'react';
import { UseModalOptionsProps } from '../types/interfaces';
import { MODAL_CLASS_DESTROY, TAG_NAME_BUTTON, TAG_NAME_SPAN } from '../utils/constants';
import { selectClassesModal } from '../utils/helpers';

const useModalOptions = ({
  isShow,
  setIsShow,
  ref,
  isConfirm,
  confirmHandler,
}: UseModalOptionsProps) => {
  const [listClass, setListClass] = useState(['modal', 'hide']);
  const [isFirstRenderFlag, setIsFirstRenderFlag] = useState(false);

  const closeModalHandler = (event: MouseEvent<HTMLElement>) => {
    const node = event.target as HTMLElement;

    if (node.dataset.notclose) return;

    if (
      node === ref.current ||
      node.tagName === TAG_NAME_SPAN ||
      node.tagName === TAG_NAME_BUTTON
    ) {
      if (isConfirm && confirmHandler) {
        const isConfirmed = typeof node.dataset.ok === 'string';
        isConfirmed && confirmHandler();
      }
      setIsShow(false);
    }
  };

  const animationClose = () => {
    const modalWindow = ref.current;
    if (modalWindow && !isShow) {
      modalWindow.classList.add(MODAL_CLASS_DESTROY);
    }
  };

  useEffect(() => {
    setIsFirstRenderFlag(true);
  }, []);

  useEffect(() => {
    if (isFirstRenderFlag) setListClass(selectClassesModal(isShow));
  }, [isShow]);

  return { closeModalHandler, animationClose, listClass };
};

export default useModalOptions;
