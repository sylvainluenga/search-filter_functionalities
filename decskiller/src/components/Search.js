import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
  }

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
  }

  let displayedProducts = [];
  return (
    <div className="Products">
      <FilterForm
        priceFrom={''}
        priceTo={''}
        onPriceInputChange={''} />

      <ToggleColumns
        onCheckboxClick={''}
        columns={''} />

      <ProductList
        products={displayedProducts}
        columns={''} />
    </div>
  );
}

export default Search;
