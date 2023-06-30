import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (searchQuery, onlyStocked) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <h1>IRONSTORE</h1>
      <SearchBar onSearch={handleSearch} filterProducts={filterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
