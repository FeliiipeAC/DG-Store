import './ButtonComponent.css';

function ButtonComponent({
  children,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  onClick,
}) {
  const clases = `btn btn--${variant}${fullWidth ? ' btn--full' : ''}`

  return (
    <button type={type} className={clases} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonComponent