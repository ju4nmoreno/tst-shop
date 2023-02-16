import { useState, useId } from 'react'
import useFilters from '../hooks/useFilters'
import './Filters.css'

export default function Filters () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoriesFilterId = useId()

  const handleChageMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <input
          id={minPriceFilterId}
          max='1000'
          min='0'
          onChange={handleChageMinPrice}
          type='range'
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoriesFilterId}>Category</label>
        <select id={categoriesFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
