import {
  SHIFT_LAST_PAGE,
  SHIFT_START_PART,
  SHIFT_TRANSIT_PAGE,
  START_PAGE,
} from '../types/constants';

interface ItemPaginationListProps {
  pages: React.ReactNode[];
  limit: number;
  currentPage: number;
}

const ItemPaginationList = ({
  pages,
  limit,
  currentPage,
}: ItemPaginationListProps) => {
  let currentPiecePages = [...pages].slice(START_PAGE, limit);
  const numberPages = pages.length;
  const lastPart = Math.ceil(numberPages / limit);
  const isShowLastPartPages =
    currentPage >= lastPart * limit - limit + SHIFT_LAST_PAGE;

  if (isShowLastPartPages) {
    const lastPartPageNumber = numberPages - limit;
    currentPiecePages = [...pages].slice(lastPartPageNumber);
  } else if (currentPage > limit) {
    const isChangePartPages = (currentPage - SHIFT_TRANSIT_PAGE) % limit === 0;
    if (isChangePartPages) {
      const firstPageNumber = currentPage - SHIFT_TRANSIT_PAGE;
      const lastPageNumber = currentPage + limit - SHIFT_TRANSIT_PAGE;
      currentPiecePages = [...pages].slice(firstPageNumber, lastPageNumber);
    } else {
      const partNumber = Math.ceil(currentPage / limit);
      const firstPageNumber = (partNumber - SHIFT_START_PART) * limit;
      const lastPageNumber = partNumber * limit;
      currentPiecePages = [...pages].slice(firstPageNumber, lastPageNumber);
    }
  }

  return <>{currentPiecePages}</>;
};

export default ItemPaginationList;
