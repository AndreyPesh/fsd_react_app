import { Dispatch, SetStateAction } from 'react';
import { filterProductsByStatus } from '../utils/helpers';
import { CheckboxHandlerParams } from '../types/interfaces';
import { SmartphoneData } from '7_shared/api/types/products/interfaces';
// import Checkbox from '../../ui/Checkbox';
// import UpdateButton from './UpdateButton';

interface SmartphonePreviewAdminProps {
  data: SmartphoneData;
  setSelectedProducts: Dispatch<SetStateAction<Array<string>>>;
}

const SmartphonePreviewAdmin = ({ data, setSelectedProducts }: SmartphonePreviewAdminProps) => {
  const toggleProductToRemove = ({ status }: CheckboxHandlerParams) => {
    setSelectedProducts((prevProducts) => {
      return filterProductsByStatus(prevProducts, data.id, status);
    });
  };

  return (
    <div className="list-product-admin__item">
      {data.brand && data.brand.brand ? data.brand.brand + ' ' + data.model : 'Unknown'}
      <div className="list-product-admin__actions">
        {/* <UpdateButton id={data.id}/> */}
        {/* <Checkbox checkboxHandler={toggleProductToRemove} /> */}
      </div>
    </div>
  );
};

export default SmartphonePreviewAdmin;
