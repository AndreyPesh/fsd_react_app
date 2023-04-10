import { useParams } from 'react-router-dom';
import SmartphoneView from '4_widgets/products/SmartphoneView';
import Loader from '7_shared/loader/Loader';
import { useGetSmartphoneQuery } from '7_shared/api/smartphoneApi';

const Smartphone = () => {
  const { smartphoneId } = useParams();
  const { data, isLoading } = useGetSmartphoneQuery({ id: smartphoneId! });

  if(isLoading) {
    return <Loader />
  }
  return (
    <div className="container">
      <h1>Smartphone</h1>
      {data ? <SmartphoneView data={data}/> : <h2>Error load data</h2>}
    </div>
  );
};

export default Smartphone;
