import {
  activeButtonClass,
  listClassesLoginForm,
  listClassesSignForm,
} from './constants';

export const getListClassesBtnAuthForm = (isLoginForm: boolean): string[] => {
  let loginBtnClasses = '';
  let signBtnClasses = '';
  if (isLoginForm) {
    loginBtnClasses = listClassesLoginForm.concat(activeButtonClass).join(' ');
    signBtnClasses = listClassesSignForm.join(' ');
  } else {
    loginBtnClasses = listClassesLoginForm.join(' ');
    signBtnClasses = listClassesSignForm.concat(activeButtonClass).join(' ');
  }
  return [loginBtnClasses, signBtnClasses];
};
