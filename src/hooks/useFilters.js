import { FiltersContext } from '../context/filters'
import { useContext } from 'react'

export default function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filtersProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }
  return {
    filters,
    filtersProducts,
    setFilters
  }
}
