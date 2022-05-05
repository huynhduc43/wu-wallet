import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  privateKey: '',
  address: '',
  coin: 0,
}

export const userSlice = createSlice({
  name: 'walletInfo',
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
