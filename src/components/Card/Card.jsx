import { useState } from 'react'

import filledHeart from '../../svg/filledHeart.svg'
import outlinedHeart from '../../svg/outlinedHeart.svg'
import './card.css'

export const Card = ({
  name,
  email,
  phone,
  image,
  fav
}) => {

  const [isFavoured, setIsFavoured] = useState(fav)

  const handleClick = () => {
    setIsFavoured(!isFavoured)
  }

  return (
    <article className='card'>
      <div className="card-header">
        <img src={image.url} alt={image.alt} className='card-img' aria-label={name} />
        <button
          className='heart'
          onClick={handleClick}
        >
          <img
            src={isFavoured ? filledHeart : outlinedHeart}
            alt={`${isFavoured ? 'filled heart' : 'outlined heart'}`} />
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
