import './filter.css'

export const Filter = ({
  setFilters
}) => {

  const onChange = ({ target }) => {
    setFilters(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <div className='pet-filter-container'>
      <div className='filter-container'>
        <label htmlFor="favourite">Favourite</label>
        <select onChange={onChange} name="favourite" id="favourite" className='form-select'>
          <option value="any">any</option>
          <option value="favourite">Favourite</option>
          <option value="not favourite">Not favourite</option>
        </select>
      </div>
      <div className='filter-container'>
        <label htmlFor="gender">Gender</label>
        <select onChange={onChange} name="gender" id="gender" className='form-select'>
          <option value="any">any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  )
}
