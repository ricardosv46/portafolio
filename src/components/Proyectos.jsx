import React from 'react'

import { data } from '../data/data'
import Link from '../icons/Link'
import { SiGithub } from 'react-icons/si'

const Proyectos = () => {
  return (
    <section className='portfolio section bd-container' id='portfolio'>
      <span className='section-subtitle'>Mis proyectos recientes</span>
      <h2 className='section-title'>Portafolio</h2>
      <div className='portfolio__container bd-grid'>
        {data.map(({ foto, nombre, tecnologys, link, git, tipo, equipo },index) => (
          <div key={index} className='portfolio__content'>
            <p className='portfolio-absolute'>{tipo}</p>
            {equipo && <p className='portfolio-absolute-r'>Colaboración</p>}
            <a target='_blank' href={link}>
              <img src={foto} alt='' className='portfolio__img' />
            </a>
            <div className='portfolio__data'>
              {/* <span className='portfolio__subtitle'>{tecnologias}</span> */}
              {/* <div className="portfolio__icons">
                  {tecnologys?.map((item,index) => {
                    const Item = item
                    return <Item key={index}/>
                    })}
              </div> */}
              <div className="portfolio__icons">
                  {tecnologys?.map((item,index) => <div key={index}>{item}</div>)}
              </div>
              <h2 className='portfolio__title'>{nombre}</h2>
              <div className='flex items-center'>
                <a target='_blank' href={link} className='button button-link items-center'>
                  Link <Link size={25} className=''/>
                </a>
                {tipo === 'Personal' && (
                  <a target='_blank' href={git} className='button button-link'>
                    <SiGithub size={25}/>
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
