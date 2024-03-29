import Slider from '5_features/slider/Slider';
import { SmartphoneData } from '7_shared/api/types/products/interfaces';
import { createUrlImage } from '7_shared/utils/helpers';

interface SmartphoneViewProps {
  data: SmartphoneData;
}
const SmartphoneView = ({ data }: SmartphoneViewProps) => {
  const {
    brand: { brand },
    price,
    display,
    images,
  } = data;
  const listImages = images.map((image) => ({
    urlImage: createUrlImage(image.name),
  }));
  return (
    <div>
      <h2>{brand}</h2>
      <ul>
        <li>Display: {display}</li>
        <li>Price: {price}</li>
      </ul>
      <Slider listImage={listImages} />
    </div>
  );
};

export default SmartphoneView;
