import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps,
  sectionTitles: {
    newGames: string,
    mostPopularGames: string,
    upcomingGames: string,
    freeGames: string,
  }
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  freeGames,
  freeHighlight,
  sectionTitles
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={sectionTitles?.newGames} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={sectionTitles?.mostPopularGames}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={sectionTitles?.upcomingGames}
      highlight={upcomingHighlight}
      games={upcomingGames}
    />

    <Showcase
      title={sectionTitles?.freeGames}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home