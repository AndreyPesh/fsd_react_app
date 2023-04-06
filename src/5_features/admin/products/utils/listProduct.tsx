import Computers from '../tabs/Computers';
import Refrigerators from '../tabs/Refrigerators';
import Smartphones from '../tabs/Smartphones';

export const listProducts = [
  {
    name: 'Smartphones',
    component: <Smartphones key={'1'} />,
  },
  {
    name: 'Computers',
    component: <Computers key={'2'} />,
  },
  {
    name: 'Refrigerators',
    component: <Refrigerators key={'3'} />,
  },
];
