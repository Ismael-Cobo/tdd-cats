import { Card } from '../Card/Card'
import './cards.css'

export const Cards = ({ cats }) => {
  return (
    <div className='pet-cards-container'>
      {
        cats.map((cat) => (
          <Card key={cat.id} {...cat} />
        ))
      }
    </div>
  )
}
