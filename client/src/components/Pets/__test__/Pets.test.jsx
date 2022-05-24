import { render, screen, within } from '@testing-library/react'
import userEvent from "@testing-library/user-event"

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { Pets } from '../Pets'
import cats from '../../../Mocks/cats.json'

const baseURL = process.env.REACT_APP_API_URL

const server = setupServer(
  rest.get(`${baseURL}cats`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(cats)
    )
  })

)

beforeAll(() => server.listen())
afterEach(() => server.restoreHandlers())
afterAll(() => server.close())

describe('Pets', () => {

  test('should render correct card components', async () => {

    render(<Pets />)

    const cats = await screen.findAllByRole('article')
    expect(cats.length).toBe(5)

  })

  test('should filter male cats', async () => {

    render(<Pets />)

    const cats = await screen.findAllByRole('article')

    await userEvent.selectOptions(screen.getByLabelText(/gender/i), 'male')

    expect(screen.getAllByRole('article')).toStrictEqual([cats[1], cats[3]])
  })

  test('should filter female cats', async () => {

    render(<Pets />)

    const cats = await screen.findAllByRole('article')

    await userEvent.selectOptions(screen.getByLabelText(/gender/i), 'female')

    expect(screen.getAllByRole('article')).toStrictEqual([cats[0], cats[2], cats[4]])
  })


  test('should filter favourite cats', async () => {

    render(<Pets />)

    const cats = await screen.findAllByRole('article')

    await userEvent.click(within(cats[0]).getByRole('button'))
    await userEvent.click(within(cats[3]).getByRole('button'))

    await userEvent.selectOptions(screen.getByLabelText(/Favourite/i), 'favourite')

    expect(screen.getAllByRole('article')).toStrictEqual([cats[0], cats[3]])

  })

  test('should filter not favourite cats', async () => {

    render(<Pets />)

    const cats = await screen.findAllByRole('article')

    await userEvent.click(within(cats[1]).getByRole('button'))
    await userEvent.click(within(cats[2]).getByRole('button'))
    await userEvent.click(within(cats[4]).getByRole('button'))

    await userEvent.selectOptions(screen.getByLabelText(/Favourite/i), 'favourite')

    expect(screen.getAllByRole('article')).toStrictEqual([cats[1], cats[2], cats[4]])

  })
})