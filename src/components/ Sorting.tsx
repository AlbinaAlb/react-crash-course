import { useState } from 'react'

export function Sorting({ setSorting }: any) {
  const [sort, setSort] = useState('')

  const handleClick = (value: string) => {
    setSorting(value)
    setSort(value)
  }

  return (
    <div>
      <p>Sorting</p>
      <button
        className={`py-2 px-4 border ${
          sort === 'rating' ? 'bg-gray-400' : 'bg-white-400'
        }`}
        onClick={() => handleClick('rating')}
      >
        By rating
      </button>
      <button
        className={`py-2 px-4 border ${
          sort === 'cheaper' ? 'bg-gray-400' : 'bg-white-400'
        }`}
        onClick={() => handleClick('cheaper')}
      >
        Cheaper
      </button>
      <button
        className={`py-2 px-4 border ${
          sort === 'expensive' ? 'bg-gray-400' : 'bg-white-400'
        }`}
        onClick={() => handleClick('expensive')}
      >
        Expensive
      </button>
    </div>
  )
}
