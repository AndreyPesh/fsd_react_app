import { useEffect, useState } from 'react';
import Modal from '5_features/modal/Modal';
import BrandSmartphone from '5_features/admin/products/tabs/smartphone/forms/BrandSmartphone';
import SmartphonePreview from '6_entities/admin/smartphone/SmartphonePreview';
import { useDeleteSmartphonesMutation, useGetSmartphoneListQuery } from '7_shared/api/smartphoneApi';
import CreateSmartphone from './forms/CreateSmartphone';
import ConfirmModal from '5_features/confirmModal/ConfirmModal';

const SmartphoneList = () => {
  const { data } = useGetSmartphoneListQuery({page: 1, limit: 5});
  const [selectedProducts, setSelectedProducts] = useState<Array<string>>([]);
  const [deleteSmartphones, { isLoading, isSuccess }] =
    useDeleteSmartphonesMutation();
  const message = `Are you sure you want to delete selected products?`;
  const [isShow, setIsShow] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowFormBrand, setIsShowFormBrand] = useState(false);

  const showForm = () => {
    setIsShowForm(true);
  };

  const showFormBrand = () => {
    setIsShowFormBrand(true);
  };

  const removeProducts = () => {
    deleteSmartphones(selectedProducts);
  };

  useEffect(() => {
    if (isSuccess) setSelectedProducts([]);
  }, [isSuccess]);

  return (
    <div className="list-product-admin">
      <div className="list-product-admin__buttons">
        <button className="button button_confirm" onClick={showForm}>
          Add smartphone
        </button>
        <button className="button button_confirm" onClick={showFormBrand}>
          Add brand
        </button>
        <button
          className="button button_remove"
          disabled={selectedProducts.length === 0 || isLoading}
          onClick={() => setIsShow(true)}
        >
          Delete
        </button>
      </div>
      {data &&
        data.smartphoneList.map((smartphone) => (
          <SmartphonePreview
            key={smartphone.id}
            data={smartphone}
            setSelectedProducts={setSelectedProducts}
          />
        ))}
      <ConfirmModal
        isShow={isShow}
        setIsShow={setIsShow}
        message={message}
        confirmHandler={removeProducts}
      />
      <Modal setIsShow={setIsShowForm} isShow={isShowForm}>
        <CreateSmartphone />
      </Modal>
      <Modal setIsShow={setIsShowFormBrand} isShow={isShowFormBrand}>
        <BrandSmartphone />
      </Modal>
    </div>
  );
};

export default SmartphoneList;
