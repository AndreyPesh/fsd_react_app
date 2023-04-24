import SmartphoneList from '4_widgets/products/smartphones/SmartphoneList';

const Smartphones = (): JSX.Element => {
  return (
    <div className="container">
      <h1>Smartphones</h1>
      <div className="product-list">
        <SmartphoneList />
      </div>
    </div>
  );
};

export default Smartphones;
