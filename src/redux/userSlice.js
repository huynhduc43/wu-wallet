import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  privateKey: '',
  address: '',
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    accessWallet: (state, action) => {
      const walletInfo = action.payload
      state.privateKey = walletInfo.privatekey
      state.address = walletInfo.address
    },
  },
})

export const { accessWallet } = userSlice.actions

export default userSlice.reducer
