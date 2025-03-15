import * as S from './styles'

export type CheckboxProps = {
  label?: string
  htmlFor: string
}

const Checkbox = ({
  label,
  htmlFor
}: CheckboxProps) => (
  <S.Wrapper>
    <input type="checkbox" id={htmlFor} />
    {label && <label htmlFor={htmlFor}>{label}</label>}
  </S.Wrapper>
)
export default Checkbox