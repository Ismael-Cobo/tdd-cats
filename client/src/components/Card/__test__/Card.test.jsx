import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Card } from '../Card';
import userEvent from '@testing-library/user-event';

export const cardProps = {
  name: 'cat 1',
  email: 'ismael@gmail.com',
  phone: '111-111-1111',
  image: {
    url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',
    alt: ''
  },
  fav: false
}

describe('Card test', () => {

  test('should show a name of cat card', () => {

    render(
      <Card {...cardProps} onFav={jest.fn()} />
    )

    expect(screen.getByText(cardProps.name)).toBeInTheDocument()
  })

  test('should show a email of cat card', () => {

    render(
      <Card {...cardProps} onFav={jest.fn()} />
    )

    expect(screen.getByText(cardProps.email)).toBeInTheDocument()
  })

  test('should show a phone of cat card', () => {

    render(
      <Card {...cardProps} onFav={jest.fn()} />
    )

    expect(screen.getByText(cardProps.phone)).toBeInTheDocument()
  })

  test('should show a image of cat card', () => {

    render(
      <Card {...cardProps} onFav={jest.fn()} />
    )

    expect(screen.getByRole('img', { name: cardProps.name })).toHaveAttribute('src', cardProps.image.url)
    expect(screen.getByRole('img', { name: cardProps.name })).toHaveAttribute('alt', cardProps.image.alt)

  })

  test('should show outlined heart', () => {
    render(<Card {...cardProps} onFav={jest.fn()} />)

    expect(screen.queryByAltText('filled heart')).not.toBeInTheDocument()
    expect(screen.getByAltText('outlined heart')).toBeInTheDocument()
  })

  test('should show filled heart on click', () => {
    render(<Card {...cardProps} onFav={jest.fn()} favoured={true} />)

    expect(screen.queryByAltText('outlined heart')).not.toBeInTheDocument()
    expect(screen.queryByAltText('filled heart')).toBeInTheDocument()
  })

  test('should toggle heart status', async () => {
    render(<Card {...cardProps} onFav={jest.fn()} />)


    await userEvent.click(screen.getByRole('button'))

    expect(screen.queryByAltText('outlined heart')).not.toBeInTheDocument()
    expect(screen.queryByAltText('filled heart')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button'))

    expect(screen.queryByAltText('outlined heart')).toBeInTheDocument()
    expect(screen.queryByAltText('filled heart')).not.toBeInTheDocument()
  })

})
