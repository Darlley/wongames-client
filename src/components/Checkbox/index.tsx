import * as S from './styles'

export type CheckboxProps = {
  label?: string
  htmlFor: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label,
  htmlFor,
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <input type="checkbox" id={htmlFor} />
    {label && <S.Label htmlFor={htmlFor} labelColor={labelColor}>{label}</S.Label>}
  </S.Wrapper>
)
export default Checkbox