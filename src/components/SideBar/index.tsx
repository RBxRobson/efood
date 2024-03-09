import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeCart } from '../../redux/reducers/cart'
import { RootReducer } from '../../redux'

import * as S from './styles'
import Cart from '../Cart'
import FormDelivery from '../FormDelivery'

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
      </S.SideBar>
    </S.CartContainer>
  )
}

export default SideBar
