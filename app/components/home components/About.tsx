import React from 'react'
import UnderlineHeader from './UnderlineHeader'

const About = () => {
  return (
    <div className="[grid-area:about]">
        <UnderlineHeader text="Acerca de mi" width="w-46" />

        <div className='text-xl text-justify text-(--gray)'>
            <p>Soy una desarrolladora frontend apasionada por la creación de aplicaciones web 
            modernas y responsive. Con una sólida base en 
                <span className='font-bold'> HTML</span>, <span className='font-bold'>CSS</span> y <span className='font-bold'>JavaScript</span>, 
            me especializo en <span className='font-bold'>React</span> y frameworks frontend modernos.
            </p>
            <p className='my-10'>Creo en escribir código limpio y mantenible, y en crear experiencias
                intuitivas. Mi objetivo se basa en transformar problemas complejos en soluciones 
                sencillas, elegantes y funcionales.
            </p>
        </div>

    </div>
  )
}

export default About