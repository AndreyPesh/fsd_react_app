import { useNavigate } from 'react-router-dom';
import { BASE_URL, DEFAULT_PHOTO_PATH } from '1_app/constants';
import { useAppSelector } from '1_app/store/hooks';
import { Links } from '1_app/types/enum';
import LogoutButton from '7_shared/buttons/auth/LogoutButton';


const UserManagement = (): JSX.Element => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userData);

  const userPageHandler = (): void => {
    navigate(Links.user);
  };

  const urlPhoto = BASE_URL + `/${user?.photo}`;

  return (
    <div className="user-management">
      <div className="user-data" onClick={userPageHandler}>
        <img src={user?.photo ? urlPhoto : DEFAULT_PHOTO_PATH} alt="User photo" />
        <p className="user-data__name">{user ? user.name : 'Guest'}</p>
      </div>
      <LogoutButton />
    </div>
  );
};

export default UserManagement;
