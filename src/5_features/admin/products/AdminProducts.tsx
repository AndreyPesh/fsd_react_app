import { useState } from 'react';
import { listProducts } from './utils/listProduct';

const AdminProducts = () => {
    const [translate, setTranslate] = useState(0);
  
    const translateHandler = (value: number) => {
      setTranslate(value);
    };
  return (
    <>
      <ul>
        {listProducts.map((product, index) => (
          <li key={index}>
            <button onClick={() => translateHandler(index * 100)}>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="list-products">
        <div className="products" style={{ translate: `-${translate}%` }}>
          {listProducts.map(products => products.component)}
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
