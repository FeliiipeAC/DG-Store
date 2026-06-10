import AccountMenuComponent from '../AccountMenuComponent'
import './HeaderComponent.css'

function HeaderComponent({
  children,
  cartCount = 0,
  onCartClick,
  accountOpen = false,
  onAccountToggle,
  onAccountClose,
  categorias = [],
  categoriaActiva,
  onSelectCategoria,
}) {
  return (
    <header className="header">
      <div className="header__top">
        <a className="logo" href="/" aria-label="Inicio">
          <span className="logo__dg">DG</span>
          <span className="logo__store">Store</span>
        </a>

        <div className="header__search">{children}</div>

        <div className="header__actions">
          <div className="header__account-wrap">
            <button
              type="button"
              className="header__action"
              onClick={onAccountToggle}
              aria-expanded={accountOpen}
            >
              <svg className="header__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="header__action-text">Mi cuenta</span>
            </button>
            <AccountMenuComponent open={accountOpen} onSelect={onAccountClose} />
          </div>

          <button type="button" className="header__action header__cart" onClick={onCartClick}>
            <svg className="header__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="header__action-text">Carro</span>
            {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
          </button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Categorías">
        <ul>
          {categorias.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                className={`header__nav-btn${cat === categoriaActiva ? ' header__nav-btn--activa' : ''}`}
                onClick={() => onSelectCategoria?.(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent