import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import item from './mock'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...item} />)

    expect(
      screen.getByRole('heading', { name: /Defy Death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...item}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
