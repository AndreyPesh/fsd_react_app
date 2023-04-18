import Pagination from '5_features/pagination/Pagination';
import SmartphoneCart from '6_entities/products/smartphone/SmartphoneCart';
import { useGetSmartphoneListQuery } from '7_shared/api/smartphoneApi';
import Loader from '7_shared/loader/Loader';
import { useToasty } from '7_shared/toasty/hooks/useToasty';

const data = [{
  id: '1',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},{
  id: '2',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},{
  id: '3',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},{
  id: '4',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},{
  id: '5',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},{
  id: '6',
  model: 'Galaxy',
  display: 'Amoled',
  price: '300',
  year: '2022',
  cpu: '2322',
  frequency: '2300',
  memory: '500',
  nfc: false,
  brand: {id: '2', brand: 'Samsung'},
  images: [{id: '444', name: 'HThrsS_1681814225325.jpeg'}, {id: '44wer4', name: 'SWv9JN_1681814225345.jpeg'}, {id: '44wer4', name: 'Bkvgmu_1681814225326.jpeg'}],
},
]

const Smartphones = (): JSX.Element => {
  // const { data, isLoading, isError } = useGetSmartphoneListQuery(null);
  // useToasty({ isError, messageError: 'Something went wrong' });

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div className="product-list">
        {data ? (
          data.map((smartphone) => (
            <SmartphoneCart key={smartphone.id} data={smartphone} />
          ))
        ) : (
          <h2>Error load smartphone data</h2>
        )}
        {data?.length === 0 && <h2>List smartphone is empty</h2>}
      </div>
      <Pagination />
    </div>
  );
};

export default Smartphones;
