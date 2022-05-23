import { render, screen } from '@testing-library/react'
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

})