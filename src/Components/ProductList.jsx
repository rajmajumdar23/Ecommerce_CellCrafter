import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import '../Styling/ProductList.css';
import productsData from "./productsData"

const ProductList = ({ addToCart }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortingOrder, setSortingOrder] = useState('');
  const brandOptions = Array.from(new Set(productsData.map((product) => product.brand)));

  const filteredProducts = productsData.filter((product) => {
    return (
      (selectedBrand === '' || product.brand === selectedBrand) &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('₹', '').replace(',', '').trim());
      const priceB = parseFloat(b.price.replace('₹', '').replace(',', '').trim());
      if (order === 'lowToHigh') {
        return priceA - priceB;
      } else if (order === 'highToLow') {
        return priceB - priceA;
      }
      return 0;
    });
    return sortedProducts;
  };

  const sortedFilteredProducts = sortingOrder ? sortProducts(sortingOrder) : filteredProducts;

  return (
    <div className="product-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="brand-filter">
        <label htmlFor="brandFilter">Brand:</label>
        <select
          id="brandFilter"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="sorting-options">
        <label htmlFor="sortingOrder">Price: </label>
        <select
          id="sortingOrder"
          value={sortingOrder}
          onChange={(e) => setSortingOrder(e.target.value)}
        >
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="product-display">
        <h2>All Products</h2>
        {sortedFilteredProducts.length === 0 ? (
          <p>Sorry, No results for "{searchQuery}". <br /><br />Try checking your spelling or use more general terms.</p>
        ) : (
          <ul>
            {sortedFilteredProducts.map((product) => (
              <li key={product.id}>
                <ProductDetail product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;
