import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Omit<PurchasePayload, 'products' | 'payment'> = {
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: Number(''),
      complement: ''
    }
  }
}

const formSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    formDelivery: (
      state,
      action: PayloadAction<Omit<PurchasePayload, 'products' | 'payment'>>
    ) => {
      const { receiver } = action.payload.delivery
      const { city, description, number, zipCode, complement } =
        action.payload.delivery.address
      state.delivery = {
        receiver,
        address: {
          city,
          description,
          number,
          zipCode,
          complement
        }
      }
    }
  }
})

export const { formDelivery } = formSlice.actions
export default formSlice.reducer
