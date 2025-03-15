import styled from 'styled-components'
import { CheckboxProps } from '.'
import { css } from 'styled-components'
export const Wrapper = styled.div``

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`

