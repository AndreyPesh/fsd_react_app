import { Dispatch, SetStateAction } from 'react';
import { TypeButtonPagination } from '../types/enums';

interface PrevNextButtonProps {
  type: TypeButtonPagination;
  togglePage: Dispatch<SetStateAction<number>>;
  maxPage?: number;
}

const PrevNextButton = ({
  type,
  maxPage,
  togglePage,
}: PrevNextButtonProps) => {
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

  return (
    <li
      className={
        type === TypeButtonPagination.PREV
          ? 'pagination__button pagination__button_prev'
          : 'pagination__button pagination__button_next'
      }
      onClick={togglePageHandler}
    ></li>
  );
};

export default PrevNextButton;
