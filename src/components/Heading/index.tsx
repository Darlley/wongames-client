import React from 'react'
import * as S from './styles'

export type LineColorsType = 'primary' | 'secondary'
export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColorsType
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'small',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper 
    color={color} 
    lineLeft={lineLeft} 
    lineBottom={lineBottom} 
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
