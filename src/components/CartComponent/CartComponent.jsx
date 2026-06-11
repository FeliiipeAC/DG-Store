import ImageComponent from '../ImageComponent'
import ButtonComponent from '../ButtonComponent'
import './CartComponent.css'

function formatearCLP(valor) {
    return valor.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0, 
    })
}

function CartComponent ({ open, items, onClose, onInc, onDec, onRemove, onCheckout}) {
    if (!open) return null

    const total = items.reduce((acc, it) => acc + it.price * it.qty, 0)
    const cantidad = items.reduce((acc, it) => acc + it.qty, 0)

    return (
      <>
        <div className="cart-overlay" onClick={onClose}/>

        <aside className="cart" role="dialog" aria-label="Carro de compras">
          <header className="cart__header">
            <h2>Tu Carro ({cantidad})</h2>
            <button className="cart__close" onClick={onClose} aria-label='Cerrar'>
              ✕
            </button>
          </header>

          {items.length === 0 ? (
            <p className="cart__empty">Tu carro está vacio 🛒</p>
          ) : (
            <ul className="cart__items">
              {items.map((it) => (
                <li className="cart__item" key={it.id}>
                  <div className="cart__item-img">
                    <ImageComponent src={it.image} alt={it.name}/>
                  </div>
                  <div className="cart__item-info">
                    <p className="cart__item-name">{it.name}</p>
                    <p className="cart__item-price">{formatearCLP(it.price)}</p>
                    <div className="cart__qty">
                      <button onClick={() => onDec(it.id)} aria-label="Restar">-</button>
                      <span>{it.qty}</span>
                      <button onClick={() => onInc(it.id)} aria-label="Sumar">+</button>
                    </div>
                  </div>
                  <button
                    className="cart__remove"
                    onClick={() => onRemove(it.id)}
                    aria-label="Eliminar del carro"
                  >
                  🗑️                    
                  </button>
                </li>
              ))}
            </ul>
          )}

          <footer className="cart__footer">
            <div className="cart__total">
              <span>Total</span>
              <strong>{formatearCLP(total)}</strong>
            </div>
            <ButtonComponent
                variant="primary"
                fullWidth
                onClick={onCheckout}
            >
                Ir a pagar
            </ButtonComponent>
          </footer>
          </aside>
        </>
    )
}

export default CartComponent