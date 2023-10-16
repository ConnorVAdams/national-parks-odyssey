const Search = () => {
  return (
      <form className='search-form'>
        <div className='search-list-sort'>
          <div className='search-bar'>
            <label htmlFor='search-bar'>Search</label>
              <input id='search-bar' type='text' placeholder='Search by name' />
          </div>
          <div>
            <label htmlFor='lists'>Lists</label>
              <select id='lists' name='lists'>
                <option value='Favorites'>Favorites</option>
                <option value='Trending'>Trending</option>
                <option value='Cards Collected'>Cards Collected</option>
                <option value='Cards Remaining'>Cards Remaining</option>
              </select>
          </div>
          <div>
            <label htmlFor='sort'>Sort</label>
              <select id='sort' name='sort'>
                  <option value='Alphabetically'>A-Z</option>
                  <option value='Visitors'>Visitors </option>
                  <option value='Favorites'>Oldest-Newest</option>
                  <option value='Trending'>Trending</option>
              </select>
          </div>
        </div>
        <div className='filters'>
          <label htmlFor='filters-container'>Filters</label>
          <div id='filters-container' className='filters-container'>
          <input id='filter-1' type='radio'/>
            <label htmlFor='filter-1'>Filter 1</label>
          <input id='filter-2' type='radio'/>
            <label htmlFor='filter-2'>Filter 2</label>
          <input id='filter-3' type='radio'/>   
            <label htmlFor='filter-3'>Filter 3</label>
          <input id='filter-4' type='radio'/>  
            <label htmlFor='filter-4'>Filter 4</label>
          </div>
        </div>
      </form>
  )
}

export default Search