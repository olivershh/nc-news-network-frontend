export default function FilterBar({sortBy, setSortBy, order, setOrder}) {

    
    function handleSortByChange(event) {
        if(event.target.value) setSortBy(event.target.value)
        else setSortBy(undefined)
    }

    function handleOrderChange(event) {
        setOrder(event.target.value)
    }

    return (

        <form className="filter-by">
            <div className="sort_by">
          <label htmlFor="sort_by">Sort by</label>
          <select
            id="sort_by"
            name="sort_by"
            value={sortBy}
            onChange={(e) => handleSortByChange(e)}
          >
            <option value="created_at">Date</option>
            <option value="votes">Hot</option>
            <option value="comment_count">Comments</option>
          </select>
          <label htmlFor="order">Order</label>
          <select
            id="order"
            name="order"
            value={order}
            onChange={(e) => handleOrderChange(e)}
          >
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
        </div>
        </form>
    )
}