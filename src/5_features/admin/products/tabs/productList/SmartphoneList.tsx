import { useEffect, useState } from 'react';
import SmartphonePreview from '6_entities/admin/smartphone/SmartphonePreview';
import { useDeleteSmartphonesMutation, useGetSmartphoneListQuery } from '7_shared/api/smartphoneApi';

const SmartphoneList = () => {
  const { data } = useGetSmartphoneListQuery(null);
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
        data.map((smartphone) => (
          <SmartphonePreview
            key={smartphone.id}
            data={smartphone}
            setSelectedProducts={setSelectedProducts}
          />
        ))}
      {/* <ConfirmModal
        isShow={isShow}
        setIsShow={setIsShow}
        message={message}
        confirmHandler={removeProducts}
      /> */}
      {/* <Modal setIsShow={setIsShowForm} isShow={isShowForm}>
        <FormSmartphone />
      </Modal>
      <Modal setIsShow={setIsShowFormBrand} isShow={isShowFormBrand}>
        <FormBrand />
      </Modal> */}
    </div>
  );
};

export default SmartphoneList;
