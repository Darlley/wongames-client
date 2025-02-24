import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size by default', () => {
    renderWithTheme(<Button size='small'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size by default', () => {
    renderWithTheme(<Button size='large'>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>)
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })
})
