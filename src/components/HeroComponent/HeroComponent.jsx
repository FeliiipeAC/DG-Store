import { useState, useEffect } from 'react'
import ButtonComponent from '../ButtonComponent'
import './HeroComponent.css'

const SLIDES =[
   {
    titulo: 'Cyber DG Store',
    subtitulo: 'Hasta 40% de descuento en notebooks seleccionados',
    cta: 'Ver ofertas',
    clase: 'hero__slide--1',
   },
   {
    titulo: 'Arma tu PC gamer',
    subtitulo: 'Procesadores, tarjetjas de video y componentes al mejor precio',
    cta: 'Explorar productos',
    clase: 'hero__slide--2',
   },
   {
    titulo: 'Envio gratis 🚚',
    subtitulo: 'En compras sobre $99.990 a todo Chile',
    cta: 'Comprar ahora',
    clase: 'hero__slide--3',
   }
]

function HeroComponent({ onCta }) {
    const [actual,setActual] = useState(0)
    const total = SLIDES.length

    const siguiente = () => setActual((i) =>(i + 1) % total)
    const anterior = () => setActual((i) =>(i - 1 + total) % total)

    useEffect(() => {
        const id = setInterval(() => setActual((i) => (i + 1) % total), 4000)
        return () => clearInterval(id)
    }, [total])

    return (
       <section className="hero" aria-label="Destacados">
        <div className="hero__track" style={{ transform: `translateX(-${actual * 100}%)` }}>
         {SLIDES.map((s, i) => (
           <div className={`hero__slide ${s.clase}`} key={i}>
            <div className="hero__contenido">
              <h2 className="hero__titulo">{s.titulo}</h2>
              <p className="hero__subtitulo">{s.subtitulo}</p>
              <ButtonComponent variant="secondary" onClick={onCta}>
                {s.cta}
              </ButtonComponent>
            </div>
           </div>
         ))}
        </div>

        <button className="hero__flecha hero__flecha--izq" onClick={anterior} aria-label="Anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className="hero__flecha hero__flecha--der" onClick={siguiente} aria-label="Siguiente">
          <svg viewBox="0 0 24 24" aria-label="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>  
        </button>

        <div className="hero__dots">
          {SLIDES.map((_, i) => (
            <button
            key={i}
            className={`hero__dot${i == actual ? ' hero__dot--activo' : ''}`}
            onClick={() => setActual(i)}
            aria-label={`Ir al slide ${i + 1}`}
            />
          ))}            
        </div>
       </section> 
    )
}

export default HeroComponent