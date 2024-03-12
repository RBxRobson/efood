import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart, closeCart } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux'

import FormDelivery from '../FormDelivery'
import FormPayment from '../FormPayment'
import Cart from '../Cart'
import OrderPlaced from '../OrderPlaced'

import * as S from './styles'

type SideBarState = 'cart' | 'delivery' | 'payment' | 'order placed'

const SideBar = () => {
  const dispatch = useDispatch()
  const { isOpenCart } = useSelector((state: RootReducer) => state.cart)
  const [sideBarState, setSideBarState] = useState<SideBarState>('cart')

  const close = () => {
    dispatch(closeCart())
  }

  const setState = (state: SideBarState) => {
    setSideBarState(state)
  }

  const orderCompleted = () => {
    dispatch(clearCart())
    dispatch(closeCart())
    setState('cart')
  }

  return (
    <S.CartContainer className={isOpenCart ? 'is-open' : ''}>
      <div className="overlay" onClick={close}></div>
      <S.SideBar>
        {sideBarState === 'cart' && (
          <Cart onClickNext={() => setState('delivery')} />
        )}
        {sideBarState === 'delivery' && (
          <FormDelivery
            onClickBack={() => setState('cart')}
            onClickNext={() => setState('payment')}
          />
        )}
        {sideBarState === 'payment' && (
          <FormPayment
            onClickBack={() => setState('delivery')}
            onClickNext={() => setState('order placed')}
          />
        )}
        {sideBarState === 'order placed' && (
          <OrderPlaced onClickBack={orderCompleted} />
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default SideBar
