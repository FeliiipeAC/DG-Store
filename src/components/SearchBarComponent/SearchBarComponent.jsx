import './SearchBarComponent.css'

function searchBarComponent({
    value,
    onChange,
    placeholder = 'Busca productos, marcas y mas...',
}) {
    return (
        <div className="searchbar">
            <input
                type="text"
                className="searchbar__input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-label="Buscar productos"
            />
            <span className="searchbar__icon" aria-hidden="true">
                🔍
            </span>
        </div>
    )
}

export default searchBarComponent