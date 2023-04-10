export const filterProductsByStatus = <T extends Array<string>>(
  products: T,
  id: string,
  status: boolean
) => {
  const cloneProducts = [...products];
  if (status) {
    cloneProducts.push(id);
    return cloneProducts;
  }
  return cloneProducts.filter((product) => product !== id);
};
