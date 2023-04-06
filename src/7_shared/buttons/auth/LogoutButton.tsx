import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Links } from '1_app/types/enum';
import { useLogoutUserMutation } from '7_shared/api/authApi';

const LogoutButton = (): JSX.Element => {
  const navigate = useNavigate();
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  const logout = async (): Promise<void> => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(Links.main);
    }
  }, [isLoading]);
  return <span className="user-logout-btn" onClick={logout}></span>;
};

export default LogoutButton;
