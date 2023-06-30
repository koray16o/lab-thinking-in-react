import { useState } from 'react';

const SearchBar = ({ filterProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyStocked, setOnlyStocked] = useState(false);

  const handleSearchQueryChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    filterProducts(inputValue, onlyStocked);
  };

  const handleOnlyStockedChange = (event) => {
    const isChecked = event.target.checked;
    setOnlyStocked(isChecked);
    filterProducts(searchQuery, isChecked);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="submit" value="Search" />

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search..."
      />
      <h3>
        <input
          type="checkbox"
          checked={onlyStocked}
          onChange={handleOnlyStockedChange}
        />
        Only show products in stock
      </h3>
    </div>
  );
};

export default SearchBar;
