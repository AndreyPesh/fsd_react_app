import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../2_processes/auth/model/userSlice';
// import { authApi } from './api/authApi';
// import { productsApi } from './api/productsApi';
// import { userApi } from './api/userApi';
import loginFormReducer from '../../2_processes/auth/model/loginSlice';
// import modalReducer from './slice/modalSlice';
// import { smartphoneApi } from './api/admin/smartphoneApi';
// import { smartphoneBrandApi } from './api/admin/smartphoneBrandApi';
// import smartphoneDataSlice from './slice/adminData/smartphoneDataSlice';

export const store = configureStore({
  reducer: {
    loginFormData: loginFormReducer,
    userData: userReducer,
    // modal: modalReducer,
    // smartphoneDataForm: smartphoneDataSlice,
    // [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    // [productsApi.reducerPath]: productsApi.reducer,
    // [smartphoneApi.reducerPath]: smartphoneApi.reducer,
    // [smartphoneBrandApi.reducerPath]: smartphoneBrandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      // authApi.middleware,
      // userApi.middleware,
      // productsApi.middleware,
      // smartphoneApi.middleware,
      // smartphoneBrandApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;