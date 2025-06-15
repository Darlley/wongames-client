import Base from 'templates/Base'

import * as S from './styles'
import GameInfo from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDatails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import { Divider } from 'components/Divider'

export type GameTemplateProps = {
  cover: string,
  gameInfo: {
    title: string
    description: string
    price: number
  },
  description: string,
  gallery?: GalleryImageProps[],
  details: GameDetailsProps,
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendedSectionTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  recommendedSectionTitle = "You may like these games"
}: GameTemplateProps) => (
  <Base>
    <S.Wrapper>
      <S.Cover
        src={cover}
        role="image"
        aria-label="cover"
      />
      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title={recommendedSectionTitle} games={recommendedGames} />
      </S.Main>
    </S.Wrapper>
  </Base>
)
export default Game