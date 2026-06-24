import './LoaderComponent.css'

function LoaderComponent({ mensaje = 'Cargando productos...' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__spinner" />
      <p className="loader__texto">{mensaje}</p>
    </div>
  )
}

export default LoaderComponent