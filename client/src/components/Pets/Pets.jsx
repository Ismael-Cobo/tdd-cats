import { Cards } from '../Cards/Cards'
import { Filter } from '../Filter/Filter'

import './pets.css'
import { useEffect, useState } from 'react'

const baseURL = process.env.REACT_APP_API_URL

export const Pets = () => {

  const [cats, setCats] = useState([])

  useEffect(() => {
    fetchCats()
  }, [])

  const fetchCats = async () => {
    const response = await fetch(`${baseURL}cats`)
    const body = await response.json()
    setCats(body)
  }


  return (
    <div className='container'>
      <div className='app-container'>
        <Filter />
        <Cards cats={cats} />
      </div>
    </div>
  )
}
