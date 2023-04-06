import { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Links } from '1_app/types/enum';
import { isUserAdmin } from '../utils/helpers';

type SetStateBooleanAction = Dispatch<SetStateAction<boolean>>;

const useCheckAdmin = (setLoad: SetStateBooleanAction) => {
  const navigation = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const isAdmin = await isUserAdmin();
        if (!isAdmin) {
          navigation(Links.main);
        }
      } finally {
        setLoad(false);
      }
    };
    checkAdmin();
  }, []);

  return null;
};

export default useCheckAdmin;
