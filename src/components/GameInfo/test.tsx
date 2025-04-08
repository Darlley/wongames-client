import { render, screen } from '@testing-library/react'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render the game information', () => {
    renderWithTheme(<GameInfo {...props} />)
  })
  
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
  })
})
