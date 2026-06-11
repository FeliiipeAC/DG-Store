import ImageComponent from '../ImageComponent'
import ButtonComponent from '../ButtonComponent'
import './CardComponent.css'

function formatearCLP(valor) {
    return valor.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0,
    })
}

function CardComponent({ product, onAdd }) {
    const { name, price, category, image, brand } = product

    return (
        <article className="card">
            <span className="card__category">{category}</span>
            
            <div className="card__image">
                <ImageComponent src={image} alt={name} />
            </div>

            <div className="card__body">
                {brand && <span className="card__brand">{brand}</span>}
                <h3 className="card__name">{name}</h3>
                <p className="card__price">{formatearCLP(price)}</p>

                <ButtonComponent variant="primary" fullWidth onClick={() => onAdd(product)}> Agregar al carro 
                </ButtonComponent>
                
            </div>
        </article>
    )
}

export default CardComponent