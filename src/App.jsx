import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import HeroComponent from './components/HeroComponent'
import SearchBarComponent from './components/SearchBarComponent'
import ProductListComponent from './components/ProductListComponent'
import CartComponent from './components/CartComponent'
import FooterComponent from './components/FooterComponent'
import productos from './data/products.json'
import './App.css'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [carrito, setCarrito] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [categoria, setCategoria] = useState('Todos')

  const GRUPOS_MENU = [
  {label: 'Notebook', cats: ['Notebooks', 'Notebooks Gamer'] },
  {label: 'Monitores', cats: ['Monitores'] },
  {label: 'Componentes', cats: ['Procesadores', 'Tarjetas de Video', 'Placas Madre', 'Memorias RAM', 'Gabinetes y Fuentes'] },
  {label: 'Almacenamiento', cats: ['Almacenamiento'] },
  {label: 'Periféricos', cats: ['Periféricos'] },
  ]

  const categorias = ['Todos', ...GRUPOS_MENU.map((g) => g.label)]
  const texto = busqueda.trim().toLowerCase()

  const productosFiltrados  = productos.filter((p) => {
    const coincideTexto =
      p.name.toLowerCase().includes(texto) ||
      p.category.toLowerCase().includes(texto) ||
      (p.brand || '').toLowerCase().includes(texto)
    const grupo = GRUPOS_MENU.find((g) => g.label === categoria)
    const coincideCategoria = categoria === 'Todos' || (grupo && grupo.cats.includes(p.category))
    return coincideTexto && coincideCategoria
  })

  const abrirCarro = () => {
    setCartOpen(true)
    setAccountOpen(false)
  }

  const alternarCuenta = () => {
    setAccountOpen((v) => !v)
    setCartOpen(false)
  }

  const buscar = (texto) => {
    setBusqueda(texto)
    if (texto.trim() != '') setCategoria('Todos')
  }

  const agregarAlcarro = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((it) => it.id === producto.id)
      if (existe) {
        return prev.map((it) => (it.id === producto.id ? { ...it, qty: it.qty +1 } : it))
      }
      return [...prev, { ...producto, qty: 1}]
    })
    abrirCarro()
  }

  const sumarQty = (id) =>
    setCarrito((prev) => prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1} : it)))

  const restarQty = (id) =>
    setCarrito((prev) =>
      prev.flatMap((it) => {
        if (it.id !== id) return [it]
        return it.qty > 1 ? [{ ...it, qty: it.qty - 1}] : []
      })
    )

  const quitarDelCarro = (id) => setCarrito((prev) => prev.filter ((it) => it.id !== id))

  const pagar = () => {
    const total = carrito.reduce((acc, it) => acc + it.price * it.qty, 0)
    if (total === 0) return
    alert(
      '¡Gracias por tu compra en DG Store! Total: ' + 
      total.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0,
      })
    )
    setCarrito([])
    setCartOpen(false)
  }

  const totalItems = carrito.reduce((acc, it) => acc + it.qty, 0)

  const irAlCatalogo = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
      <HeaderComponent
        cartCount={totalItems}
        onCartClick={abrirCarro}
        accountOpen={accountOpen}
        onAccountToggle={alternarCuenta}
        onAccountClose={() => setAccountOpen(false)}
        categorias={categorias}
        categoriaActiva={categoria}
        onSelectCategoria={setCategoria}
      >
        <SearchBarComponent value={busqueda} onChange={buscar} />
      </HeaderComponent>

      <main className="contenido">
        <HeroComponent onCta={irAlCatalogo} />
        
        <div className="contenido__head" id="catalogo">
          <h1>Catálog de productos</h1>
          <span className="contenido__count">
            {productosFiltrados.length} prodcuto
            {productosFiltrados.length !== 1 ? 's' : ''}
            </span>          
        </div>

        <ProductListComponent products={productosFiltrados} onAdd={agregarAlcarro} />
      </main>

      <CartComponent
        open={cartOpen}
        items={carrito}
        onClose={() => setCartOpen(false)}
        onInc={sumarQty}
        onDec={restarQty}
        onRemove={quitarDelCarro}
        onCheckout={pagar}
      />

      <FooterComponent />
    </>

  )
}

export default App
  