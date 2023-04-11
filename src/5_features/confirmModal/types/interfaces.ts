import { SetStateBooleanAction } from '5_features/modal/types/types';
import { ConfirmHandler } from './types';

export interface ConfirmModalProps {
  isShow: boolean;
  setIsShow: SetStateBooleanAction;
  message: string;
  confirmHandler: ConfirmHandler;
}
