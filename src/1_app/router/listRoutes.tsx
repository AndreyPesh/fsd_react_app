import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import { AuthPath, Links } from '1_app/types/enum';
import Authorization from '2_processes/auth/ui/Authorization';
// import UpdateSmartphone from '../pages/admin/UpdateSmartphone';
import Computers from '3_pages/Computers';
import Furniture from '3_pages/Furniture';
import Refrigerators from '3_pages/Refrigerators';
import Smartphones from '3_pages/Smartphones';
import UserAccount from '3_pages/UserAccount';
import Admin from '3_pages/admin/Admin';
import { createRoutePage } from '7_shared/utils/helpers';
import { ID_SMARTPHONE_PARAM } from '1_app/constants';
import Smartphone from '3_pages/products/Smartphone';
// import { loadData } from '../utils/loader';

export const listRoutes = [
  {
    mainNav: true,
    path: Links.smartphones,
    name: 'Smartphone',
    element: <Smartphones />,
  },
  {
    mainNav: false,
    path: createRoutePage(Links.smartphones, ID_SMARTPHONE_PARAM),
    element: <Smartphone />,
  },
  {
    mainNav: true,
    path: Links.computers,
    name: 'Computers',
    element: <Computers />,
    // loader: loadData,
  },
  {
    mainNav: true,
    path: Links.refrigerators,
    name: 'Refrigerators',
    element: <Refrigerators />,
    // loader: loadData,
  },
  {
    mainNav: true,
    path: Links.furniture,
    name: 'Furniture',
    element: <Furniture />,
    // loader: loadData,
  },
  {
    mainNav: false,
    path: AuthPath.login,
    element: (
      <PublicRoute>
        <Authorization />
      </PublicRoute>
    ),
  },
  {
    mainNav: false,
    path: AuthPath.sign,
    element: (
      <PublicRoute>
        <Authorization />
      </PublicRoute>
    ),
  },
  {
    mainNav: false,
    path: Links.user,
    element: (
      <ProtectedRoute>
        <UserAccount />
      </ProtectedRoute>
    ),
  },
  {
    mainNav: true,
    name: 'Admin',
    path: Links.admin,
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
  // {
  //   mainNav: false,
  //   path: createRoutePage(Links.admin + Links.smartphone, ID_SMARTPHONE_PARAM),
  //   element: (
  //     <ProtectedRoute>
  //       <UpdateSmartphone />
  //     </ProtectedRoute>
  //   ),
  // },
];
