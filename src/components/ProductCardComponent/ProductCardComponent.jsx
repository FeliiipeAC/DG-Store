import './ProductCardComponent.css';

function formatearPrecio(valor) {
  return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'})  
}

function ProductCardComponent({ product }) {
  const { title, price, category, brand, thumbnail, rating } = product

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={thumbnail} alt={title} loading="lazy" />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__title">{title}</h3>
        {brand && <p className="product-card__brand">{brand}</p>}

        <div className="product-card__footer">
          <span className="product-card__price">{formatearPrecio(price)}</span>
          <span className="product-card__rating">⭐ {rating}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCardComponent