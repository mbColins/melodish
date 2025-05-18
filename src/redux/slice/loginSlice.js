import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data : {
    'userName':'',
    'password':'',
  },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    authenticateUser : (state,action) => {
        const {userName,password} = action.payload;
        state.data.userName = userName;
        state.data.password = password;
    },

    clearLogin: (state) => {
        state.data.userName = '';
        state.data.password = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticateUser,clearLogin} = loginSlice.actions;

export default loginSlice.reducer;
