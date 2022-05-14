import React from 'react'

const Services = () => {
  return (
    <section className='services section bd-container' id='conocimientos'>
      <h2 className='section-title'>Conocimientos</h2>

      <div className='services__container bd-grid'>
        <div className='services__data'>
          <i className='bx bx-laptop services__icon'></i>
          <h3 className='services__title'>Diseño Web</h3>
          <p className='services__description'>
            Maquetado CSS moderno y responsivo con flexbox, css grid, media
            querys. Experiencia en frameworks de estilos como Bootstrap o
            Tailwind CSS.
            <br />
            Uso del preprocesador <b>SASS</b> con variables, mixings, etc.
          </p>
        </div>
        <div className='services__data'>
          <i className='bx bxl-javascript services__icon'></i>
          <h3 className='services__title'>JavaScript</h3>
          <p className='services__description'>
            Uso de <b>JavaScript moderno</b> con Async Await, Arrow Functions,
            scope de variables, operador ternario, spread operation, promesas,
            conceptos del ECMAScript actual,
          </p>
        </div>
        <div className='services__data'>
          <i className='bx bxl-react services__icon'></i>
          <h3 className='services__title'>Font-End React</h3>
          <p className='services__description'>
            Frontend con React <b>Hooks</b>, uso de <b>Context API</b> o{' '}
            <b>Redux</b> para el manejo del estado global de la APP.
            <br />
            Fech, Axios para comunicarse con los servidores. Estilos con CSS
            moderno, autenticación con jwt.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
