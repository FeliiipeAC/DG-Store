import './FooterComponent.css'

const COLUMNAS = [
   {
    titulo: 'tienda',
    links: ['Belleza', 'Perfume', 'Hogar']
   },
   {
    titulo:'Ayuda',
    links: ['Centro de ayuda', 'Despacho', 'Garatías', 'Cambios y devoluciones']
   },
   {
    titulo: 'Nosotros',
    links: ['Quiénes somos', 'Sucursales', 'Trabaja con nosotros', 'Contacto'],
   }
]

function FooterComponent() {
    return (
      <footer className="footer">
        <div className="footer__cols">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-dg">DG</span> Store
              </span>
            <p>Tu tienda favorita. Compra Online y retira en tienda</p>
          </div>

          {COLUMNAS.map((col) => (
            <div className="footer__col" key={col.titulo}>
              <h4>{col.titulo}</h4>
              <ul>
                {col.links.map((link) => (
                   <li key={link}>
                    <a href="/">{link}</a>
                   </li> 
                ))}
              </ul>
              </div> 
              ))}
          </div> 

          <div className="footer__bottom">
            © 2026 DG Store · Proyecto educativo de React · Hecho con React + Vite
          </div>
      </footer>   
    )
}

export default FooterComponent