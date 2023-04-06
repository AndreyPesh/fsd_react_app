import { useState } from 'react';
import Loader from '7_shared/loader/Loader';
import useCheckAdmin from '../../4_widgets/admin/hooks/useCheckAdmin';
import AdminPanel from '4_widgets/admin/AdminPanel';
// import { listProducts } from '../utils/admin/listProducts';

const Admin = () => {
  const [load, setLoad] = useState(true);
  // const [translate, setTranslate] = useState(0);

  useCheckAdmin(setLoad);

  if (load) {
    return <Loader />;
  }

  // const translateHandler = (value: number) => {
  //   setTranslate(value);
  // };

  return (
    <div className="container">
      <h2>Admin page</h2>
      {/* <ul>
        {listProducts.map((product, index) => (
          <li key={index}>
            <button onClick={() => translateHandler(index * 100)}>{product.name}</button>
          </li>
        ))}
      </ul> */}
      {/* <div className="list-products">
        <div className="products" style={{ translate: `-${translate}%` }}>
          {listProducts.map(products => products.component)}
        </div>
      </div> */}
      <AdminPanel />
    </div>
  );
};

export default Admin;