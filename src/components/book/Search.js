const Search = ({ parks }) => {
  
  const makeStateFilters =() => {
    let stateOptions =[]
    parks.map(park => {
      const states = park.location
      states.map(state => {
        if (stateOptions.includes(state)) {
        } else {
          stateOptions = [...stateOptions, state]
        }
      })
    })
    
    const display = stateOptions.sort().map(state => {
      return (<option key={state}>{state}</option>)
    })

    return display
  }

  

  return (
      <form className='search-form'>
        <div className='search-list-sort'>
          <div className='search-bar'>
            <label htmlFor='search-bar'><strong>Search</strong></label>
              <input id='search-bar' type='text' placeholder='Search by name' />
          </div>
          <div>
            <label htmlFor='lists'><strong>Lists</strong></label>
              <select id='lists' name='lists'>
                <option value='Favorites'>Favorites</option>
                <option value='Trending'>Trending</option>
                <option value='Cards Collected'>Cards Collected</option>
                <option value='Cards Remaining'>Cards Remaining</option>
              </select>
          </div>
          <div>
            <label htmlFor='sort'><strong>Sort</strong></label>
              <select id='sort' name='sort'>
                  <option value='Alphabetically'>A-Z</option>
                  <option value='Visitors'>Visitors </option>
                  <option value='Favorites'>Oldest-Newest</option>
                  <option value='Trending'>Trending</option>
              </select>
          </div>
        </div>
        <div id='filters-container' className='filters-container'>
          <label htmlFor='filters-container'><strong>Filters</strong></label>
            <div>
              <label htmlFor='state'>State</label>
                <select id='state'>
                  {makeStateFilters()}
                </select>
            </div>
            <div>
              <label htmlFor='traffic'>Traffic</label>
                <select id='traffic'>
                  <option value='low'>Low</option>
                  <option value='med'>Med</option>
                  <option value='high'>High</option>
                </select>
              </div>
              <div>
            <label htmlFor='wildlife'>Wildlife</label>
              <select id='wildlife'>
                {/* {wildlifeOptions} */}
              </select>
            </div>
            <div>
              <label htmlFor='activities'>Activities</label>
                <select id='activities'>
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