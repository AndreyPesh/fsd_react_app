import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import SelectRole from './ui/SelectRole';
import LoadPhoto from './ui/LoadPhoto';
import { useAppSelector } from '1_app/store/hooks';
import { useUpdateUserMutation } from '7_shared/api/userApi';
import { ErrorResponse } from '7_shared/api/types/types';
import useToastyForAuth from '7_shared/toasty/hooks/useToastyForAuth';
import { addUserDataToForm } from './utils/helpers';
import { UserUpdateData } from './utils/interfaces';
import { UserMessage } from './utils/enums';
import { initUserData } from './utils/constants';

const UserPersonalInfo = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.userData);
  const [userData, setUserData] = useState<UserUpdateData>(initUserData);
  const [updateUser, { error, isError, isSuccess, isLoading }] = useUpdateUserMutation();

  const messageError = error != null ? (error as ErrorResponse).data.message : UserMessage.wrong;

  const isErrorRequest = useToastyForAuth({
    isSuccess,
    isError,
    messageSuccess: UserMessage.userDataUpdated,
    messageError,
    redirectToMain: false,
  });

  const userDataHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = addUserDataToForm(userData);
    await updateUser(form);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  return (
    <div className="container">
      <form onSubmit={userDataHandler} className="user-data-form">
        <div className="user-data-form__field">
          <label>User:</label>
          <input
            className="user-data-form__input"
            name="name"
            value={userData.name}
            onChange={inputHandler}
          />
        </div>
        <div className="user-data-form__field">
          <label>E-mail:</label>
          <input
            className="user-data-form__input"
            name="email"
            value={userData.email}
            onChange={inputHandler}
          />
        </div>
        <SelectRole currentRole={userData.role} setUserRole={setUserData} />
        <LoadPhoto setPhotoUser={setUserData} />
        <button type="submit" className="button button_user" disabled={isLoading}>
          Save data
        </button>
      </form>
      {isErrorRequest && (
        <p className="auth__error auth__error_response">{error != null ? messageError : null}</p>
      )}
    </div>
  );
};

export default UserPersonalInfo;
