import { useAppSelector } from '1_app/store/hooks';
import { useGetCartListQuery } from '7_shared/api/cartApi';
import { useEffect } from 'react';

const CartListProducts = () => {
  const { data } = useGetCartListQuery();
  
  useEffect(() => {
    
    console.log(data);
    
  }, [data])

  return <div>List products</div>;
};

export default CartListProducts;
