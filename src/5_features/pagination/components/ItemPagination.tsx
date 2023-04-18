import { MouseEvent } from 'react'

interface ItemPaginationProps {
  currentPage: number;
  pageNumber: number;
  selectPageHandler: (event: MouseEvent<HTMLLIElement>) => void
}

const ItemPagination = ({ pageNumber, currentPage, selectPageHandler }: ItemPaginationProps) => {
  return (
    <li
      className={`pagination__page ${
        pageNumber === currentPage ? 'pagination__page_active' : ''
      }`}
      data-page={pageNumber}
      onClick={selectPageHandler}
    >
      {pageNumber}
    </li>
  );
};

export default ItemPagination;
