import React from 'react';
import ReactDOM from 'react-dom/client';
import '1_app/styles/style.scss';
// import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './1_app/router/routes';
import Loader from '7_shared/loader/Loader';
// import { Provider } from 'react-redux';
// import { store } from './store/store';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router} fallbackElement={<Loader />} />
    {/* </Provider> */} 
  </React.StrictMode>
);