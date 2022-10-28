import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Modal',
  initialState: {
    show:false,
    showLogin: true,
    showSignup:false
  },
  reducers: {
    openLogin: (state) => {
      state.showLogin = true;
      state.showSignup = false;
    },
    openSignup: (state) => {
        state.showLogin = false;
        state.showSignup = true
    },
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
        state.show = false;
    }  
  },
})

export const { openLogin,openModal,openSignup,closeModal } = counterSlice.actions

export default counterSlice.reducer;