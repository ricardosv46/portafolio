import React from 'react'

import { data } from '../data/data'

const Proyectos = () => {
  return (
    <section className='portfolio section bd-container' id='portfolio'>
      <span className='section-subtitle'>Mis proyectos recientes</span>
      <h2 className='section-title'>Portafolio</h2>
      <div className='portfolio__container bd-grid'>
        {data.map(({ foto, nombre, tecnologias, link, git, tipo, equipo }) => (
          <div key={link} className='portfolio__content'>
            <p className='portfolio-absolute'>{tipo}</p>
            {equipo && <p className='portfolio-absolute-r'>Colaboración</p>}
            <a target='_blank' href={link}>
              <img src={foto} alt='' className='portfolio__img' />
            </a>
            <div className='portfolio__data'>
              <span className='portfolio__subtitle'>{tecnologias}</span>
              <h2 className='portfolio__title'>{nombre}</h2>
              <div className='flex'>
                <a target='_blank' href={link} className='button button-link'>
                  Ver pagina
                </a>
                {tipo === 'Personal' && (
                  <a target='_blank' href={git} className='button button-link'>
                    Ver github
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
