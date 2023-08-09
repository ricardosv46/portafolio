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
          <i className='bx bxl-typescript services__icon'></i>
          <h3 className='services__title'>Typescript</h3>
          <p className='services__description'>
            Utilizo <b>TypeScript</b> para aprovechar características modernas 
            y tipos estáticos. Defino interfaces y types para una estructura 
            clara y escalable. Async/Await, Arrow Functions y promesas me 
            permiten código legible y eficiente
          </p>
        </div>

        <div className='services__data'>
          <i className='bx bxl-react services__icon'></i>
          <h3 className='services__title'>React Js</h3>
          <p className='services__description'>
            Frontend con React <b>Hooks</b>, uso de <b>Context API</b> o{' '}
            <b>Redux</b> para el manejo del estado global de la APP.
            <br />
            Fech, Axios para comunicarse con los servidores. Estilos con CSS
            moderno, autenticación con <b>JWT</b>.
          </p>
        </div>
        <div className='services__data'>
        <i className="bx devicon-nextjs-original services__icon"></i>
          <h3 className='services__title'>Next Js</h3>
          <p className='services__description'>
          En proyectos con <b>Next.js</b>, utilizo <b>Next Auth</b> para autenticación,  
          <b> SSR</b> para carga rápida, optimización de imágenes y rutas 
          preconfiguradas. Desarrollo aplicaciones full-stack con Next.js
          </p>
        </div>
        <div className='services__data'>
        <i className="bx bxl-nodejs services__icon"></i>
          <h3 className='services__title'>Node Js</h3>
          <p className='services__description'>
          Utilizo <b>Node</b> con <b>Express</b> para desarrollar un backend escalable. 
          Además, empleo <b>Mongoose</b> o <b>TypeORM</b> para crear modelos e 
          interactuar con bases de datos de <b>MongoDB</b>
          </p>
        </div>
       
      </div>
    </section>
  )
}

export default Services
