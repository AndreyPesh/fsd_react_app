import { ChangeEvent, useEffect } from 'react';
import { addBrandSmartphone } from '../store/smartphoneDataSlice';
import { useAppDispatch } from '1_app/store/hooks';
import { useGetBrandsQuery } from '7_shared/api/smartphoneBrandApi';
import { useToasty } from '7_shared/toasty/hooks/useToasty';

interface BrandListProps {
  brand?: string;
}

const BrandList = ({ brand }: BrandListProps) => {
  const dispatch = useAppDispatch();
  const { data, isError } = useGetBrandsQuery(null);

  useToasty({ isError, messageError: 'Error load brand' });

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    dispatch(addBrandSmartphone(value));
  };

  useEffect(() => {
    if (brand && typeof brand === 'string' && data) {
      dispatch(addBrandSmartphone(brand));
    } else {
      data && data.length > 0 && dispatch(addBrandSmartphone(data[0].brand));
    }
  }, [data]);

  return (
    <div className="form__field">
      <label htmlFor="list-brand">Brand:</label>
      <select
        className="form__input"
        name="brand"
        id="list-brand"
        onChange={selectHandler}
      >
        {data && data.length > 0 ? (
          data.map(({ id, brand }) => (
            <option key={id} value={brand}>
              {brand}
            </option>
          ))
        ) : (
          <option value={'no brand'}>No brands</option>
        )}
      </select>
    </div>
  );
};

export default BrandList;
