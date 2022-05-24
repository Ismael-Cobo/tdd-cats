import { Cards } from '../Cards/Cards'
import { Filter } from '../Filter/Filter'

import './pets.css'
import { useEffect, useState } from 'react'

const baseURL = process.env.REACT_APP_API_URL

export const Pets = () => {

  const [cats, setCats] = useState([])
  const [filteredCats, setFilteredCats] = useState([])
  const [filters, setFilters] = useState({
    gender: 'any',
    favourite: 'any'
  })

  const fetchCats = async () => {
    const response = await fetch(`${baseURL}cats`)
    const body = await response.json()
    setCats(body)
    setFilteredCats(body)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  useEffect(() => {
    let filterCats = [...cats]

    if (filters.gender !== 'any') {
      filterCats = filterCats.filter(cat => cat.gender === filters.gender)
    }

    if (filters.favourite === 'favourite') {
      filterCats = filterCats.filter(cat => cat.favoured === true)
    } else if (filters.favourite === 'not favourite') {
      filterCats = filterCats.filter(cat => cat.favoured === false)
    }

    return setFilteredCats(filterCats)

  }, [filters])


  return (
    <div className='container'>
      <div className='app-container'>
        <Filter setFilters={setFilters} />
        <Cards cats={filteredCats} setCats={setCats} />
      </div>
    </div>
  )
}