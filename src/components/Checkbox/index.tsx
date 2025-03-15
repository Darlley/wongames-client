import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  htmlFor: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  htmlFor,
  labelColor = 'white'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input id={htmlFor} type="checkbox" onChange={onChange}
        checked={checked} />
      {label && <S.Label htmlFor={htmlFor} labelColor={labelColor}>{label}</S.Label>}
    </S.Wrapper>
  )
}
export default Checkbox