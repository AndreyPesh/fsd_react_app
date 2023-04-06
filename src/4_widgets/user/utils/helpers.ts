import { UserUpdateData } from './interfaces';

export const addUserDataToForm = (userData: UserUpdateData) => {
  const form = new FormData();
  let key: keyof UserUpdateData;
  for (key in userData) {
    const fieldForm = userData[key];
    if (fieldForm && key) {
      form.append(key, fieldForm);
    }
  }
  return form;
};

const LIST_VALID_EXT = ['jpg', 'jpeg', 'svg', 'png'];

export const isValidExtention = (nameImage: string) => {
  const ext = nameImage.split('.').pop();
  if(!ext) {
    return false;
  }
  return LIST_VALID_EXT.includes(ext);
}
