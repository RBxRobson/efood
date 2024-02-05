import { RatingContainer } from './styles'
import star from '../../assets/images/estrela.svg'

type Props = {
  children: string
}

const Rating = ({ children }: Props) => {
  return (
    <RatingContainer>
      {children}
      <img src={star} alt="estrela" />
    </RatingContainer>
  )
}

export default Rating
