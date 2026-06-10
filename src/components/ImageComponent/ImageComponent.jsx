import { useState } from 'react'
import './ImageComponent.css'

function construirFallback(texto) {
  const limpio = (texto || 'Producto').split(' ').slice(0, 4).join(' ')
  return `https://placehold.co/400x300/0a2c6e/ffffff?text=${encodeURIComponent(limpio)}`
}

function ImageComponent({ src, alt, className = '' }) {
  const fallback = construirFallback(alt)
  const [imgSrc, setImgSrc] = useState(src || fallback)

  const manejarError = () => {
    if (imgSrc !== fallback) setImgSrc(fallback)
  }

  return (
    <img
      className={`img-producto ${className}`}
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={manejarError}
    />
  )
}

export default ImageComponent