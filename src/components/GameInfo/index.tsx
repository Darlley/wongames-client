import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import { AddShoppingCart, FavoriteBorder } from '@styled-icons/material-outlined'
import Ribbon from 'components/Ribbon'

export type GameInfoProps = {
  title: string,
  description: string,
  price: string
}

const GameInfo = ({
  title,
  description,
  price
}: GameInfoProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
    <Ribbon color="secondary">R${`${price}`}</Ribbon>
    <S.Description>{description}</S.Description>
    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">Add To Cart</Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>Wishlist</Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
) 
export default GameInfo