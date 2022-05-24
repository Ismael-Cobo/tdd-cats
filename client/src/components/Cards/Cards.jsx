import { Card } from '../Card/Card'
import './cards.css'

export const Cards = ({ cats, setCats }) => {

  const onFav = (id) => {
    setCats(prev => prev.map(cat => cat.id === id ? { ...cat, favoured: !cat.favoured } : cat))
  }

  return (
    <div className='pet-cards-container'>
      {
        cats.map((cat) => (
          <Card key={cat.id} {...cat} onFav={onFav} />
        ))
      }
    </div>
  )
}
