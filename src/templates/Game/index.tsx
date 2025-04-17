import Base from 'templates/Base'

import * as S from './styles' 
import GameInfo from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'

export type GameTemplateProps = {
  cover: string,
  gameInfo: {
    title: string
    description: string
    price: string
  },
  description: string,
  gallery?: GalleryImageProps[]
}

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
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
      </S.Main>
    </S.Wrapper>
  </Base>
) 
export default Game