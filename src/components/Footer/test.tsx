import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('heading', { name: 'Contact Us' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Follow us' })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Location' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
