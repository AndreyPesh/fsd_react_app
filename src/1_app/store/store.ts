import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../2_processes/auth/model/userSlice';
// import { productsApi } from './api/productsApi';
import loginFormReducer from '../../2_processes/auth/model/loginSlice';
import { authApi } from '7_shared/api/authApi';
import { userApi } from '7_shared/api/userApi';
import { smartphoneApi } from '7_shared/api/smartphoneApi';
import { smartphoneBrandApi } from '7_shared/api/smartphoneBrandApi';
import smartphoneDataSlice from '5_features/admin/products/tabs/smartphone/store/smartphoneDataSlice';
// import modalReducer from './slice/modalSlice';

export const store = configureStore({
  reducer: {
    loginFormData: loginFormReducer,
    userData: userReducer,
    // modal: modalReducer,
    smartphoneDataForm: smartphoneDataSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    // [productsApi.reducerPath]: productsApi.reducer,
    [smartphoneApi.reducerPath]: smartphoneApi.reducer,
    [smartphoneBrandApi.reducerPath]: smartphoneBrandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      // productsApi.middleware,
      smartphoneApi.middleware,
      smartphoneBrandApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;