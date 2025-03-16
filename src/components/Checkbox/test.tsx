import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(<Checkbox label="checkbox label" htmlFor='check' />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('checkbox label')).toBeInTheDocument()
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check')

    expect(container.firstChild).toMatchSnapshot()
  })
  
  it('should render without label', () => {
    renderWithTheme(<Checkbox htmlFor='check' />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByLabelText('checkbox label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" htmlFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox htmlFor='check' label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox htmlFor='check' label="Checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" htmlFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
