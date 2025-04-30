import { render, screen } from '@testing-library/react'

import GameInfo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(screen.getByRole('heading', { name: /My Game Title/i })).toBeInTheDocument()
    expect(screen.getByText(/Game Description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(screen.getByRole('button', { name: /Add To Cart/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument()
  })
})
