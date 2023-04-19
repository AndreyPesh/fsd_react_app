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
  let partPages = [...pages].slice(0, limit);
  if (currentPage > pages.length - limit) {
    partPages = [...pages].slice(pages.length - limit);
  } else if (currentPage > limit) {
    if ((currentPage - 1) % limit === 0) {
      partPages = [...pages].slice(currentPage - 1, currentPage + limit - 1);
    } else {
      const part = Math.ceil(currentPage / limit);
      partPages = [...pages].slice(part + limit - 1, part + limit + limit);
      console.log(part);
    }
  }

  return <>{partPages}</>;
};

export default ItemPaginationList;
