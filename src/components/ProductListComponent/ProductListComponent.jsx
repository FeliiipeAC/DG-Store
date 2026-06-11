import CardComponent from '../CardComponent'
import './ProductListComponent.css'

function ProductListComponent({ products, onAdd}) {
    if (!products || products.length ===0) {
        return (
            <p className="product-list__empty">
                No se encontraron productos para tu busqueda. 🔍
            </p>
        )
    }

    return (
        <section className="product-list">
            {products.map ((producto) => (
                <CardComponent key={producto.id} product={producto} onAdd={onAdd} />
            ))}
        </section>
    )
}

export default ProductListComponent