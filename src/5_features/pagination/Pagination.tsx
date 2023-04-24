import { Dispatch, MouseEvent, SetStateAction } from 'react';
import ItemPagination from './components/ItemPagination';
import { TypeButtonPagination } from './types/enums';
import PrevNextButton from './components/PrevNextButton';
import ItemPaginationList from './components/ItemPaginationList';
import { FIRST_PAGE } from './types/constants';

interface PaginationProps {
  currentPage: number;
  limitItems: number;
  numberRecords: number;
  limitPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  currentPage,
  limitItems,
  limitPages,
  numberRecords,
  setCurrentPage,
}: PaginationProps) => {
  const numberPages = Math.ceil(numberRecords / limitItems);

  const selectPageHandler = (event: MouseEvent<HTMLElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLLIElement)) {
      return;
    }
    const { page } = target.dataset;
    if (page) {
      setCurrentPage(() => Number(page));
    }
  };

  const listPages = [];
  for (let page = FIRST_PAGE; page <= numberPages; page++) {
    listPages.push(
      <ItemPagination
        pageNumber={page}
        currentPage={currentPage}
        selectPageHandler={selectPageHandler}
        key={page}
      />
    );
  }

  return (
    <ul className="pagination">
      <PrevNextButton
        type={TypeButtonPagination.PREV}
        togglePage={setCurrentPage}
        isDisableButton={currentPage === FIRST_PAGE}
      />
      <ItemPaginationList
        pages={listPages}
        limit={limitPages}
        currentPage={currentPage}
      />
      <PrevNextButton
        type={TypeButtonPagination.NEXT}
        togglePage={setCurrentPage}
        isDisableButton={currentPage === numberPages}
        maxPage={numberPages}
      />
    </ul>
  );
};

export default Pagination;
