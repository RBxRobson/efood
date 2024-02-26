import * as S from './styles'
import { upperCaseFirstLetter } from '../RestaurantCard'

type Props = {
  image: string
  type: string
  title: string
}

const Banner = ({ image, type, title }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <S.BannerContainer className="container">
        <p>{upperCaseFirstLetter(type)}</p>
        <h2>{title}</h2>
      </S.BannerContainer>
    </S.Banner>
  )
}

export default Banner
