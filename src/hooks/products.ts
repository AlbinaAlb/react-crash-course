import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IProduct } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [sortingVariant, setSortingVariant] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

 /*  console.log('sortingVariant......', sortingVariant)
  console.log('products......', products) */

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product])
  }
  
  function setSorting(variant: string) {
    if (['cheaper', 'expensive', 'rating'].includes(variant)) {
      setSortingVariant(variant)
    }
  }
  
  useEffect(() => {
    if (!sortingVariant) return
    if (sortingVariant === 'cheaper') {
      setProducts(
        products.sort((a, b) => {
          return a.price - b.price
        })
      )
    }
    if (sortingVariant === 'expensive') {
      setProducts(
        products.sort((a, b) => {
          return b.price - a.price
        })
      )
    }
    if (sortingVariant === 'rating') {
      setProducts(
        products.sort((a, b) => {
          return b.rating.rate - a.rating.rate
        })
      )
    }
  }, [sortingVariant])
  
  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      )
      setProducts(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return { products, loading, error, addProduct, setSorting }
}
