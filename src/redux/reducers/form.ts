import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: PurchasePayload = {
  product: [],
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: Number(''),
      complement: ''
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: Number(''),
      expires: {
        month: Number(''),
        year: Number('')
      }
    }
  }
}

type DeliveryInfos = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

type PaymentInfos = {
  cardName: string
  cardNumber: string
  cvv: string
  expiredMonth: string
  expiredYear: string
  products: Product[]
}

const formSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    formDelivery: (state, action: PayloadAction<DeliveryInfos>) => {
      const { receiver, address, city, cep, number, complement } =
        action.payload

      state.delivery = {
        receiver,
        address: {
          description: address,
          city,
          zipCode: cep,
          number: Number(number),
          complement
        }
      }
    },
    formPayment: (state, action: PayloadAction<PaymentInfos>) => {
      const { cardName, cardNumber, cvv, expiredMonth, expiredYear, products } =
        action.payload

      state.payment.card = {
        name: cardName,
        number: cardNumber,
        code: Number(cvv),
        expires: {
          month: Number(expiredMonth),
          year: Number(expiredYear)
        }
      }

      state.product = products
    }
  }
})

export const { formDelivery, formPayment } = formSlice.actions
export default formSlice.reducer
