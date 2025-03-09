import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner, { DefaultBannerProps } from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...DefaultBannerProps} />)

    expect(
      screen.getByRole('heading', { name: /Defy Death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })
})
