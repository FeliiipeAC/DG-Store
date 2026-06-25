import ProductCardComponent from '../ProductCardComponent'
import './ProductListComponent.css'

function ProductListComponent({ products }) {
    if (!products || products.length ===0) {
        return <p className="product-list__empty"> No se encontraron productos. 🔍</p>
    }

    return (
        <section className="product-list">
            {products.map ((producto) => (
               <ProductCardComponent key={producto.id} product={producto} />
            ))}
        </section>
    )
}

export default ProductListComponent