import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalState = {
  item: Menu
  isOpen: boolean
}

const initialState: ModalState = {
  item: {
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  },
  isOpen: false
}

const modalSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Menu>) => {
      const product = state.item
      const payload = action.payload
      product.descricao = payload.descricao
      product.foto = payload.foto
      product.id = payload.id
      product.nome = payload.nome
      product.porcao = payload.porcao
      product.preco = payload.preco
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { setModal, close, open } = modalSlice.actions
export default modalSlice.reducer
