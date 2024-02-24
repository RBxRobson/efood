import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Btn, CardContainer } from './styles'
import { Restaurant } from '../../types/restaurant'

type Props = {
  image: string
  name: string
  description: string
  onClick: () => void
}

const ProductCard = ({ image, name, description, onClick }: Props) => {
  return (
    <CardContainer>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Btn onClick={onClick}>Adicionar ao carrinho</Btn>
    </CardContainer>
  )
}

export default ProductCard
