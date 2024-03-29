import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import Modal from '5_features/modal/Modal';
import PasswordRole from './PasswordRole';
import { UserUpdateData } from '../utils/interfaces';
import { ListRole } from '../utils/enums';

interface SelectRoleProps {
  currentRole: string;
  setUserRole: (data: SetStateAction<UserUpdateData>) => void;
}

const SelectRole = ({ currentRole, setUserRole }: SelectRoleProps) => {
  const [isShow, setIsShow] = useState(false);

  const [role, setRole] = useState<string>(currentRole);

  const roleHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setRole(value);
    setUserRole((prevData) => ({ ...prevData, [name]: value }));
    if (value === ListRole.admin) {
      setIsShow(true);
    }
  };

  useEffect(() => {
    setRole(currentRole);
  }, [currentRole]);

  return (
    <>
      <div className="user-data-form__field">
        <label>Role:</label>
        <select name="role" className="user-data-form__select" value={role} onChange={roleHandler}>
          <option>{ListRole.admin}</option>
          <option>{ListRole.user}</option>
        </select>
      </div>
      <Modal setIsShow={setIsShow} isShow={isShow}>
        <PasswordRole setUserPasswordRole={setUserRole} />
      </Modal>
    </>
  );
};

export default SelectRole;
