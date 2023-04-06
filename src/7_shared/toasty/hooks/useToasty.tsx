import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { UseToastyProps } from '../types/interfaces';

export const useToasty = ({
  isSuccess,
  isError,
  messageSuccess,
  messageError,
}: UseToastyProps) => {
  useEffect(() => {
    if (isSuccess) {
      toast.success(messageSuccess);
    }
    if (isError) {
      toast.error(messageError);
    }
  }, [isSuccess, isError]);
};
