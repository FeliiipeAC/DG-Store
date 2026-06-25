import { useState, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'
import HeroComponent from './components/HeroComponent'
import SearchBarComponent from './components/SearchBarComponent'
import ProductListComponent from './components/ProductListComponent'
import LoaderComponent from './components/LoaderComponent'
import ErrorMessageComponent from './components/ErrorMessageComponent'
import FooterComponent from './components/FooterComponent'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  const cargarProductos = () => {
    setLoading(true)
    setError(null)
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Respuesta no valida')
        return res.json ()
      })
      .then((data) => setProducts(data.products))
      .catch(() => setError('No se pudieron cargar los productos. Revisa tu conexion'))
      .finally(() => setLoading(false))
  }

  useEffect (() => {
    cargarProductos()
  }, [])

  const texto = busqueda.trim().toLowerCase()
  const productosFiltrados = products.filter((p) =>
    (p.title || '').toLowerCase().includes(texto)
  )

  const irAlCatalogo = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeaderComponent>
        <SearchBarComponent value={busqueda} onChange={setBusqueda} />
      </HeaderComponent>

      <main className="contenido">
        <HeroComponent onCta={irAlCatalogo} />

        <div className="contenido__head" id="catalogo">
          <h1>Catalogo de productos</h1>
          {!loading && !error && (
            <span className="contenido__count">
              {productosFiltrados.length} producto
              {productosFiltrados.length !== 1 ? 's' : ''}              
            </span>
          )}
        </div>

        {loading && <LoaderComponent />}
        {error && <ErrorMessageComponent mensaje={error} onReintentar={cargarProductos} />}
        {!loading && !error && <ProductListComponent products={productosFiltrados} />}
      </main>

      <FooterComponent />
    </>
  )
}

export default App