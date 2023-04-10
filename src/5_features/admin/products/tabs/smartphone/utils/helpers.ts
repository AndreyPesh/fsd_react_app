import { dataURLtoFile } from '7_shared/utils/helpers';
import { SmartphoneDescription } from '../store/types/interfaces';

export const addDataToDataForm = (dataSmartphone: SmartphoneDescription) => {
  const formData = new FormData();
  let key: keyof SmartphoneDescription;

  for (key in dataSmartphone) {
    const dataField = dataSmartphone[key];

    if (Array.isArray(dataField)) {
      dataField.map((image) => {
        const imageFile = dataURLtoFile(image);
        formData.append('images', imageFile);
      });
    } else if (
      typeof dataField === 'number' ||
      typeof dataField === 'boolean'
    ) {
      formData.append(key, String(dataField));
    } else {
      formData.append(key, dataField);
    }
  }
  return formData;
};
