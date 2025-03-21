import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  htmlFor: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  htmlFor,
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input 
        id={htmlFor} 
        type="checkbox" 
        onChange={onChange} 
        checked={checked} 
        value={value} 
        {...props} 
      />
      {label && <S.Label htmlFor={htmlFor} labelColor={labelColor}>{label}</S.Label>}
    </S.Wrapper>
  )
}
export default Checkbox