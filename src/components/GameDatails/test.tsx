import { render, screen } from '@testing-library/react'

import GameDatails from '.'

describe('<GameDatails />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameDatails />)

    expect(screen.getByRole('heading', { name: /GameDatails/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
