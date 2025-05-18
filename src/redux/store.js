
import { configureStore } from '@reduxjs/toolkit';
import  loginReducer  from './slice/loginSlice';
import  signUpReducer  from './slice/registeruserslice';
import { authenticationApi } from './apis/authenticationApi';

export const store = configureStore({
  reducer: {
    login : loginReducer,
    register: signUpReducer,
     [authenticationApi.reducerPath]: authenticationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});
