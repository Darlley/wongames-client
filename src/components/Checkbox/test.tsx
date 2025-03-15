import { render, screen } from '@testing-library/react'

import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" htmlFor='check' />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('checkbox label')).toBeInTheDocument()
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check')
  })
})
