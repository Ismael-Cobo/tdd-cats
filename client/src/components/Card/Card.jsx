import { useState } from 'react'

import filledHeart from '../../svg/filledHeart.svg'
import outlinedHeart from '../../svg/outlinedHeart.svg'
import './card.css'

export const Card = ({
  id,
  name,
  email,
  phone,
  image,
  favoured,
  onFav
}) => {

  const [isFavoured, setIsFavoured] = useState(favoured)

  const handleClick = (id) => {
    setIsFavoured(!isFavoured)
    onFav(id)
  }


  return (
    <article className='card'>
      <div className="card-header">
        <img src={image.url} alt={image.alt} className='card-img' aria-label={name} />
        <button
          className='heart'
          onClick={() => handleClick(id)}
        >
          <img
            src={isFavoured ? filledHeart : outlinedHeart}
            alt={`${isFavoured ? 'filled heart' : 'outlined heart'}`}
          />
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  )
}
