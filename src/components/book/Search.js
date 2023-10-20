import { useState } from 'react'

const Search = ({ parks, searchObj, handleSearchChange, handleReset }) => {

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

  const onReset = () => {
    handleReset()
  }

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
              <label htmlFor='state'/>
                <select onChange={onChange} name='state'>
                  <option value='all'>State</option>
                  {makeStateFilters()}
                </select>
            </div>
            <div>
              <label htmlFor='wildlife'/>
                <select onChange={onChange} name='wildlife'>
                  <option value='all'>Wildlife</option>
                  {makeWildlifeFilters()}
              </select>
            </div>
            <div>
              <label htmlFor='activities'/>
                <select onChange={onChange} name='activity'>
                  <option value='all'>Activities</option>
                  <option value='archaeology'>Archaeology</option>
                  <option value='hiking'>Hiking</option>
                  <option value='history'>History</option>
                  <option value='horseback riding'>Horseback Riding</option>
                  <option value='rock climbing'>Rock Climbing</option>
                  <option value='scenic drives'>Scenic Drives</option>
                  <option value='water sports'>Water Sports</option>
                </select>
              </div>
              <button onClick={onReset}>Reset Filters</button>
        </div>
      </form>
  )
}

export default Search