import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BrandList from './components/BrandList';
import { useAppDispatch, useAppSelector } from '1_app/store/hooks';
import Loader from '7_shared/loader/Loader';
import {
  useGetSmartphoneQuery,
  useUpdateSmartphoneMutation,
} from '7_shared/api/smartphoneApi';
import {
  addDataSmartphone,
  initDataSmartphone,
} from './store/smartphoneDataSlice';
import UpdateImages from '5_features/updateImages/UpdateImages';
import { addDataToDataForm } from './utils/helpers';
import LoadButton from '7_shared/buttons/LoadButton';

const UpdateDataSmartphone = () => {
  const { smartphoneId } = useParams();
  const dispatch = useAppDispatch();
  const dataSmartphone = useAppSelector((state) => state.smartphoneDataForm);
  const { data, isLoading, isSuccess } = useGetSmartphoneQuery({
    id: smartphoneId!,
  });
  const [updatedImages, setUpdatedImages] = useState<Array<string>>([]);
  const [updateSmartphone, { isLoading: updateLoading, isError: updateError }] =
    useUpdateSmartphoneMutation();

  useEffect(() => {
    if (data) {
      const {
        model,
        display,
        price,
        year,
        cpu,
        frequency,
        memory,
        nfc,
        brand: { brand },
      } = data;
      dispatch(
        initDataSmartphone({
          model,
          display,
          price,
          year,
          cpu,
          frequency,
          memory,
          nfc,
          brand,
        })
      );
    }
  }, [isSuccess]);

  if (!data) {
    return <h2>Cant load data. Something went wrong!</h2>;
  }

  const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { ...dataSmartphone, images: updatedImages };
    const form = addDataToDataForm(data);
    if (smartphoneId) {
      await updateSmartphone({ data: form, id: smartphoneId });
    }
  };

  const formHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    dispatch(addDataSmartphone({ name, value, type, checked }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h2>Update smartphone</h2>
      <form onSubmit={formSubmit} className="form">
        <div className="form__field">
          <label>Model:</label>
          <input
            className="form__input"
            type="text"
            name="model"
            value={dataSmartphone.model}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Display:</label>
          <input
            className="form__input"
            type="text"
            name="display"
            value={dataSmartphone.display}
            onChange={formHandler}
          />
        </div>
        <BrandList brand={dataSmartphone.brand} />
        <div className="form__field">
          <label>Price:</label>
          <input
            className="form__input"
            type="number"
            name="price"
            value={dataSmartphone.price}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Year:</label>
          <input
            className="form__input"
            type="number"
            name="year"
            value={dataSmartphone.year}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>CPU:</label>
          <input
            className="form__input"
            type="text"
            name="cpu"
            value={dataSmartphone.cpu}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Frequency:</label>
          <input
            className="form__input"
            type="number"
            name="frequency"
            value={dataSmartphone.frequency}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>Memory:</label>
          <input
            className="form__input"
            type="number"
            name="memory"
            value={dataSmartphone.memory}
            onChange={formHandler}
          />
        </div>
        <div className="form__field">
          <label>NFC:</label>
          <input
            className="form__input form__input_without-border"
            type="checkbox"
            checked={dataSmartphone.nfc}
            name="nfc"
            value="nfc"
            onChange={formHandler}
          />
        </div>
        <UpdateImages
          imagesList={data.images}
          setUpdatedImages={setUpdatedImages}
          updatedImages={updatedImages}
        />
        <div className="form__button-submit">
          <LoadButton
            listClass={'button button_confirm'}
            type="submit"
            isLoad={updateLoading}
          >
            Update
          </LoadButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateDataSmartphone;
