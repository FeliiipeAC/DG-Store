import './HeaderComponent.css'

function HeaderComponent({ children }) {
  return (
    <header className="header">
      <div className="header__top">
        <a className="logo" href="/" aria-label="Inicio">
        <span className="logo__dg">DG</span>
        <span className="logo__store">Store</span>
        </a>
        <div className="header__search">{children}</div>
      </div>
    </header>
  )
}

export default HeaderComponent