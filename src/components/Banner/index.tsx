import * as S from './styles'

type Props = {
  category: string
  name: string
  image: string
}

const Banner = ({ category, name, image }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <S.BannerContainer className="container">
        <p>{category}</p>
        <h2>{name}</h2>
      </S.BannerContainer>
    </S.Banner>
  )
}

export default Banner
