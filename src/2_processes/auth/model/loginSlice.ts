import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getStorageLoginFormData } from '../utils/storage/localStorage';
import { NAME_STORAGE_LOGIN_FORM_DATA } from '../utils/storage/constants';
import { LoginFormValues } from '7_shared/api/types/interfaces';

const initialState: LoginFormValues = getStorageLoginFormData(
  NAME_STORAGE_LOGIN_FORM_DATA
);

export const loginSlice = createSlice({
  name: 'login-form-data',
  initialState,
  reducers: {
    setCurrentFormData: (state, action: PayloadAction<LoginFormValues>) =>
      (state = action.payload),
  },
});

export const { setCurrentFormData } = loginSlice.actions;

export default loginSlice.reducer;
