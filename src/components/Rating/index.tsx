import { RatingContainer } from './styles'
import star from '../../assets/images/estrela.svg'

type Props = {
  children: number
}

const Rating = ({ children }: Props) => {
  return (
    <RatingContainer>
      <span>{children}</span>
      <img src={star} alt="estrela" />
    </RatingContainer>
  )
}

export default Rating
