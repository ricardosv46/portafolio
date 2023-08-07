import React from "react"

const About = () => {
  return (
    <section className='about section bd-container' id='about'>
      <span className='section-subtitle'>Sobre mi</span>

      <h2 className='section-title'>Ricardo Solis</h2>

      <div className='about__container bd-grid'>
        <p className='about__description'>
        Soy un desarrollador Full Stack apasionado por crear experiencias web elegantes y eficientes. Tengo experiencia en el desarrollo de sitios web y aplicaciones web utilizando HTML, CSS y JavaScript. Además, utilizo tecnologías como React, Next.js, TypeScript y TailwindCSS para crear aplicaciones web escalables y personalizables con una experiencia de usuario fluida.<br/><br/>

        En cuanto al desarrollo de backend, tengo habilidades en Express, Node.js y bases de datos NoSQL como MongoDB. También cuento con experiencia en autenticación de usuarios utilizando JSON Web Tokens (JWT) y en la gestión de estados utilizando Redux. Además, tengo habilidades en el consumo de APIs y GraphQL, lo que me permite obtener información desde el backend de manera efectiva y eficiente.<br/><br/>

        Mantengo mis proyectos organizados y actualizados mediante el uso de Git y GitHub. Estoy comprometido a mantenerme al día con las últimas tendencias y tecnologías en el desarrollo web. Disfruto trabajando en equipo para crear soluciones web de alta calidad.<br/><br/>

        Si necesitas ayuda en el desarrollo de una aplicación web o móvil completa, desde el frontend hasta el backend, ¡no dudes en contactarme!
        </p>
      </div>
    </section>
  )
}

export default About
