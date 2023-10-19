import { useState } from 'react'

const Search = ({ parks, searchObj, handleSearchChange }) => {

  // const [stateArr, setStateArr] = useState([])

  // const handleOptionChange = ({ target: { value }}) => {
  //   setStateArr(current => [...current, value])
  // }

  const makeStateFilters = () => {
    
    let stateOptions =[]
    parks.map(park => {
      const states = park.location
      states.map(state => {
        if (!stateOptions.includes(state)) {
          stateOptions = [...stateOptions, state]
        }
      })
    })
    
    const display = stateOptions.sort().map(state => {
      return (<option onVolumeChangeCapture={state} key={state}>{state}</option>)
    })

    return display
  }

  const makeWildlifeFilters = () => {
    let animalOptions =[]
    parks.map(park => {
      const animals = park.wildlife
      animals.map(animal => {
        if (!animalOptions.includes(animal)) {
          animalOptions = [...animalOptions, animal]
        }
      })
    })
    
    const display = animalOptions.sort().map(state => {
      return (<option key={state}>{state}</option>)
    })

    return display
  }
  
  const onChange = ({ target: { name, value } }) => {
    handleSearchChange(name, value)
  }

  // const onSelectChange = ({ target: { value } }) => {
  //   handleSelectChange(value)
  // }

  return (
      <form className='search-form'>
        <div className='search-list-sort'>
          <div className='search-bar'>
            <label htmlFor='search-bar'><strong>Search</strong></label>
              <input onChange={onChange} id='search' name='search' type='text' placeholder='Search by name' value={searchObj.searchQuery} />
          </div>
          <div>
            <label htmlFor='lists'><strong>Lists</strong></label>
              <select onChange={onChange} id='list' name='list' value={searchObj.list}>
                <option value='All'>All</option>
                <option value='Favorites'>Favorites</option>
                <option value='Cards Collected'>Cards Collected</option>
                <option value='Cards Remaining'>Cards Remaining</option>
              </select>
          </div>
          <div>
            <label htmlFor='sort'><strong>Sort</strong></label>
              <select onChange={onChange} id='sort' name='sort' value={searchObj.sort}>
                  <option value='Alphabetically'>A-Z</option>
                  <option value='Oldest-Newest'>Oldest-Newest</option>
                  <option value='Visitors'>Visitors </option>
              </select>
          </div>
        </div>
        <div id='filters-container' className='filters-container'>
          <label htmlFor='filters-container'><strong>Filters</strong></label>
            <div>
              <label htmlFor='state'>State</label>
                <select onChange={onChange} name='state'>
                  {makeStateFilters()}
                </select>
            </div>
            <div>
              <label htmlFor='traffic'>Traffic</label>
                <select id='traffic'>
                  <option value='off'>Off</option>
                  <option value='low'>Low</option>
                  <option value='med'>Med</option>
                  <option value='high'>High</option>
                </select>
              </div>
              <div>
            <label htmlFor='wildlife'>Wildlife</label>
              <select id='wildlife'>
                {makeWildlifeFilters()}
              </select>
            </div>
            <div>
              <label htmlFor='activities'>Activities</label>
                <select id='activities'>
                <option value='all'>All</option>
                  <option value='archaeology'>Archaeology</option>
                  <option value='hiking'>Hiking</option>
                  <option value='history'>History</option>
                  <option value='horseback-riding'>Horseback Riding</option>
                  <option value='scenic-drives'>Scenic Drives</option>
                  <option value='water-sports'>Water Sports</option>
                </select>
              </div>
              <button>Reset Filters</button>
        </div>
      </form>
  )
}

export default Search