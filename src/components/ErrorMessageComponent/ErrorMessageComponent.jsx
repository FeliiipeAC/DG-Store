import ButtonComponent from '../ButtonComponent'
import './ErrorMessageComponent'

function ErrorMessageComponent ({ mensaje = 'Algo salio mal.', onReintentar }) {
  return (
    <div className="error-msg" role="alert">
      <span className="error-msg__icono">⚠️</span>
      <p className="error-msg__texto">{mensaje}</p>
      {onReintentar && (
        <ButtonComponent variant="primary" onClick={onReintentar}>
          Reintentar  
        </ButtonComponent>
      )}
    </div>
  )
}

export default ErrorMessageComponent