import {
  disableButtonClass,
  listClassesNextButton,
  listClassesPrevButton,
} from '../types/constants';
import { TypeButtonPagination } from '../types/enums';

export const formListClasses = (
  type: TypeButtonPagination,
  isDisableButton?: boolean
) => {
  const listClasses =
    type === TypeButtonPagination.PREV
      ? [...listClassesPrevButton]
      : [...listClassesNextButton];
  if (isDisableButton) {
    listClasses.push(disableButtonClass);
  }
  console.log(listClasses);
  
  return listClasses.join(' ');
};
