import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {
    userName: '',
    firstName: '',
    password: '',
    email: '',
    phoneNumber: '',
  },
};


export const registerUserSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
      signUpUser : (state,action) =>{
        const {userName,firstName,password,email,phoneNumber} = action.payload;
        state.data.userName = userName;
        state.data.firstName = firstName;
        state.data.email = email;
        state.data.password = password;
        state.data.phoneNumber = phoneNumber;

      },
    },
});

export const {signUpUser} = registerUserSlice.actions;
export default registerUserSlice.reducer;
