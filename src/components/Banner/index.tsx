import * as S from './styles'
import bannerImg from '../../assets/images/banner1.svg'

const Banner = () => {
  return (
    <S.Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <S.BannerContainer>
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </S.BannerContainer>
    </S.Banner>
  )
}

export default Banner
