import Base from 'templates/Base'

import * as S from './styles' 
import GameInfo from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

export type GameTemplateProps = {
  cover: string,
  gameInfo: {
    title: string
    description: string
    price: string
  },
  gallery?: GalleryImageProps[]
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
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
      </S.Main>
    </S.Wrapper>
  </Base>
) 
export default Game