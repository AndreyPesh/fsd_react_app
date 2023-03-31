import { RouteObject } from 'react-router-dom';
import { Links } from '1_app/types/enum';
import App from '1_app/App';
import Main from '3_pages/Main';
import Error from '3_pages/Error';
import { listRoutes } from './listRoutes';
// import { loadData } from '../utils/loader';

export const routes: RouteObject[] = [
  {
    path: Links.main,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
        // loader: loadData,
      },
      ...listRoutes,
    ],
  },
];
