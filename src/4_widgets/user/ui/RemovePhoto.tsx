import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRemovePhotoMutation } from '7_shared/api/userApi';
import { LoadPhotoErrors } from '../utils/enums';

const RemovePhoto = () => {
  const [removePhoto, { isError }] = useRemovePhotoMutation();

  useEffect(() => {
    if (isError) {
      toast.error(LoadPhotoErrors.CANT_REMOVE);
    }
  }, [isError]);

  const removePhotoHandler = () => {
    removePhoto();
  };

  return (
    <button
      type="button"
      className="button button_user button_user-remove"
      onClick={removePhotoHandler}
    >
      Remove photo
    </button>
  );
};

export default RemovePhoto;
