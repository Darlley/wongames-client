import Base from 'templates/Base'

import * as S from './styles' 
import GameInfo from 'components/GameInfo'
export type GameTemplateProps = {
  cover: string,
  gameInfo: {
    title: string
    description: string
    price: string
  }
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
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
      </S.Main>
    </S.Wrapper>
  </Base>
) 
export default Game