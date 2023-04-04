import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useAppDispatch } from '1_app/store/hooks';
import { setStorageLoginFormData } from '../../utils/storage/localStorage';
import { setCurrentFormData } from '2_processes/auth/model/loginSlice';
import { LoginFormValues } from '7_shared/api/types/interfaces';

const PersistLoginForm = ({ name }: { name: string }): null => {
  const dispatch = useAppDispatch();
  const { values } = useFormikContext<LoginFormValues>();

  useEffect(() => {
    return () => {
      setStorageLoginFormData(name, values);
      dispatch(setCurrentFormData(values));
    };
  }, [values]);

  return null;
};

export default PersistLoginForm;
