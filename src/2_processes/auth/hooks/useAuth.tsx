import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { NAME_COOKIE_LOGGED } from '1_app/constants';
import { useAppDispatch, useAppSelector } from '1_app/store/hooks';
import { userApi } from '7_shared/api/userApi';

const cook = new Cookies();

const useAuth = (): boolean => {
  const { user } = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const isLoggedToken = cook.get(NAME_COOKIE_LOGGED) as boolean;

  useEffect(() => {
    if (isLoggedToken || user == null) {
      dispatch(userApi.endpoints.getMe.initiate(null));
    }
  }, []);
  return user !== null;
};

export default useAuth;
