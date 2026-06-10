import './AccountMenuComponent.css'

const OPCIONES = ['Iniciar sesión', 'Mis pedidos', 'Mis datos', 'Lista de deseos', 'Cerrar sesión']

function AccountMenuComponent({ open, onSelect }) {
  if (!open) return null

  return (
    <div className="account-menu" role="menu">
      <p className="account-menu__title">Hola 👋 Bienvenido</p>
      <ul>
        {OPCIONES.map((op) => (
          <li key={op}>
            <button onClick={() => onSelect?.(op)}>{op}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccountMenuComponent