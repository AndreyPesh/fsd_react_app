import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TypeButtonPagination } from '../types/enums';
import { formListClasses } from '../utils/helpers';

interface PrevNextButtonProps {
  type: TypeButtonPagination;
  togglePage: Dispatch<SetStateAction<number>>;
  isDisableButton?: boolean;
  maxPage?: number;
}

const PrevNextButton = ({
  type,
  maxPage,
  isDisableButton,
  togglePage,
}: PrevNextButtonProps) => {
  const [listClasses, setListClasses] = useState<string>('');

  const togglePageHandler = () => {
    if (type === TypeButtonPagination.PREV) {
      togglePage((prevPage) => {
        if (prevPage <= 1) return 1;
        return prevPage - 1;
      });
    } else if (type === TypeButtonPagination.NEXT) {
      togglePage((prevPage) => {
        if (maxPage && prevPage >= maxPage) return maxPage;
        return prevPage + 1;
      });
    }
  };

  useEffect(() => {
    const listClasses = formListClasses(type, isDisableButton);
    setListClasses(() => listClasses);
  }, [isDisableButton]);

  return <li className={listClasses} onClick={togglePageHandler}></li>;
};

export default PrevNextButton;
