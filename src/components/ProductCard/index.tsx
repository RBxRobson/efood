import { useDispatch } from 'react-redux'

import { open, setModal } from '../../redux/reducers/modal'
import { Menu } from '../../types/restaurant'
import { Btn, CardContainer } from './styles'

type Props = {
  menu: Menu
}

const ProductCard = ({ menu }: Props) => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(
      setModal({
        descricao: menu.descricao,
        foto: menu.foto,
        id: menu.id,
        nome: menu.nome,
        porcao: menu.porcao,
        preco: menu.preco
      })
    )
    dispatch(open())
  }

  return (
    <CardContainer>
      <img src={menu.foto} />
      <h3>{menu.nome}</h3>
      <p>{menu.descricao}</p>
      <Btn onClick={openModal}>Mais detalhes</Btn>
    </CardContainer>
  )
}

export default ProductCard
