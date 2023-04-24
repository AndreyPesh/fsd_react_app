import { useState } from 'react';
import Pagination from '5_features/pagination/Pagination';
import SmartphoneCart from '6_entities/products/smartphone/SmartphoneCart';
import { useGetSmartphoneListQuery } from '7_shared/api/smartphoneApi';
import Loader from '7_shared/loader/Loader';
import { LIMIT_ITEMS, LIMIT_PAGES } from './types/constants';

const SmartphoneList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isFetching } = useGetSmartphoneListQuery({
    page: currentPage,
    limit: LIMIT_ITEMS,
  });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      {data && data ? (
        data.smartphoneList.map((smartphone) => (
          <SmartphoneCart key={smartphone.id} data={smartphone} />
        ))
      ) : (
        <h2>Error load smartphone data</h2>
      )}
      {data && (
        <Pagination
          currentPage={currentPage}
          limitItems={LIMIT_ITEMS}
          limitPages={LIMIT_PAGES}
          numberRecords={data.numberRecords}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default SmartphoneList;
