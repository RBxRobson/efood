import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../types/restaurant'

type CartState = {
  items: Menu[]
  isOpenCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpenCart: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const newItem = { ...action.payload } //* Criando uma cópia do item
      newItem.id = state.items.length //* Alterando id para manter unicidade
      state.items.push(newItem) //* Adicionando cópia do item alterado ao state
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpenCart = true
    },
    closeCart: (state) => {
      state.isOpenCart = false
    }
  }
})

export const { add, closeCart, openCart, remove } = cartSlice.actions
export default cartSlice.reducer
