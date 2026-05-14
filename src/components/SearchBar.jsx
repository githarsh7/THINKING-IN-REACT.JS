
const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Futuristic Products ~"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="search-bar"
      />

      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />

        <label>Only show products in stock</label>
      </div>
    </form>
  );
};

export default SearchBar;