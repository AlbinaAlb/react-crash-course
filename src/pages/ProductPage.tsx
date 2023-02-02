import { useContext } from 'react'
import { Sorting } from '../components/ Sorting'
import { CreateProductForm } from '../components/CreateProductForm'
import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal'
import { Product } from '../components/Product'
import { ModalContext } from '../context/ModalContext'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

export function ProductPage() {
  const { products, loading, error, addProduct, setSorting } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <div>
        <Sorting setSorting={setSorting} />
      </div>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProductForm onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="absolute bottom-5 right-5 rounded-full bg-green-700 text-white text-2xl px-5 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  )
}
