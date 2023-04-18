import { MouseEvent, useState } from 'react';
import ItemPagination from './components/ItemPagination';
import { TypeButtonPagination } from './types/enums';
import PrevNextButton from './components/PrevNextButton';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
  for (let page = 1; page < data.length; page++) {
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
      />
      {listPages}
      <PrevNextButton
        type={TypeButtonPagination.NEXT}
        togglePage={setCurrentPage}
        maxPage={data.length - 1}
      />
    </ul>
  );
};

export default Pagination;
