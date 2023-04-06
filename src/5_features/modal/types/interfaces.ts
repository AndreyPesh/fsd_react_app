import { RefObject } from 'react';
import { ConfirmHandler, SetStateBooleanAction } from './types';

export interface UseModalOptionsProps {
  isShow: boolean;
  ref: RefObject<HTMLDivElement>;
  setIsShow: SetStateBooleanAction;
  isConfirm?: boolean;
  confirmHandler?: ConfirmHandler;
}

export interface ModalProps {
  children: JSX.Element;
  setIsShow: SetStateBooleanAction;
  isShow: boolean;
}