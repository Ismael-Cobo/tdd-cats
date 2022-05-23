import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Filter } from "../Filter"

describe('Filter component', () => {

  test('should be able to change value of favourite select', async () => {

    render(<Filter />)

    const favourite = screen.getByLabelText('Favourite')
    expect(favourite.value).toBe('any')

    await userEvent.selectOptions(favourite, 'favourite')
    expect(favourite.value).toBe('favourite')

    await userEvent.selectOptions(favourite, 'not favourite')
    expect(favourite.value).toBe('not favourite')

  })

  test('should be able to change value of gender select', async () => {

    render(<Filter />)

    const gender = screen.getByLabelText('Gender')
    expect(gender.value).toBe('any')

    await userEvent.selectOptions(screen.getByLabelText('Gender'), 'male')
    expect(screen.getByLabelText('Gender').value).toBe('male')

    await userEvent.selectOptions(screen.getByLabelText('Gender'), 'female')
    expect(screen.getByLabelText('Gender').value).toBe('female')

  })

})