import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelColor?: 'white' | 'black'
  htmlFor: string
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  onCheck,
  labelColor = 'white',
  htmlFor,
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={htmlFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={htmlFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio